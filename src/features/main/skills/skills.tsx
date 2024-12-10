import { BackendSkills } from "./BackendSkills";
import { FrontEndSkills } from "./front-end-skills";
import { ProgrammingLanguages } from "./programming-languages";
import { ToolsSkills } from "./ToolsSkills";

export function Skills() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Skills</h1>
      <div className="skills-group space-y-6">
        <section className="p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Programming Languages</h2>
          <ProgrammingLanguages />
        </section>
        <section className="p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Frontend</h2>
          <FrontEndSkills />
        </section>
        <section className="p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Backend</h2>
          <BackendSkills />
        </section>
        <section className="p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Tools</h2>
          <ToolsSkills />
        </section>
      </div>
    </section>
  );
}
