import React from "react";
import { FiLinkedin, FiGithub, FiMail, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full z-40">
      <div
        className="
          mx-auto mb-[80px] sm:mb-0 
          max-w-screen-xl px-6 py-4 
          flex flex-col sm:flex-row items-center justify-between gap-4
          rounded-t-xl border-t border-white/20 
          bg-white/10 dark:bg-black/20 backdrop-blur-md
          shadow-sm
        "
        style={{
          boxSizing: "border-box",
        }}
      >
        <p className="text-sm text-zinc-800 dark:text-zinc-300 text-center sm:text-left">
          © {new Date().getFullYear()} Mohan Kumar. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/mohan-kumar-07650a293/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Mohan055"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 dark:text-zinc-300 hover:text-white transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="mailto:mohankumar96k@gmail.com"
            className="text-zinc-700 dark:text-zinc-300 hover:text-red-500 transition-colors"
          >
            <FiMail size={20} />
          </a>
          <Link
            to="/contact"
            className="text-zinc-700 dark:text-zinc-300 hover:text-green-500 transition-colors"
          >
            <FiPhone size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
