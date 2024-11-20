import Image from "next/image";

export function ProfilePicture() {
  return (
    <Image
      className="rounded-full mx-auto"
      width={190}
      height={190}
      src={"/120799414.jfif"}
      alt="Profile Picture"
    />
  );
}
