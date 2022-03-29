import React from 'react';
import Header from './components/Header.js';
// import Footer from './components/Footer.js';
import Project from './components/Project.js';

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Project` and rendering it in the return method.
// 

// const App = () => <Project />;

// export default App;

export default function App() {
  return (
    <div>
      <Project />
    </div>
  );
}

