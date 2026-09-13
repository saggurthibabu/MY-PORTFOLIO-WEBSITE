import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import NeuralNetwork from '@/components/NeuralNetwork';
import BinaryRain from '@/components/BinaryRain';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <CustomCursor />
      <BinaryRain />
      <NeuralNetwork />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Certificates />
          <Achievements />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
