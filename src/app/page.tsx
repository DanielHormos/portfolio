import { AboutMe } from "../features/main";
import { Profile } from "../features/main";
import { Skills } from "@/features/main/skills";

export default function Home() {
  return (
    <>
      <Profile />
      <AboutMe />
      <Skills />
    </>
  );
}
