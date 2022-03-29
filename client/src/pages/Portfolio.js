import React from 'react';
// import GitHomies from '../Assets/Images/GitHomies.jpg';
// import BitFit from '../Assets/Images/BitFit.jpg';
// import PasswordGenerator from '../Assets/Images/PasswordGenerator.jpeg';
// import EmployeeTracker from '../Assets/Images/EmployeeManagmentSystem.jpeg';
// import NoteTaker from '..Assets/Images/NoteTaker.jpeg';
// import ReadMeGenerator from '..Assets/Images/ReadMeGenerator.jpeg';
import '../style.css'

export default function Portfolio() {
  return (
    <div>

      <table style={{ width: "100%" }}>
        <tr >
          <td style={{
            width: "15%",
            padding: "2%",
            verticalAlign: "top",
            textAlign: "right",
            fontSize: "xx-large",
            borderStyle: "solid",
            borderWidth: "0px",
            bordeRightWidth: "3px",
            borderColor: "#11a08d",
            color: "#11a08d",
            wordBreak: "keep-all",
          }}>
            <h1>Portfolio</h1>
          </td>

          <td style={{
            width: "100%",
            padding: "1%",
          }}>

            <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}>

              <div className={
                "work-item"
              }>

                <div className={
                  "work-item-image"
                }
                  style={{
                    backgroundImage: "url('Assets/Images/GitHomies.jpg')"
                    
                  }}></div>

                <a href={"https://gh.githomies.com/"}>
                  GitHomies</a>

                <a href={
                  "https://github.com/jack-bartlett/gitHomies"}
                  style={{ top: "60%" }}>
                  GitHomies Repo</a>
              </div>

              <div className={"work-item"}>
                <div className={"work-item-image"}
                  style={{
                    backgroundImage: "url(assets/Images/BitFit.jpg)"
                  }}>
                </div>
                <a href={
                  "https://bitfitted.herokuapp.com/"}>
                  BitFit</a>
                <a href={
                  "https://github.com/jack-bartlett/BitFit"}>
                  BitFit</a>
              </div>

              <div className={"work-item"}>
                <div className={"work-item-image"}
                  style={{ backgroundImage: "url(assets/Images/PasswordGenerator.jpg)" }}>
                </div>
                <a href={
                  "https://github.com/jack-bartlett/Homework-03-Password-Generator"}>
                  Password Generator Repo</a>
              </div>

              <div className={"work-item"} >
                <div className={"work-item-image"}
                  style={{ backgroundImage: "url(assets/Images/EmployeeManagmentSystem.jpg)" }}>
                </div>
                <a href={
                  "https://github.com/jack-bartlett/Employee-Tracker-SQL"}>
                  Employee Managment System</a>
              </div>

              <div className={"work-item"} >
                <div className={"work-item-image"}
                  style={{ backgroundImage: "url(assets/Images/NoteTaker.jpg)" }}>
                </div>
                <a href={
                  "https://github.com/jack-bartlett/Note-Taker-Express.js"}>
                  Note Taker App</a>
              </div>

              <div className={"work-item"} >
                <div className={"work-item-image"}
                  style={{ backgroundImage: "url(assets/Images/ReadMeGenerator.jpg)" }}>
                </div>
                <a href={
                  "https://github.com/jack-bartlett/README-Generator-NodeJs.js"}>
                  ReadMe Generator</a>
              </div>

            </div>
          </td>
        </tr>
      </table>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  );
}