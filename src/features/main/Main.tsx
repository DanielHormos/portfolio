import { AboutMe } from "./content";
import { Profile } from "./profile";

export default function Main() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-6 p-4 md:p-6">
        <div className="max-w-xs mx-auto text-center">
          <Profile />
        </div>
        <div className="text-left">
          <AboutMe />
        </div>
      </div>
    </>
  );
}
