import ReactDOM from 'react-dom/client'
import {StrictMode} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from "react-router-dom";
import Routing from "./routing.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <BrowserRouter>
            <Routing/>
        </BrowserRouter>
    </StrictMode>
)
