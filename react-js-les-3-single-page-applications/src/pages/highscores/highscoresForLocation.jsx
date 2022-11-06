import {ListGroup} from "react-bootstrap";
import {getLastHighscoreName} from "../../API/highscoresAPI.js";

const HighscoresForLocation = ({highscores}) => {
    const lastHighscoreName = getLastHighscoreName()

    return (
        <ListGroup variant="flush">
            {highscores.map(h => (
                <ListGroup.Item key={h.id} active={h.name ===lastHighscoreName}>
                    {h.name} - {h.score}/{h.nbQuestions} - {Math.round(h.score / h.nbQuestions * 100)}%
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default HighscoresForLocation;
