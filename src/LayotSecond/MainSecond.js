import React from 'react';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';

const MainSecond = () => {
    return (
        <div>
           <Header></Header>
           <Container>
            <Row>
                <Col>
                 <Outlet></Outlet>
                </Col>             
            </Row>
           </Container>
           <Footer></Footer>
        </div>
    );
};

export default MainSecond;