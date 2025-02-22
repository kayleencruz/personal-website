"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: "Accessible Components",
      category: "Redesigning Gmail's Search Bar",
      image: "/personal-website/searchbars.png",
      link: "/accessible_comp",

    },
  ];

  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} fixed w-full top-0 z-10`}>
        <nav className="flex justify-between items-center px-8 py-8 mx-6">
          <h1 className="text-xl font-bold">Kayleen Cruz</h1>
          <div className="flex space-x-6">
            <Link href="#about" className="hover:text-gray-400">About</Link>
            <Link href="#skills" className="hover:text-gray-400">Skills</Link>
            <Link href="#projects" className="hover:text-gray-400">Projects</Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-center px-8 md:px-40 bg-black text-white pt-48">
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold">Hi, I am <span className="text-pink-300">Kayleen.</span></h2>
          <button className="mt-4 px-4 py-2 bg-white text-black rounded-md font-semibold">My Resume</button>
          <div className="flex space-x-4 mt-4 text-2xl">
            <FaLinkedin className="text-blue-600" />
            <FaGithub className="text-white" />
            <SiGmail className="text-red-500" />
          </div>
          <p className="mt-4 text-lg">I am a student at Brown University!</p>
        </div>
        <div className="mt-10 md:mt-0">
          <Image 
            src="/personal-website/gwc.png" 
            alt="Developer at Desk" 
            width={300} 
            height={300} 
          />
        </div>
      </section>

      {/* My Work Section */}
      <section id="projects" className="pt-64 flex flex-col items-center justify-center bg-black text-white px-6 ">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-6xl font-bold">My Work</h1>
        </div>

        {/* Cards Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} className="block min-h-96 min-w-80 rounded-lg overflow-hidden bg-gray-900 p-4 hover:scale-105 transition-transform">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
              <h2 className="mt-6 text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-400">{project.category}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}



