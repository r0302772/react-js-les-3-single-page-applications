/**
 * Return a random integer between min (inclusive) and max (inclusive).
 *
 * @param min {number} The lower bound (inclusive).
 * @param max {number} The upper bound (inclusive).
 * @return {number} The randomly generated number.
 */
export const randomIntFromInterval = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
