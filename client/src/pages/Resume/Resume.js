import React from 'react';
import LazyLoad from 'react-lazyload';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Col, Row, Container } from "../../components/Grid";
import "../Resume/Resume.css"
import Footer from "../../components/Footer";
import Loading from "../../components/loading.js";
import data from "../../components/ResumeData/resumeData";


const Resume = () => {
    const flipAnimation = keyframes`${fadeIn}`;
    const Flip = styled.div`animation: 1s ${flipAnimation};`;
    return (
        <div className="resumePage">
            <Container fluid className="homeWrapper">
                <Row className="row-divided">
                    <Col size="lg-8">
                        <div className='resume'>
                            <Flip><h2><span className="resumeTitle">ENGINEERING + PROFESSIONAL EXPERIENCE</span></h2></Flip>
                            <br />
                            <br />
                            {data.map((job, i) => {
                                return (
                                    <>
                                        <Flip><h4 key={i} className="companyName">{job.companyName}</h4></Flip>
                                        <Flip><h5 className="jobTitle">{job.jobTitle}</h5></Flip>
                                        <Flip><p className="duration">{job.duration}</p></Flip>
                                        <Flip><p className="description">{job.description}</p></Flip>
                                        <br/>
                                    </>

                                )
                            })}
                            <Flip><h2><span className="resumeTitle">EDUCATION</span></h2></Flip>
                            <br />
                            <br />
                            <Flip><h4 className="companyName">GA-Tech Full Stack Coding Certificate</h4></Flip>
                            <Flip><p className="duration">October 2021 - April 2022</p></Flip>
                            <Flip><p className="description"> Learned how to build full stack websites and web applications utilizing and focusing on 'MERN' stack technologies, API integrations, relational and non relational databases, and server side development. Built and deployed one working application a week using new technologies. Collaborated on group projects developing full stack web applications</p></Flip>
                            <br />
                            <Flip><h4 className="companyName">Georgia College and State University</h4></Flip>
                            <Flip><p className="duration">2006-2011</p></Flip>
                            <Flip><p className="description">Bachelors of Arts in Interdisciplinary Studies, concentrations in Music, Psychology, Managment, and Computer Science.</p></Flip>
                            <br />

                        </div>
                    </Col>
                    <Col size="lg-4">

                        <div className="skills">
                            <Flip><h2><span className="resumeTitle">TECHNICAL SKILLS</span></h2></Flip>
                            <br />
                            <br />
                            <LazyLoad once height="100%" placeholder={<Loading />}>
                                <ul className="fa-ul">
                                    <Flip><li className="skillList"><img className='logo' src="assets/Images/HTML5_logo_and_wordmark.png" alt="HTML logo"></img>HTML 5</li></Flip>
                                    <Flip><li className="skillList"><img className='logo' src="assets/Images/css3.png" alt="CSS logo"></img>CSS3</li></Flip>
                                    <Flip><li className="skillList"><img className='logo' src="assets/Images/javascript.png" alt="javascript logo"></img>Javascript</li></Flip>
                                    <Flip><li className="skillList"><img className='logo' src="assets/Images/nodejs-new-white.png" alt="Node logo"></img>Node.js</li></Flip>
                                    <Flip><li className="skillList"><img className='logo' src="assets/Images/React-icon.png" alt="React logo"></img>React</li></Flip>
                                    <Flip><li className="skillList"><img className='logo' src="assets/Images/jquery-vertical.png" alt="jQuery logo"></img>jQuery</li></Flip>
                                    <Flip><li className="skillList"><img className='logo' src="assets/Images/mysql.png" alt="SQL logo"></img>MySQL</li></Flip>
                                    <Flip><li className="skillList"><img className='logo' src="assets/Images/MongoDB_Leaf_White_RGB.png" alt="mongo logo"></img>MongoDB</li></Flip>
                                    <Flip><li className="skillList"><img className='logo' src="assets/Images/rest-api.png" alt="restAPI logo"></img>REST API</li></Flip>
                                    <Flip><li className="skillList"><img className='logo' src="assets/Images/json.png" alt="JSON logo"></img>JSON</li></Flip>
                                    <Flip><li className="skillList"><img className='logo' src="assets/Images/expressjs-icon.png" alt="express logo"></img>Express</li></Flip>
                                    <Flip><li className="skillList"><img className='logo' src="assets/Images/heroku.png" alt="heroku logo"></img>Heroku</li></Flip>
                                    <Flip><li className="skillList"><img className='logo' src="assets/Images/GitHub-Logo.png" alt="Github logo"></img>Git</li></Flip>
                                </ul>
                            </LazyLoad>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <Footer />
        </div>
    );
};

export default Resume;

// export default function Resume() {
//   return (
//     <div style={{ padding: "16px" }}>
//       <h1>Resume</h1>
//       <p>
//        <p>Check out my <a className="resume" href='Jack_Bartlett_Engineering_Resume_2022.pdf' download>Resume</a> for more.</p>
//       </p>

//     </div>

//   );
// }