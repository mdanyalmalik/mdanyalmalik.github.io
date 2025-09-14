import { useState } from 'react'
import './App.css'
import { FaTwitter, FaGithub, FaLinkedin, FaNewspaper } from "react-icons/fa";
import { FaPenClip } from 'react-icons/fa6';

export default function App() {
  return (
    <div className="flex-1 overflow-x-hidden bg-black text-black flex flex-col">
      {/* HEADER */}
      <header className="px-6 py-8 text-left bg-black text-white flex flex-col md:flex-row justify-between gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-7xl font-extrabold tracking-tight">
            DANYAL MALIK
          </h1>
          <p className="text-lg font-semibold mt-2 text-[#c79765]">MS CS @ Oxford</p>
        </div>
        {/* SOCIAL LINKS */}
        <section className="flex items-center justify-center">
          <div className="flex justify-center space-x-15 text-5xl md:pr-10">
            <a
              href="https://blog.danyalmalik.net/"
              target="_blank"
              rel="noopener noreferrer"
              title="Check out my blog"
              className="hover:text-[#c79765] transition"
            >
              <FaPenClip />
            </a>
            <a
              href="https://twitter.com/_danyalmalik"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow me on Twitter"
              className="hover:text-[#c79765] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/mdanyalmalik"
              target="_blank"
              rel="noopener noreferrer"
              title="Github Profile"
              className="hover:text-[#c79765] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/mdanyalmalik"
              target="_blank"
              rel="noopener noreferrer"
              title="Connect with me on Linkedin"
              className="hover:text-[#c79765] transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>
      </header>

      {/* Double Checkerboard divider */}
      <div className="h-10 bg-[linear-gradient(45deg,#FFF_25%,transparent_25%,transparent_75%,#FFF_75%,#FFF),linear-gradient(45deg,#FFF_25%,transparent_25%,transparent_75%,#FFF_75%,#FFF)] bg-[length:40px_40px] bg-[position:0_0,20px_20px]"></div>

      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-5 flex-grow">

        {/* Left block with larger photo */}
        <div className="bg-[#c79765] flex justify-center items-end px-0 py-0 md:col-span-2">
          <div className="w-2/3 h-full">
            <img
              src="/graduation.png"
              alt="Profile"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right block with description */}
        <div className="bg-white flex justify-center items-center px-10 py-16 md:col-span-3">
          <p className="text-xl leading-relaxed max-w-lg text-black font-medium">
            Hi, my name's Danyal. I graduated with a bachelor's degree in
            computer science from LUMS (Lahore University of Management Sciences)
            and a minor in math. I am now doing a master's degree in computer
            science from the University of Oxford. I am interested in
            Reinforcement Learning, Multi-Agent Game Theory, Audio (TTS, Spoof
            Detection) and AI in general.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6 text-sm">
        <a
          href="mailto:danyal.malik@st-annes.ox.ac.uk"
          className="hover:text-[#c79765] transition"
        >
          danyal.malik@st-annes.ox.ac.uk
        </a>
      </footer>
    </div>
  );
}

