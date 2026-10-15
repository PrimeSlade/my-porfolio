import { areaName } from "./brands";
import type { SkillCategory } from "../home/skills";

// Legend for the area colours used on project cards and tech tags.
const ColorKey = () => (
  <ul className="key" aria-label="Colour key">
    {(Object.keys(areaName) as SkillCategory[]).map((a) => (
      <li key={a} data-hue={a}>
        <i aria-hidden="true" />
        {areaName[a]}
      </li>
    ))}
  </ul>
);

export default ColorKey;
