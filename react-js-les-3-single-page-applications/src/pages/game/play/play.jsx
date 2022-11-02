import {useState} from "react";
import GameConfig from "./gameConfig.jsx";
import {useParams} from "react-router-dom";
import {getMaxNumberOfQuestionsForLocation} from "../../../API/capitalsAPI.js";

const Play = () => {
    const [nbQuestions, setNbQuestions] = useState(5)
    const [nbQuestionsGame, setNbQuestionsGame] = useState(nbQuestions)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const {location} = useParams()
    const maxQuestions = getMaxNumberOfQuestionsForLocation(location)

    const startGame = () => {
        setNbQuestions(nbQuestions)
        setCurrentQuestion(0)
    }

    return (
        <>
            <GameConfig nbQuestions={nbQuestions} maxQuestions={maxQuestions} setNbQuestions={setNbQuestions} startGame={startGame}/>
        </>
    )
}

export default Play;
