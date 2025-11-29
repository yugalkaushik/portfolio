import React, { Suspense, lazy } from "react";
import Hero from "./components/hero";

const About = lazy(() => import("./components/about"));
const Experience = lazy(() => import("./components/experience"));
const Projects = lazy(() => import("./components/grid"));
const GitHubActivity = lazy(() => import("./components/github-activity"));
const Contact = lazy(() =>
  import("./components/contact").then((module) => ({ default: module.Contact }))
);
const BottomNav = lazy(() => import("./components/bottom-nav"));

const SectionSkeleton = () => (
  <div className="section-pad px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto h-40 rounded-uniform border border-white/10 bg-white/[0.02] animate-pulse" />
  </div>
);

function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 relative overflow-x-hidden w-full max-w-full">
      <div className="h-12" />
      <main className="relative z-10 w-full max-w-full">
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <GitHubActivity />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <div className="h-24 sm:h-28" />
      <Suspense fallback={null}>
        <BottomNav />
      </Suspense>
    </div>
  );
}

export default App;
