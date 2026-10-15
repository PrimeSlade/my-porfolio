"use client";

import { useState } from "react";
import { skillCategories, skills, SkillCategory } from "./skills";

const SkillWall = () => {
  const [filter, setFilter] = useState<SkillCategory | "all">("all");

  return (
    <section id="skills">
      <div className="section-head">
        <div>
          <h2>Skills</h2>
          <p>{skills.length} tools I build with. Pick a group to see what each is for.</p>
        </div>
      </div>
      <div className="tabs-list" role="group" aria-label="Filter skills">
        {skillCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            data-hue={c.id === "all" ? undefined : c.id}
            aria-pressed={filter === c.id}
            onClick={() => setFilter(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <ul className={`logos boxed${filter !== "all" ? " filtered" : ""}`}>
        {skills.map(({ name, Icon, category, brand, big }) => (
          <li
            key={name}
            className={`lg${big ? " big" : ""}${filter === category ? " match" : ""}`}
            style={brand ? ({ "--b": brand } as React.CSSProperties) : undefined}
            title={name}
          >
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillWall;
