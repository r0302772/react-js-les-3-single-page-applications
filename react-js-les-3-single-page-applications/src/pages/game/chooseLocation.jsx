import {ListGroup} from "react-bootstrap";
import {getAllLocations, getSelectedLocation, setSelectedLocation} from "../../API/capitalsAPI.js";
import {useNavigate} from "react-router-dom";

const ChooseLocation = () => {
    const selectedLocation = getSelectedLocation()
    const locations = getAllLocations()
    const navigate = useNavigate()

    const selectLocation = (location) => {
        setSelectedLocation(location)
        navigate(`/game/play/${location}`)
    }

    return (
        <ListGroup as="ul">
            {locations.map(l => (
                <ListGroup.Item key={l} as="li" active={selectedLocation === l} action
                                onClick={() => selectLocation(l)}>
                    {l}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default ChooseLocation;
