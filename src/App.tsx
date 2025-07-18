import React, { useEffect } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/grid";
import GitHubActivity from "./components/github-activity";
import { Contact } from "./components/contact";
import { ShootingStars } from "./components/shooting-stars";

function App(): React.JSX.Element {
  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no');
    }
    
    document.body.style.zoom = '1';
    document.documentElement.style.zoom = '1';
    
    const preventZoom = (e: Event) => {
      e.preventDefault();
      return false;
    };
    
    document.addEventListener('gesturestart', preventZoom);
    document.addEventListener('gesturechange', preventZoom);
    document.addEventListener('gestureend', preventZoom);
    
    return () => {
      document.removeEventListener('gesturestart', preventZoom);
      document.removeEventListener('gesturechange', preventZoom);
      document.removeEventListener('gestureend', preventZoom);
    };
  }, []);

  return (
    <div 
      className="min-h-screen bg-white relative overflow-hidden w-full max-w-full"
      style={{ 
        zoom: 1, 
        transform: 'scale(1)', 
        transformOrigin: 'top left',
        width: '100vw',
        maxWidth: '100vw'
      }}
    >
      <ShootingStars />
      <main className="relative z-10 w-full max-w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GitHubActivity />
        <Contact />
      </main>
    </div>
  );
}

export default App;
