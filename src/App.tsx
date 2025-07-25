import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/grid";
import GitHubActivity from "./components/github-activity";
import { Contact } from "./components/contact";
import { ShootingStars } from "./components/shooting-stars";

function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden w-full max-w-full">
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
