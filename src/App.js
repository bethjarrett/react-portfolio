import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import React from "react";


function App() {
  return (
    <div className="page">
        <Navigation />
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Footer />        
    </div>
  );
}

export default App;