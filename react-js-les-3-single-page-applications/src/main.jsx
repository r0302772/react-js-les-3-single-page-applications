import ReactDOM from 'react-dom/client'
import {StrictMode} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from "react-router-dom";
import Routing from "./routing.jsx";
import NavbarBootstrap from "./navbar";
import {Container} from "react-bootstrap";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <BrowserRouter>
            <NavbarBootstrap/>
            <Container className={"mt-4"}>
                <Routing/>
            </Container>
        </BrowserRouter>
    </StrictMode>
)
