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
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ShootingStars />
      <main>
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
