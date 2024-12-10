export function BackendSkills() {
  const skills = [
    "Express.js",
    "Spring Boot",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Firebase",
  ];
  return (
    <>
      {skills.map((skill) => {
        return (
          <div key={skill} className="badge badge-ghost ">
            {skill}
          </div>
        );
      })}
    </>
  );
}
