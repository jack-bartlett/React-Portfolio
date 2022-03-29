import React from 'react';
import GitHomies from '../Assets/Images/GitHomies.jpg';
import BitFit from '../Assets/Images/BitFit.jpg';
import PasswordGenerator from '../Assets/Images/PasswordGenerator.jpg';
import EmployeeTracker from '../Assets/Images/EmployeeManagmentSystem.jpg';
import NoteTaker from '../Assets/Images/NoteTaker.jpg';
import ReadMeGenerator from '../Assets/Images/ReadMeGenerator.jpg';
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
                    backgroundImage: ` url(${GitHomies})`
                    
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
                    backgroundImage: ` url(${BitFit})`
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
                  style={{ backgroundImage: ` url(${PasswordGenerator})` }}>
                </div>
                <a href={
                  "https://github.com/jack-bartlett/Homework-03-Password-Generator"}>
                  Password Generator Repo</a>
              </div>

              <div className={"work-item"} >
                <div className={"work-item-image"}
                  style={{ backgroundImage: ` url(${EmployeeTracker})` }}>
                </div>
                <a href={
                  "https://github.com/jack-bartlett/Employee-Tracker-SQL"}>
                  Employee Managment System</a>
              </div>

              <div className={"work-item"} >
                <div className={"work-item-image"}
                  style={{ backgroundImage: ` url(${NoteTaker})` }}>
                </div>
                <a href={
                  "https://github.com/jack-bartlett/Note-Taker-Express.js"}>
                  Note Taker App</a>
              </div>

              <div className={"work-item"} >
                <div className="work-item-image"
                  style={{ backgroundImage: ` url(${ReadMeGenerator})` }}>
                </div>
                <a href={
                  "https://github.com/jack-bartlett/README-Generator-NodeJs.js"}>
                  ReadMe Generator</a>
              </div>

            </div>
          </td>
        </tr>
      </table>
       {/* <img className="portfolioImg" src={ReadMeGenerator} alt="project screenshot"></img>  */}
      <p>
        
      </p>
    </div>
  );
}