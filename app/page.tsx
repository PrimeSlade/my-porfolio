import React from "react";
import IntroSection from "./components/home/IntroSection";
import TechStack from "./components/home/TechStack";

const page = () => {
  return (
    <main className="space-y-20">
      <IntroSection />
      <TechStack />
    </main>
  );
};

export default page;
