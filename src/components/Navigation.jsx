import { useState } from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import hamburgerIcon from '../assets/shared/icon-hamburger.svg'
import logo from '../assets/shared/logo.svg'
import '../sass/nav.scss'

export default function Navigation() {
    const [show, setShow] = useState(false)
    const [classShow, setClassShow] = useState('show closed')
    const [selected, setSelected] = useState(0)

    const showing = () => {
        if(show) {
            setShow(false)
            setTimeout(() => {
                setClassShow('closed')
            }, 500)
        } else {
            setShow(true)
            setClassShow('show closed')
        }
    }
    return(
        <Navbar collapseOnSelect expand="md" id='navigation'>
            <Container fluid className='d-flex align-items-space pt-4 pt-md-0'>
                <Navbar.Brand href="">
                <img src={logo} alt="logo icon"/>
                </Navbar.Brand>
                <img id='hamburger' className='d-inline d-md-none  me-5' src={hamburgerIcon} alt="hamburger icon"
                onClick={() => showing()}/>
                <Navbar.Collapse id="responsive-nav" className={`navLink justify-content-end mt-2 mt-md-0 ${show? 'show open': ''} ${show? '': classShow}`}>
                    <div id='line-bar' className='d-none d-lg-inline'/>
                    <Nav className='d-flex justify-content-around align-items-center'>
                        <Link to="/" className={`${selected === 0 ? 'active' : ''}`} onClick={() => setSelected(0)}><span>00</span> HOME</Link>
                        <Link to="/destination" className={`${selected === 1 ? 'active' : ''}`} onClick={() => setSelected(1)}><span>01</span> DESTINATION</Link>
                        <Link href="" className={`${selected === 2 ? 'active' : ''}`} onClick={() => setSelected(2)}><span>02</span> CREW</Link>
                        <Link href="" className={`${selected === 3 ? 'active' : ''}`} onClick={() => setSelected(3)}><span>03</span> TECHNOLOGY</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}