import {Accordion} from "react-bootstrap";
import HighscoresForLocation from "./highscoresForLocation.jsx";

const AccordionLayout = ({locations, selectedLocation, setSelectedLocation, highscores}) => {

    const accordionItem = (l) => (
        <Accordion.Item eventKey={l} key={l} onClick={() => setSelectedLocation(l)}>
            <Accordion.Header>{l}</Accordion.Header>
            <Accordion.Body>
                {highscores && <HighscoresForLocation highscores={highscores}/>}
            </Accordion.Body>
        </Accordion.Item>
    )

    return (
        <Accordion defaultActiveKey={selectedLocation}>
            {locations.map(l => accordionItem(l))}
        </Accordion>
    )
}

export default AccordionLayout;
