"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillFilePdf } from "react-icons/ai";

export function Links() {
  return (
    <div className="flex space-x-10">
      <Link
        href="https://www.linkedin.com/in/daniel-hormos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} className="hover:text-blue-500" />
      </Link>
      <Link
        href="https://github.com/DanielHormos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} className="hover:text-gray-400" />
      </Link>
      <div
        onClick={() => {
          navigator.clipboard.writeText("Daniel.Hormos@outlook.com");
          alert("Copied mail to clipboard!");
        }}
      >
        <MdEmail size={24} className="hover:text-gray-400" />
      </div>
      <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <AiFillFilePdf size={24} className="hover:text-red-500" />
      </Link>
    </div>
  );
}
