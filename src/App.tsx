import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/grid";
import GitHubActivity from "./components/github-activity";
import { Contact } from "./components/contact";
import BottomNav from "./components/bottom-nav";

function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 relative overflow-x-hidden w-full max-w-full">
      <div className="h-12 sm:h-28" />
      <main className="relative z-10 w-full max-w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GitHubActivity />
        <Contact />
      </main>
      <div className="h-24 sm:h-28" />
      <BottomNav />
    </div>
  );
}

export default App;
