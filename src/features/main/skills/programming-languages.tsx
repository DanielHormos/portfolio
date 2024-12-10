export function ProgrammingLanguages() {
  const languages = ["TypeScript", "JavaScript", "Java", "C", "MATLAB", "SQL"];

  return (
    <>
      {languages.map((language, index) => {
        return (
          <div key={index} className="badge badge-ghost">
            {language}
          </div>
        );
      })}
    </>
  );
}
