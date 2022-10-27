import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Game from "./pages/game/game.jsx";
import Highscores from "./pages/highscores/highscores.jsx";
import ChooseLocation from "./pages/game/chooseLocation.jsx";
import Play from "./pages/game/play.jsx";

const Routing = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/game"} element={<Game/>}>
                <Route path={'location'} element={<ChooseLocation/>}/>
                <Route path={'play/:location'} element={<Play/>}/>
            </Route>
            <Route path={"/highscores"} element={<Outlet/>}>
                <Route index element={<Highscores/>}/>
                <Route path={':location'} element={<Highscores/>}/>
            </Route>
        </Routes>
    )
}

export default Routing;
