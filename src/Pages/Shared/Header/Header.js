// import React, { useContext } from 'react';
// import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../Assets/logo.jpg';
import Image from 'react-bootstrap/Image'
// import { FaUser } from 'react-icons/fa';
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
                <Image
            roundedCircle 
            className='me-2'
            src={logo}
            style={{height:'60px'}}
           ></Image> 
                 </Link></Navbar.Brand>
                 <Navbar.Brand><Link to='/getstarted'>Easy-Learning-Plartform</Link></Navbar.Brand>
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
                                        <span className='user-name me-2 d-none'>{user?.displayName}</span>
                                        <span><img className='user-img' src={user?.photoURL} alt="" /> </span>
                                        <Button className='logOut' variant="light" onClick={handleLogOut}>Log out</Button>
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