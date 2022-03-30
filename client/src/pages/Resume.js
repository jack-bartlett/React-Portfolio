import React from 'react';
// import Res from '../../public/Jack_Bartlett_Engineering_Resume_2022.pdf';

import '../style.css'

export default function Resume() {
  return (
    <div style={{ padding: "16px" }}>
      <h1>Resume</h1>
      <p>
       <p>Check out my <a className="resume" href='Jack_Bartlett_Engineering_Resume_2022.pdf' download>Resume</a> for more.</p>
      </p>

      {/* <iframe src='/Assets/Jack_Bartlett_Engineering_Resume_2022.pdf' width="100%" height="600px;" id="ResumeIframe"></iframe> */}

    </div>

  );
}