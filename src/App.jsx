import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Loading } from "./components/Loading/Loading"; 
import { Footer } from "./components/Footer/Footer";
import { Projects } from "./components/Projects/Projects";

function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.App}>

      <div>
      <CustomCursor
        targets={['button', 'a', '.link', '.your-css-selector']}
        customClass='custom-cursor'
        dimensions={60}
        fill='var(--cursor-color)' // Use the CSS variable for color
        smoothness={{
          movement: 0.5,
          scale: 0.1,
          opacity: 0.2,
        }}
        opacity={0.6}
        targetScale={1.5}
        targetOpacity={0.6}
      />
    </div>

      {loading ? ( 
        <Loading />
      ) : (

        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
        
      )}
    </div>
  );
}

export default App;
