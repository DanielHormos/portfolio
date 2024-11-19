import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function ProfileLinks() {
  return (
    <div className="flex space-x-4 gap-3">
      <Link
        href="https://github.com/DanielHormos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} className="hover:text-gray-600" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/daniel-hormos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} className="hover:text-blue-500" />
      </Link>
    </div>
  );
}
