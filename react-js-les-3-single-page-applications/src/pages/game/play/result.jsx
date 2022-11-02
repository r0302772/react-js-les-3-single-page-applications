import {useState} from "react";
import {addScore, getLastHighscoreName} from "../../../API/highscoresAPI.js";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Result = ({nbQuestions, score, location}) => {
    const [username, setUsername] = useState(getLastHighscoreName())
    const [done, setDone] = useState(false)

    const _addScore = () => {
        addScore(nbQuestions, score, location, username)
        setDone(true)
    }

    const form = (
        <Card className={'mt-4'}>
            <Card.Body>
                <h3>The end!</h3>
                <p>You've scored {score} out of {nbQuestions}!</p>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Username" value={username}
                                  onChange={evt => setUsername(evt.target.value)}/>
                    <div className="d-grid gap-2 mt-2">
                        <Button variant="primary" disabled={username === ''} onClick={_addScore}>Save to
                            highscores </Button>
                    </div>
                </Form.Group>
            </Card.Body>
        </Card>
    )

    const complete = (
        <>
            <Row className={'mt-4'}>
                <Col className={'text-center'}>
                    <h3>Your score had been saved!</h3>
                </Col>
            </Row>
            <Row>
                <Col className={'text-center'}>
                    <h4><Link to={`/highscores/${location}`}>Highscores</Link></h4>
                </Col>
            </Row>
        </>
    )

    return (
        <>
            {done ? complete : form}
        </>
    )
}

export default Result;
