import { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import hamburgerIcon from '../assets/shared/icon-hamburger.svg'
import logo from '../assets/shared/logo.svg'
import '../sass/nav.scss'

export default function Navigation() {
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState(0)

    return(
        <>
            <Navbar collapseOnSelect expand="md" id='navigation'>
                <Container fluid className='d-flex align-items-space pt-4 pt-md-0'>
                    <Navbar.Brand href="">
                    <img src={logo} alt="logo icon"/>
                    </Navbar.Brand>
                    <img id='hamburger' className='d-inline d-md-none  me-5' src={hamburgerIcon} alt="hamburger icon" onClick={() => setShow(true)}/>
                    <Navbar.Collapse id="responsive-nav" className={`navLink justify-content-end mt-2 mt-md-0`}>
                        <div id='line-bar' className='d-none d-lg-inline'/>
                        <Nav className='d-flex justify-content-around align-items-center'>
                            <Link to="/space-tourism/" className={`${selected === 0 ? 'active' : ''}`} onClick={() => setSelected(0)}><span>00</span> HOME</Link>
                            <Link to="/space-tourism/destination" className={`${selected === 1 ? 'active' : ''}`} onClick={() => setSelected(1)}><span>01</span> DESTINATION</Link>
                            <Link to="/space-tourism/crew" className={`${selected === 2 ? 'active' : ''}`} onClick={() => setSelected(2)}><span>02</span> CREW</Link>
                            <Link to="/space-tourism/technology" className={`${selected === 3 ? 'active' : ''}`} onClick={() => setSelected(3)}><span>03</span> TECHNOLOGY</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Offcanvas show={show} placement="end" id="offcanvas">
                <Offcanvas.Header>
                    <div className='close' onClick={() => setShow(false)}>
                        <div />
                        <div />
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                            <Link to="/space-tourism/" className={`${selected === 0 ? 'active' : ''}`} onClick={() => setSelected(0)}><span>00</span> HOME</Link>
                            <Link to="/space-tourism/destination" className={`${selected === 1 ? 'active' : ''}`} onClick={() => setSelected(1)}><span>01</span> DESTINATION</Link>
                            <Link to="/space-tourism/crew" className={`${selected === 2 ? 'active' : ''}`} onClick={() => setSelected(2)}><span>02</span> CREW</Link>
                            <Link to="/space-tourism/technology" className={`${selected === 3 ? 'active' : ''}`} onClick={() => setSelected(3)}><span>03</span> TECHNOLOGY</Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}