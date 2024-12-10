export function ToolsSkills() {
  const skills = [
    "GitHub",
    "Docker Compose",
    "Jest",
    "Mocha",
    "Supertest",
    "Agile",
    "Scrum",
    "Kanban",
    "Postman",
    "Swagger/OpenAPI",
    "TDD (Test-Driven Development)",
    "Feature Slicing",
  ];
  return (
    <>
      {skills.map((skill) => {
        return (
          <div key={skill} className="badge badge-ghost">
            {skill}
          </div>
        );
      })}
    </>
  );
}
