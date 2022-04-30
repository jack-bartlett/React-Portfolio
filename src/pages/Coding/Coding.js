import React from "react";
import LazyLoad from 'react-lazyload';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Col, Row, Container } from "../../components/Grid";
import { Card, CardImg, CardDeck, image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Coding/Coding.css";
import data from "../../components/WebDevData/webdev"
import Footer from "../../components/Footer";
import Loading from "../../components/loading";
// import EmployeeManagementSystem from "../../EmployeeManagmentSystem.jpg";


const WebDev = () => {
    const fadeRightAnimation = keyframes`${fadeIn}`;
    const FadeRight = styled.div`animation: 2s ${fadeRightAnimation}`

    return (
        <div className="webDevPage">
            <Container fluid >
                <Row>
                    <Col size="lg-12">
                        <Card className='mt-5 mb-5'>
                            {data.map((dev) => {
                                return (
                                    <div key={dev.id} className="devCards">
                                        <Card.Body>
                                            <LazyLoad once height="100%" placeholder={<Loading />}>
                                                <CardImg className='devCardImage' src={dev.image} alt={dev.alt}></CardImg>
                                                <div className="devCardStuff">
                                                    <FadeRight><Card.Title className="devCardHeader">{dev.name}</Card.Title></FadeRight>
                                                    <FadeRight><Card.Text className="devText">{dev.text}</Card.Text></FadeRight>
                                                    <FadeRight><a href={dev.appUrl}><button className="project">Deploy The App</button></a></FadeRight>
                                                    <FadeRight><a href={dev.githubUrl}><button className="project">Github Repository</button></a></FadeRight>
                                                </div>
                                            </LazyLoad>
                                        </Card.Body>
                                    </div>
                                )
                            })}
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div>
            {/* <img src={EmployeeManagementSystem} alt="EmployeeManagementSystem"/> */}
            </div>
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    );

};

export default WebDev;