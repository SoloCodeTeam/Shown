// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/NavbarComponents\'/NavbarComponents';
import HomeSectionComponents from './components/HomeSectionComponents/HomeSectionComponents';
import HomeSectionComponentsTwo from './components/HomeSectionComponentsTwo/HomeSectionComponentsTwo';
function App() {
  return (
    <div>
      <>
        <Navbar />
        <HomeSectionComponents />
        <HomeSectionComponentsTwo />
      </>
    </div>
  );
}

export default App;
