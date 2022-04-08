import React, { useState } from 'react';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Footer from './Footer';
import Header from './Header';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

export default function Project() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // the functionality of this method
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    // if (currentPage === 'Contact') {
    //   return <Contact />;
    // }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* what we are passing as props! */}
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {/* {renderPage()} */}
    </div>
  );
}
