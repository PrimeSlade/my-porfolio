"use client";

import { useState } from "react";
import { skillCategories, skills, SkillCategory } from "./skills";

const SkillWall = () => {
  const [filter, setFilter] = useState<SkillCategory | "all">("all");

  return (
    <section className="section">
      <div className="sec-head">
        <h2>Skills</h2>
        <p>{skills.length} tools I build with. Pick a group to see what each is for.</p>
      </div>
      <div className="skillwall">
        <div className="filters" role="group" aria-label="Filter skills">
          {skillCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={filter === c.id}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="logos" data-f={filter}>
          {skills.map(({ name, Icon, category, brand, big }) => (
            <div
              key={name}
              className={`lg${big ? " big" : ""}${filter === category ? " match" : ""}`}
              style={brand ? ({ "--b": brand } as React.CSSProperties) : undefined}
              title={name}
            >
              <Icon aria-hidden="true" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillWall;
