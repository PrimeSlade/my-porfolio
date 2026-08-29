import React from "react";
import IntroSection from "./components/home/IntroSection";
import TechStack from "./components/home/TechStack";
import GitHubContributions from "./components/home/GitHubContributions";

const page = () => {
  return (
    <main className="bg-[#0a0a0a]">
      <IntroSection />
      <TechStack />
      <GitHubContributions />
    </main>
  );
};

export default page;
