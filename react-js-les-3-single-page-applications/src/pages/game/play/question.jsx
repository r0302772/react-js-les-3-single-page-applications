import {Button, Card, Col, Row} from "react-bootstrap";

const Question = ({score, nbQuestions, currentQuestion, answers, country, answerQuestion}) => {
    return (
        <>
            <Row className={'mt-4'}>
                <Col>
                    <h2>Question {currentQuestion + 1} / {nbQuestions}</h2>
                </Col>
                <Col className={'text-end'}>
                    <h2>Score: {score}/{nbQuestions}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <p>What is the capital of <strong>{country}</strong>?</p>
                            <div className="d-grid gap-2">
                                {answers.map(answer => (
                                    <Button key={answer} variant="primary" onClick={() => answerQuestion(answer)}>
                                        {answer}
                                    </Button>))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Question;
