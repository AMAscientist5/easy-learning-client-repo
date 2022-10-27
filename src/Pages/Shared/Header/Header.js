// import React, { useContext } from 'react';
// import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../Assets/logo.png';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [toggle, setToggle] = useState(true)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/'>       
                <Image className='me-2' src={Logo} style={{height:'50px'}}></Image> 
                </Link></Navbar.Brand>
                 <Navbar.Brand><Link className='fs-3' to='/getstarted'>Aradun</Link></Navbar.Brand>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link> <Link to='/getstarted'>Get Started</Link></Nav.Link>
                        <Nav.Link href="#features"> <Link to='/'>All Courses</Link></Nav.Link>
                        <Nav.Link href="#features"> <Link to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link href="#features"> <Link to='/faq'>FAQ</Link></Nav.Link>
                    
                        {
                            toggle ? <Nav.Link href="#pricing"> <button className='border-0' onClick={ () => setToggle(!toggle)}>Dark</button></Nav.Link>
                            : 
                            <Nav.Link href="#pricing"><button className='border-0' onClick={ () => setToggle(!toggle)}>Light</button></Nav.Link>
                        }                                                                  
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <div>
                                          <Button className='logOut' variant="light" onClick={handleLogOut}>Log out</Button>
                                          <img title={user?.displayName} className='user-img' src={user?.photoURL} alt="" />                                                    
                                    </div>
                                    :
                                    <>
                                        <Link className='login' to='/login'>Login</Link>
                                        <Link className='register' to='/register'>Register</Link>
                                    </>
                            }
                        </Nav.Link>
                        {/* <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px'}}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                // : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    
                    <div className='d-lg-none'>
                        
                    </div> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;