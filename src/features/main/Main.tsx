import { AboutMe } from "./content";
import { Profile } from "./profile";

export default function Main() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] lg:gap-6 lg:p-20 gap-4  p-4 ">
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
