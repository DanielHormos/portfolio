import { ProfileInfo } from "./ProfileInfo";
import { ProfilePicture } from "./ProfilePicture";
import { ProfileLinks } from "./profileLinks";

export function Profile() {
  return (
    <div className="p-10">
      <ProfilePicture />
      <ProfileInfo />
      <ProfileLinks />
    </div>
  );
}
