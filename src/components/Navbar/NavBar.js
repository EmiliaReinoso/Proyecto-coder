import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget';


function NavBar () {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to='/'>React-Ecommerce</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='' to="/category/remeras">Remeras</Link>
                            <NavLink className="" activeClassName='' to="/categoria/nosotros">Nosotros</NavLink>
                        </Nav>
                            <Link to="/cart">Carrito</Link>
                            <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default NavBar;