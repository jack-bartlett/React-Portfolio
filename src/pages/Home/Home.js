import React from "react";
import styled, { keyframes } from 'styled-components';
import { zoomIn} from 'react-animations';
import { Col, Row, Container } from "../../components/Grid";
import "../Home/home.css"



const Home = () => {
    const fadeUpAnimation = keyframes`${zoomIn}`;
    const FadeUp = styled.div `animation: 1s ${fadeUpAnimation};`;

    return (
    
        <Container fluid >
            <Row>
                    <Col size="lg-2" className="leftside"></Col>
                    <Col size="lg-10" className="leftside">
                            <div className='homeCard-body'>
                                <div className="homeTextDiv">
                                <FadeUp><div className="homeIntro">Hey there...</div></FadeUp>
                                    <FadeUp><p className="homeText">I'm Jack, an aspiring software developer, I spent the last decade working in the fast paced, ever-changing music industry as an audio engineer.</p></FadeUp>
                                    <FadeUp><p className="homeText">There I learned how to work well under intense pressure, change creative directions, and still meet deadlines while putting my heart and soul into every project.</p></FadeUp>
                                    <FadeUp><p className="homeText">This challenging line of work gave me a relentless work-ethic, taught me to be the "glue" that holds a team together, and taught me to be the guy that "gets it done".</p></FadeUp>
                                    <FadeUp><p className="homeText">Additionally, I recently earned a certificate in Full Stack Web Development from GA-Tech, where I developed both Front and Back End skills focusing on 'MERN' stack technologies.</p></FadeUp>
                                    <FadeUp><p className="homeText">I'm excited to take this next step into the world of software development by bringing my passion for creative composition to applications and websites.</p></FadeUp>
                                </div>
                            </div>
                    </Col>
            </Row>
        </Container>
    
    );
};

export default Home;