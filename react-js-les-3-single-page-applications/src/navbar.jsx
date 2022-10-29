import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const NavbarBootstrap = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <LinkContainer to={"/"}>
                    <Navbar.Brand>Capitals</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to={"/game"}>
                        <Nav.Link>Play the game</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/highscores"}>
                        <Nav.Link>Highscores</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarBootstrap;
