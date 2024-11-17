import { ProfileInfo } from "./ProfileInfo";
import { ProfilePicture } from "./ProfilePicture";

export function Profile() {
  return (
    <div className="p-10 border border-l-rose-300">
      <ProfilePicture />
      <ProfileInfo />
    </div>
  );
}
