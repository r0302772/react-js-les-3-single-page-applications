import {getSelectedLocation} from "../../API/capitalsAPI.js";
import {Link, Navigate, Outlet, useLocation} from "react-router-dom";

const Game = () => {
    const chosenLocation = getSelectedLocation()
    const {pathname} = useLocation()

    let text
    if (chosenLocation) {
        text = (
            <p>
                You've chosen to practice the capitals in {chosenLocation}.&nbsp;
                <Link to={'location'}>Click here</Link> to change the location.
            </p>
        )
    } else {
        text = <p> Please choose a location before playing the game.</p>
    }

    if (!chosenLocation && !pathname.endsWith('location')) {
        return <Navigate to={'location'}/>
    }

    return (
        <>
            <h1>Play the game!</h1>
            {text}
            <Outlet/>
        </>
    )
}

export default Game;
