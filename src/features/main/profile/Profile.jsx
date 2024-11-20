import { Title } from "./Title";
import { ProfilePicture } from "./ProfilePicture";
import { Links } from "./Links";
import { Name } from "./Name";

export function Profile() {
  return (
    <div className="grid grid-rows-[auto_auto_auto_auto] justify-items-center gap-2 p-8">
      <ProfilePicture />
      <Name />
      <Title />
      <Links />
    </div>
  );
}
