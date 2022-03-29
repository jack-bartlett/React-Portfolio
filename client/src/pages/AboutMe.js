import React from 'react';
import ProfilePic from '../Assets/Images/JackStudioAMidi.jpg';
// import GitHomies from '../Assets/Images/GitHomies.jpg';
export default function AboutMe() {
  return (
    <div>
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
            padding: '1%'
          }}>

            Multidisciplinary Engineer: Full Stack Web Developer focused on Back-End technologies. Grammy Award winning, multi-platinum audio engineer.
          </td>

        </tr>
      </table>
      <br></br>
      <br></br>
      <br></br>
      <p>
        I am an aspiring software developer leveraging a creative problem solving background in audio engineering where i ran hundreds of major label sessions as a grammy nominated engineer, as well as trained hundreds of engineers over a decade. Additionally, I completed the Web Development Coding program at GA-Tech, where I collaborated on projects developing group applications and built and deployed a new application each week using new technologies. I'm excited to bring my passion for personal development, helping people, and an attention to detail to meet goals and exceed client expectations

      </p>
    </div>
  );
}