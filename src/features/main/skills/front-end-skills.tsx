export function FrontEndSkills() {
  const skills = [
    "React.js",
    "Next.js",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Vite",
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
