import Countries from 'countries-capitals'
import {randomIntFromInterval} from './utils.js'

/**
 * Retrieve an array of questions for the specified location. A question has the following format:
 *
 * {
 *     country: string                      // The country about which the question is posed.
 *     city: string                         // The capital city of the country.
 *     answers: [string, string, string]    // A selection of possible answers, one of which is correct.
 * }
 *
 * @param location {string} The location for which the questions must be retrieved.
 * @param numberOfQuestions {number} The amount of questions to be retrieved.
 * @return {{country: string, city: string, answers: [string, string, string]}[]}
 */
export const getQuestions = (location, numberOfQuestions) => {
    if (!location) {
        throw new Error('The location passed to getQuestions is undefined or null')
    }

    if (numberOfQuestions > getMaxNumberOfQuestionsForLocation(location)) {
        throw new Error(`You've asked for more questions than are available`)
    }

    const countriesInLocation = shuffle(new Countries().byLocation(location)['countries'].filter(c => c.city))
    const questions = []

    for (let i = 0; i < numberOfQuestions; i++) {
        const {country, city} = countriesInLocation[i]
        const [alternative1, alternative2] = getAlternatives(countriesInLocation, i)
        questions.push({
            country,
            city,
            answers: shuffle([city, alternative1, alternative2])
        })
    }
    return questions
}

/**
 * Retrieve the maximum number of questions in a given location. This amount is a direct consequence of the number
 * of countries in the location for which the capital is known.
 *
 * @param location {string} The location for which to retrieve the maximum number of questions.
 * @return {number} The number of countries in the given location.
 */
export const getMaxNumberOfQuestionsForLocation = (location) => {
    return new Countries().byLocation(location)['countries'].filter(c => c.city).length || 0
}

/**
 * Retrieve a set containing all the supported locations.
 *
 * @return {string[]}
 */
export const getAllLocations = () => {
    return Array.from(getAllLocationsSet())
}

/**
 * Retrieve the location selected by the user, undefined if no location is currently selected.
 *
 * @return {string|undefined}
 */
export const getSelectedLocation = () => {
    return selectedLocation
}

/**
 * Alter the chosen location.
 *
 * @param newLocation {string}
 */
export const setSelectedLocation = (newLocation) => {
    if (!getAllLocationsSet().has(newLocation)) {
        throw new Error('Invalid location passed to the setSelectedLocation function.')
    }

    selectedLocation = newLocation
}


/**
 * ---------------------------------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------------------------------
 *                 DO NOT USE THE FOLLOWING IN YOUR SOLUTION, ONLY THE CODE ABOVE SHOULD BE USED
 * ---------------------------------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------------------------------
 */

let selectedLocation = undefined

/**
 * Perform a Fisher Yates shuffle on the given array.
 * @param array {any[]} The array to shuffle.
 * @returns {any[]} The shuffled array.
 */
const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    return array
}

/**
 * Retrieve all the locations for which there are minSize countries.
 * @return {Set<string>} A set of all the countries that match the given minSize.
 */
const getAllLocationsSet = () => {
    const countries = new Countries()
    return new Set(countries
        .list()
        .map(c => c.location)
        .filter(l => l)
        .filter(l => new Countries().byLocation(l)['countries'].filter(c => c.city).length >= 5)
    )
}

/**
 * Select two random capitals from the given array. Where the capital isn't that of the
 * country at position i
 *
 * @param countries An array of countries.
 * @param i The forbidden position, the selected capitals can't have this index.
 * @return {string[]}
 */
const getAlternatives = (countries, i) => {
    const alternatives = []

    while (alternatives.length !== 2) {
        const j = randomIntFromInterval(0, countries.length - 1)
        if (j === i || alternatives.includes(countries[j].city) || !countries[j].city) continue
        alternatives.push(countries[j].city)
    }
    return alternatives
}

