import {Button, Col, Row, Form} from "react-bootstrap";

const GameConfig = ({nbQuestions, maxQuestions, setNbQuestions, startGame}) => {

    const decrementNbQuestions = () => {
        setNbQuestions(nb => Math.max(5, nb - 1))
    }

    const incrementNbQuestions = () => {
        setNbQuestions(nb => Math.min(maxQuestions, nb + 1))
    }

    const nbConfig = (
        <>
            <Row>
                <Col>
                    <Button variant="primary" onClick={decrementNbQuestions}>-</Button>
                </Col>
                <Col className={'text-center'}>
                    Number of questions: {nbQuestions}
                </Col>
                <Col className={'text-end'}>
                    <Button variant="primary" onClick={incrementNbQuestions}>+</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Range min={5} max={maxQuestions} value={nbQuestions}
                                onChange={evt => setNbQuestions(Number(evt.target.value))}/>
                </Col>
            </Row>
        </>

    )

    return (
        <>
            {nbQuestions !== maxQuestions && nbConfig}
            <Row>
                <div className="d-grid gap-2">
                    <Button variant="primary" onClick={startGame}>
                        Start a new game!
                    </Button>
                </div>
            </Row>
        </>
    )
}

export default GameConfig;
