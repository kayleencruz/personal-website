"use client";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Redesign() {
    const [darkMode, setDarkMode] = useState(true);

    return (
    <div className= "scroll-smooth pb-36">
        {/* Navbar */}
        <div className={`${darkMode ? "bg-slate-100 text-black" : "bg-white text-black"} fixed w-full top-0 z-10`}>
        <nav className="flex justify-between items-center px-8 py-8 mx-6">
          <Link href="/" className="text-xl font-bold">Kayleen Cruz</Link>
          <div className="flex space-x-6">
            <Link href="#about" className="hover:text-gray-400">About</Link>
            <Link href="#skills" className="hover:text-gray-400">Skills</Link>
            <Link href="#projects" className="hover:text-gray-400">Projects</Link>
          </div>
        </nav>
      </div>

    {/* Title Section */}
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white text-black">
        <div className= "mt-40 min-w-screen text-center content-center">
          <h1 className="text-7xl font-serifDisplay ml-8 py-8">Responsive Redesign</h1>
          <p className= "ml-8 font-robotoSerif font-thin"> Redesigning a Middle School's web page </p>

          <div className= "flex flex-col items-center py-8 px-8 min-w-screen">
            <Image 
                src="/gms-homepage-redesign.png" 
                alt="collage" 
                width={600} 
                height={600} 
            />
            </div>
        </div> 
    </section>

    {/* Overview */}
    <section id="Overview" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto pt-24 bg-white text-black">
        <h1 className="font-robotoSerif text-3xl pb-8 text-center">Overview:</h1>
        <p className="font-robotoFlex text-lg text-gray-600 pb-18 text-left"> 
            My goal this week was to redesign my middle school's web page as I felt 
            its interface was not serving the users. I first analyzed and identified
            flaws in the existing interface then created mockups that addressed 
            usability problems. I then built a responsive web page using my prototypes. 
            Below are the stakeholders the website serves, problems with the 
            current website, and my responsive redesign. 
        </p>
    </section>

    {/* About website chosen */}
    <section id="About Website Chosen" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto pt-24 bg-white text-black">
        <h1 className="font-robotoSerif text-3xl pb-4 text-center"> About the website chosen </h1>
    </section>
    <div className="w-full flex flex-col items-center">
        <Image src="/old-gms.png" alt="original website laptop and phone view" width={1000} height={1000} />
    </div>
    <section id="About Website Chosen" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto bg-white text-gray-600 text-lg font-robotoFlex">
        <div className="flex flex-col items-start">
            <p className="pb-4"> <span className="font-serifDisplay text-xl">Original Website:</span> <Link href="https://www.gagems.net/" className="text-lg hover:underline">https://www.gagems.net/</Link> </p>
            <p className="pb-4"> <span className="font-serifDisplay text-xl">Purpose</span>: The homepage displays photos of the school,
            annoucements and highlights, upcoming events, quick links, and what appears to be resources. </p>
            <h2 className="pb-2 font-serifDisplay text-xl">The website serves:</h2>
            <ul className="list-[upper-roman] list-inside font-extralight pb-4 max-w-2xl text-justify"> 
                <li> Students </li>
                <li> Parents/Guardians</li>
                <li> Teachers </li>
                <li> Prospective students & parents </li>
            </ul>
        </div>
    </section>

    {/* Finding Problems*/}
    <section id="Finding Problems" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto bg-white text-gray-600 text-lg font-robotoFlex pt-24">
        <h1 className="font-robotoSerif text-3xl  pb-8 text-center"> Finding Problems </h1>
        <div className="flex flex-col items-start">
            <p className="font-serifDisplay text-2xl  pb-6">Usability Problems</p>
            <ul className="list-[upper-roman] list-inside font-extralight pb-4 max-w-2xl text-justify"> 
                <li className="pb-10 text-xl text-bold">
                    Poor Organization 
                    <ul className="list-disc pl-8 pt-4 space-y-2 text-lg">
                        <li>
                            No clear headings or sections
                        </li>

                        <li>
                            No clear hierachy of information
                        </li>

                        <li>
                            Impact: First-time users may feel overwhelmed and unsure 
                            of where to start. Important information may be missed.
                        </li>
                    </ul>
                </li>

                <li className="pb-10 text-xl text-bold" >
                    Weak Text Hierarchy & Readability Issues
                    <ul className="list-disc pl-8 pt-4 space-y-2 text-lg">
                        <li>
                            Section titles are too small and do not stand out.
                        </li>
                        <li>
                            Inconsistent image sizes and layout create a cluttered appearance.
                        </li>

                        <li>
                            Impact: Users may find the site hard to read and visually overwhelming.
                        </li>
                    </ul>
                </li>


                <li className="pb-10 text-xl text-bold">
                    Unclear interactive elements 
                    <ul className="list-disc pl-8 pt-4 space-y-2 text-lg">
                        <li>
                            Buttons (e.g., hhsa, ltech, vapata, magnet) look like 
                            static images with no hover effects or visual cues.
                        </li>

                        <li>
                            Impact: Users may struggle to navigate the site 
                            efficiently and may overlook important links.
                        </li>
                    </ul>
                </li>
            </ul>


            <p className="font-serifDisplay text-2xl pb-6">Accessibility Problems</p>
            <p className="text-lg pb-6">Using WebAim Wave to analyze the accessibility of 
            the website, WebAim did not detect too many major errors - just alerts. There were 3 errors: 1x empty link, 
            1x multiple form labels and 1x broken aria menu. There were also 2 constrast errors
            , numerous redundant links, alt tags,and title text. </p>
        </div>
    </section>

    {/* Visual Redesign*/}
    <section id="Visual redesign" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto bg-white text-gray-600 text-lg font-robotoFlex pt-24">
        <h1 className="font-robotoSerif text-3xl pb-8 text-center text-black">Visual Redesign</h1>
        <p className="font-robotoFlex text-lg text-gray-600 pb-8 text-left"> 
            Next, I created a visual design style guide and mockups for a laptop,
            ipad, and phone that addressed the usability and accessibility issues.
        </p>

        <h2 className="font-serifDisplay text-2xl">Visual Design Style Guide</h2>
    </section>

    <div className="w-full flex flex-col items-center pt-8">
        <Image src="/visual-style-guide.png" alt="original website laptop and phone view" width={1000} height={1000} />
    </div>

    <section id="Visual redesign" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto bg-white text-gray-600 text-lg font-robotoFlex pt-12">
        <p className="font-robotoFlex text-lg text-gray-600 pb-8 text-left"> 
            Visually, my goal was to make the website easier to read/skim through. 
            I did this by having clear typography to identify section titles and subheadings vs 
            regular text. I also made the text bigger to address readability issues. 
            I also added hover states to all the links & buttons making it clear that they
            are navigable. 
        </p>
    </section>

    {/* Mockup*/}
    <section id="Mockup" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto bg-white text-gray-600 text-lg font-robotoFlex pt-12">
        <h2 className="font-serifDisplay text-2xl pb-8">Mockups</h2>
        <p className="font-robotoFlex text-lg text-gray-600 pb-8 text-left"> 
            Using Figma, I designed an responsive interface that works for all screen sizes.
        </p>
    </section>

    <div className="w-full flex flex-col items-center pt-8">
        <p className="font-robotoFlex italic text-gray-600 pb-6"> Mockup of Macbook Air</p>
        <Image src="/mockup-with-notes.png" alt="original website laptop and phone view" width={1000} height={1000} />
    </div>

    <section id="Mockup" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto bg-white text-gray-600 text-lg font-robotoFlex pt-12">
        <p className="font-robotoFlex text-lg text-gray-600 pb-8 text-left"> 
            My goal when creating the mockups was to organize all the information in the website better. 
            This consisted of reading through the website and categorizing all the information
            to fit into a clear label so users can easily find it. Condensing the information into sections
            also helped me target the accessibility issue of having redundant links.
        </p>

        <p className="pb-4 font-serifDisplay"> Relevant Sections Identified:</p>
        <ul className="list-[upper-roman] list-inside font-robotoFlex text-lg space-y-2">
            <li> Academies</li>
            <li> Frequently Visited Resources</li>
            <li> Calendar</li>
            <li> News & Announcments</li>
            <li> Media Gallery</li>
            <li> Quick & Student Links (in footer)</li>
        </ul>

        <p className="pb-4 font-serifDisplay pt-8"> Design Decisons:</p>
        <ul className="list-[upper-roman] list-inside font-robotoFlex text-lg space-y-4">
            <li> 
                Added "Show ..." buttons to the sections with the most information 
                displaying only a limited amount of the homepage. The button will direct
                users to a corresponding page for the section. For instance, a page with just 
                just the upcoming events when clicking "Show Calendar".
            </li>
            <li> Added headings to ALL sections specifiying what information they will find there.</li>
            <li> Sections alternated in background color to further differentiate the information. </li>
            <li> Moved quick links in the footer instead of its own section.</li>
            <li> Redesigned the second Navbar with icons to improve the responsiveness. 
                Made the navigatble icons overlapping photo ALWAYS appear on page instead of 
                moving that to the menu for small displays.</li>
        </ul>
        <p className="pt-10 pb-4 font-serifDisplay"> Responsiveness:</p>
    </section>

    <div className="w-full flex flex-col items-center pt-8">
        <p className="font-robotoFlex italic text-gray-600 pb-2"> Mockup of phone & tablet</p>
        <p className="font-robotoFlex italic text-gray-600 pb-6"> (Full page not pictured)</p>
        <Image src="/output-onlinepngtools (1).png" alt="original website laptop and phone view" width={1000} height={1000} />
    </div>


    <section id="Visual redesign" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto bg-white text-gray-600 text-lg font-robotoFlex pt-12">
        <p className="font-robotoFlex text-lg text-gray-600 pb-8 text-left"> 
            Icons are in grid layout; rows of 4 for tablets and rows of 3 for smaller displays.
            Spacing between links in navbar decreases with screen size until it compresses
            into a Menu popup (pictured in the phone).
        </p>
    </section>

    <div className="w-full flex flex-col items-center pt-8">
        <Image src="/resources.png" alt="redesiged resources section" width={1000} height={1000} />
    </div>

    <section id="Visual redesign" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto bg-white text-gray-600 text-lg font-robotoFlex pt-12">
        <p className="font-robotoFlex text-lg text-gray-600 pb-8 text-left"> 
            Images in academies in grid; row of 4 for larger-to-meduim displays and 
            rows of 2 for smaller. Flyers in frequently visited resources change to 
            vertical layout (stacked) on medium-to-small displays.
        </p>
    </section>


    <div className="w-full flex flex-col items-center pt-8">
        <Image src="/calendar-screen.png" alt="redesigned calendar section on phone and tablet" width={1000} height={1000} />
    </div>

    <section id="Visual redesign" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto bg-white text-gray-600 text-lg font-robotoFlex pt-12">
        <p className="font-robotoFlex text-lg text-gray-600 pb-8 text-left"> 
            Calendar and News & Announcements section change to vertical layout (stacked). 
            Text wraps to fit smaller screens. 
        </p>
    </section>


    <div className="w-full flex flex-col items-center pt-8">
        <Image src="/news.png" alt="redesigned news section on phone and tablet" width={1000} height={1000} />
    </div>

    <section id="Visual redesign" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto bg-white text-gray-600 text-lg font-robotoFlex pt-12">
        <p className="font-robotoFlex text-lg text-gray-600 pb-8 text-left"> 
            News & Announcements mantains a horizontal side-by-side layout for each
            flyer and its title for meduim displays. For smaller displays, the text breaks into a new line
            under the corresponding flyer.
        </p>
    </section>


    <div className="w-full flex flex-col items-center pt-8">
        <Image src="/gallery-footer.png" alt="redesigned media gallery and footer on phone and tablet" width={1000} height={1000} />
    </div>

    <section id="Visual redesign" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto bg-white text-gray-600 text-lg font-robotoFlex pt-12">
        <p className="font-robotoFlex text-lg text-gray-600 pb-8 text-left"> 
            Photo slideshow scales as screen gets smaller. Spacing between columns in footer
            decreases on meduim displays and stacks on smaller/phone displays.
        </p>
    </section>

    {/* Creating the page*/}
    <section id="Creating the page" className="flex flex-col w-[80%] md:w-[60%] max-w-xl mx-auto bg-white text-gray-600 text-lg font-robotoFlex pt-12">
    <h1 className="font-robotoSerif text-3xl pb-8 text-center text-black">Creating the web page</h1>
    <p className="pb-4"> <span className="font-serifDisplay text-xl">Redesigned website:</span> <Link href="https://kayleencruz.github.io/web-redesign/" className="text-lg hover:underline">https://kayleencruz.github.io/web-redesign/</Link> </p>
        <p className="font-robotoFlex text-lg text-gray-600 pb-8 text-left"> 
            To create a responsive web page, I utilized HTML and TailwindCSS.
            As for design, I stayed accurate to the mockups and visual style guide. This design
            made the webpage easily navigatable and simplified finding information while 
            working with all screen sizes. It was coding the page that I addresssed the errors from WebAim Wave. I 
            made sure to have specific alt tags for all images, remove redudant title text, and have
            text sizes that are responsive and readable for all screen sizes.
        </p>

        <p className="font-robotoFlex text-lg text-gray-600 pb-8 text-center"> 
            Feel free to explore the website on your own! :D
        </p>
    </section>
    
</div>
    
    )
}