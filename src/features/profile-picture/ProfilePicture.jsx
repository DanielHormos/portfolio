import Image from "next/image";

export function ProfilePicture() {
  return (
    <Image
      className="rounded-full"
      width={250}
      height={0}
      src={"/120799414.jfif"}
      alt="Profile Picture"
    />
  );
}
