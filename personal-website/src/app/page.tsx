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
      desc: "Redesigning Gmail's Search Bar",
      image: "/searchbars.png",
      link: "/accessible_comp",
      tag: "Figma",

    },

    {
      title: "Personas and Storybuilding",
      desc: "Redesigning a Printer Interface",
      image: "/printer-pic.jpg",
      link: "/storytelling",
      tag: "Figma",
    },

    {
      title: "Responsive Redesign",
      desc: "Redesigning a Middle School's website",
      image: "/gms-homepage-redesign.png",
      link: "/gms_redesign",
      tag: "Figma",
    },
  ];

  return (
    <div className="bg-rose-50 scroll-smooth text-black">
      {/* Navbar */}
      <div className=" bg-rose-50 fixed w-full top-0 z-10">
        <nav className="flex justify-between items-center px-8 py-8 mx-6">
          <h1 className="text-xl ">Kayleen Cruz</h1>
          <div className="flex space-x-6">
            <Link href="#about" className="hover:text-gray-400">About</Link>
            <Link href="#skills" className="hover:text-gray-400">Skills</Link>
            <Link href="#projects" className="hover:text-gray-400">Projects</Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center content-center justify-center px-8 pt-64">
        <div className="pr-24">

          <div className="space-y-6 ">
            <h2 className=" text-6xl md:max-2xl:text-8xl font-semibold">Hi, I am <span className="text-pink-600">Kayleen.</span></h2>
            <p className="max-w-2xl text-xl"> I am a 3rd year student studying Computer Science at Brown University. 
              I am a aspiring Software Engineer interested in system design and 
              full-stack development. </p>
          </div>

          <div className="flex flex-col mt-8 items-start">
            <div className="flex flex-col items-center">
            <button className="px-6 py-3 bg-white rounded-3xl drop-shadow-lg hover:bg-pink-300">
              My Resume
            </button>
            <div className="flex space-x-4 mt-8 text-3xl">
              <FaLinkedin className="text-blue-600" />
              <FaGithub className="text-black" />
              <SiGmail className="text-red-500" />
            </div>
          </div>
          </div>
        </div>

        <div>
          <Image 
            src="/new-homepage-image.png" 
            alt="Developer at Desk" 
            width={350} 
            height={350} 
          />
        </div>
      </section>

      <section id="tech stack" className="pt-48 items-center justify-center">

        <div className="text-center">
          <h1 className="text-6xl font-bold">Tech Stack</h1>
        </div>

        <div className="pl-24">
          <h1> Technical Languages</h1>
        </div>

        <div className="grid grid-cols-4">

        </div>
      </section>

      {/* My Work Section */}
      <section id="projects" className="pt-48 flex flex-col items-center justify-center px-6 ">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-6xl font-bold">Selected Work</h1>
        </div>


        {/* Cards Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-7xl w-full mx-auto px-8">

        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            className="flex flex-col rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 bg-white min-w-[300px] sm:min-w-[390px]"
          >
            {/* Top Section: Background color block */}
            <div className="bg-red-300 aspect-[4/3] flex items-center justify-center">
              {/* If you want an image inside, you can put <img> here */}
            </div>

            {/* Bottom Section: Content */}
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-black">{project.title}</h2>
              <p className="text-gray-600 text-sm">{project.desc}</p>

              {/* Tag */}
              <span className="mt-2 inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full w-max">
                {project.tag}
              </span>
            </div>
          </Link>
        ))}
      </div>
      </section>
    </div>
  );
}



