import React from 'react';

// how we are able to extract the key value pairs from props
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer({ currentPage, handlePageChange }) {
  return (
    <ul className="nav footer-tabs">
      <li className="nav-item">
        <a
          href="#GitHub"
          onClick={() => handlePageChange('GitHub')}
          // what kind of operator this is and what it is checking for?
          // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          // className={currentPage === 'GitHub' ? 'nav-link active' : 'nav-link'}
        >
          <a href={
            "https://github.com/jack-bartlett"}>
              GitHub</a>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#LinkedIn"
          onClick={() => handlePageChange('LinkedIn')}
          // a comment explaining what this logic is doing
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={currentPage === 'LinkedIn' ? 'nav-link active' : 'nav-link'}
        >
            <a href={"https://www.linkedin.com/in/jack--bartlett"}>
              LinkedIn</a>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Instagram"
          onClick={() => handlePageChange('Instagram')}
          // a comment explaining what this logic is doing
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={currentPage === 'Instagram' ? 'nav-link active' : 'nav-link'}
        >
          <a href={"https://www.instagram.com/_jack_beans/"}>
            Instagram</a>
        </a>
      </li>
    </ul>
  );
}

export default Footer;