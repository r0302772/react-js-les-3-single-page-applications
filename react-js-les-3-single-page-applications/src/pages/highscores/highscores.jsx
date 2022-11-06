import {useParams} from "react-router-dom";
import {useState} from "react";
import AccordionLayout from "./accordionLayout.jsx";
import {getAllLocations} from "../../API/capitalsAPI.js";
import {getScoresForLocation} from "../../API/highscoresAPI.js";
import {Col, ListGroup, Row} from "react-bootstrap";
import styled from "styled-components";
import HighscoresForLocation from "./highscoresForLocation.jsx";

const Col75vh = styled(Col)`
  max-height: 75vh !important;
  overflow: scroll;
`

const Highscores = () => {
    const {location} = useParams()
    const [selectedLocation, setSelectedLocation] = useState(location)
    const locations = getAllLocations()
    const highscores = getScoresForLocation(selectedLocation)

    return (
        <>
            <Row className={"d-block d-md-none"}>
                <Col>
                    <AccordionLayout locations={locations} selectedLocation={selectedLocation}
                                     setSelectedLocation={setSelectedLocation} highscores={highscores}/>
                </Col>
            </Row>

            <Row className={"d-none d-md-flex"}>
                <Col size={4}><h1 className={"ms-3"}>Locations</h1></Col>
                <Col size={8}><h1 className={"ms-3"}>Highscores</h1></Col>
            </Row>

            <Row className={"d-none d-md-flex"}>
                <Col75vh size={4} className={"overflow-auto"}>
                    <ListGroup variant="flush">
                        {locations.map(l => (
                            <ListGroup.Item key={l} active={l === selectedLocation} action
                                            onClick={() => setSelectedLocation(l)}>
                                {l}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col75vh>
                <Col75vh size={8} className={"overflow-auto"}>
                    {highscores && <HighscoresForLocation highscores={highscores}/>}
                </Col75vh>
            </Row>
        </>
    )
}

export default Highscores;
