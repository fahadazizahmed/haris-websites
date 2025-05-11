import React from 'react';

// import Header from './components/Header';
// import Hero from './components/Hero';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Green from './components/Green/Gree';
import Mission from './components/Our Mission/Mission';
import AboutSection from './components/AboutSection/AboutSection';
import KnowMore from './components/KnowMore/KnowMore';
import VoteCount from './components/VoteCount/VoteCount';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Green></Green>
      <Mission />
      <AboutSection />
      <KnowMore />
      <VoteCount />
    </div>
  );
}

export default App;