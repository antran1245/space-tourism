import { useState } from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import logo from '../assets/shared/logo.svg'
import hamburgerIcon from '../assets/shared/icon-hamburger.svg'
import '../sass/nav.scss'

export default function Navigation() {
    const [show, setShow] = useState(false)

    return(
        <Navbar collapseOnSelect expand="md" id='navigation'>
            <Container fluid className='d-flex align-items-space pt-4 pt-md-0'>
                <Navbar.Brand href="">
                <img src={logo} alt="logo icon"/>
                </Navbar.Brand>
                <img id='hamburger' className='d-inline d-md-none  me-5' src={hamburgerIcon} alt="hamburger icon"
                onClick={() => setShow(!show)}/>
                <Navbar.Collapse id="responsive-nav" className={`navLink justify-content-end mt-2 mt-md-0 ${show? 'show open': ''} ${show? '': 'show closed'}`}>
                    <div id='line-bar' className='d-none d-lg-inline'/>
                    <Nav className='d-flex justify-content-around align-items-center'>
                        <Nav.Link href=""><span>00</span> HOME</Nav.Link>
                        <Nav.Link href=""><span>01</span> DESTINATION</Nav.Link>
                        <Nav.Link href=""><span>02</span> CREW</Nav.Link>
                        <Nav.Link href=""><span>03</span> TECHNOLOGY</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}