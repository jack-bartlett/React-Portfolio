import React from 'react';
import ProfilePic from '../../Assets/Images/ColePic.jpg';
// import GitHomies from '../Assets/Images/GitHomies.jpg';
export default function AboutMe() {
  return (
    <div class="container">
      {/* <h1>About Me</h1> */}
      <br></br>
      <br></br>
      <table>
        <tr>

          <td style={{
            width: '15%',
            padding: '1%',
            verticalAlign: 'top',
            textAlign: 'right',
            fontSize: 'xx-large',
            borderStyle: 'solid',
            borderWidth: '0px',
            borderRightWidth: '3px',
            borderColor: '#11a08d',
            color: '#11a08d',
            wordBreak: 'keep-all'
          }}>
            Jack Bartlett

          </td>
          <td>
            <img className='profilePic' src={ProfilePic}></img>
          </td>

          <td style={{
            padding: '1%',
            margin: '20%'
          }}>
            <h4>

              Multidisciplinary Engineer: Full Stack Web Developer focused on Back-End technologies. Grammy Award winning, multi-platinum audio engineer.
            </h4>
          </td>

        </tr>
      </table>
      <br></br>
      <br></br>
      <br></br>

      <h6>
        I am an aspiring software developer, leveraging a creative problem-solving background in audio engineering where i ran hundreds of major label sessions and mentored others for over a decade.
      </h6>
      <h6>
        From working in the fast paced, ever-changing music industry, I've learned how to work well under intense pressure, change creative directions at a moments notice, and still meet deadlines while putting my heart and soul into every project. This challenging line of work has given me a relentless work-ethic and a strong collaborative, team-oriented mindset.
      </h6>
      <h6>
        Additionally, I recently earned a certificate in Full Stack Web Development from GA-Tech, where I developed skills with javascript, Node, Express, MongoDb, React, Apollo/Graphql, MySQL/sequelize, REST APIs, jQuery, Bootstrap, CSS, HTML, Git workflow and more.
      </h6>
      <h6>
        I'm excited to bring my passion for creative composition and my attention to detail to the world of software development by building and enhancing the performance of applications and websites that improve the world.
      </h6>

    </div>
  );
}