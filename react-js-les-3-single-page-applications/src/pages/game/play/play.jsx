import {useState} from "react";
import GameConfig from "./gameConfig.jsx";
import {useParams} from "react-router-dom";
import {getMaxNumberOfQuestionsForLocation, getQuestions} from "../../../API/capitalsAPI.js";
import Question from "./question.jsx";

const Play = () => {
    const [nbQuestions, setNbQuestions] = useState(5)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [questions, setQuestions] = useState(undefined)
    const [score, setScore] = useState(0)
    const {location} = useParams()
    const maxQuestions = getMaxNumberOfQuestionsForLocation(location)

    const startGame = () => {
        setCurrentQuestion(0)
        setScore(0)
        setQuestions(getQuestions(location, nbQuestions))
    }

    const answerQuestion = (answer) => {
        if (questions[currentQuestion].city === answer) {
            setScore(score => score + 1)
        }
        setCurrentQuestion(current => current + 1)
    }

    return (
        <>
            <GameConfig nbQuestions={nbQuestions} maxQuestions={maxQuestions} setNbQuestions={setNbQuestions}
                        startGame={startGame}/>
            {questions && <Question score={score} currentQuestion={currentQuestion} {...questions[currentQuestion]}
                                    nbQuestions={questions.length} answerQuestion={answerQuestion}/>}
        </>
    )
}

export default Play;
