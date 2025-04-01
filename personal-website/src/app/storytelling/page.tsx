"use client";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Storytelling() {
    const [darkMode, setDarkMode] = useState(true);

    return (
    <div className= "scroll-smooth">
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

      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white text-black">
        {/* Title Section */}
        <div className= "mt-40 min-w-screen text-center content-center">
          <h1 className="text-6xl font-bold ml-8 py-8">Personas and Storyboarding</h1>
          <p className= "ml-8 font-extralight"> Illustrating user needs and experiences </p>

          {/* Main Image */}
          <div className= "py-8 pl-32 min-w-screen">
            <Image 
                src="/printer-pic.jpg" 
                alt="collage" 
                width={600} 
                height={600} 
            />
            </div>
        </div> 
      </section>


      <section id="Interacting with Existing Search Bars" className="flex flex-col items-center pt-24 bg-white text-black">
        <h1 className="font-bold text-3xl pb-8"> Overview: </h1>
        <p className="font-extralight pb-24 max-w-2xl text-justify"> 
            My goal this week was to understand the user journey and illustrate their needs.
            I did this by making real-life observations and then conduct interviews to 
            understand how a user interacts with a product. My interface of choice
            were the printers at Brown. I oberserved how people interacted with them at the 
            library and conducted 3 interviews. 
        </p>

        <h1 className="font-bold text-3xl pb-8"> How do Printers at Brown look like? </h1>
        <p className="font-extralight pb-4 max-w-2xl text-justify"> 
            Brown University printers all have a touch screen display in front of
            of the printers which support both printing and scanning. Interacting with
            this display is necessary to complete any task on the printer. Below are rough 
            illustrations of the interface and buttons it has.
        </p>

        <div className= "p-8 flex flex-row space-x-8">
            {/* mouse state diagram of redesigned search bar */}
            <Image 
                src="/printer-login.png" 
                alt="gmail search bar" 
                width={600} 
                height={600} 
            />
            {/* keyboard state diagram of current search bar */}
            <Image 
                src="/printer-home.png" 
                alt="gmail search bar" 
                width={600} 
                height={600} 
            />
        </div>


 
      </section>

     {/* Interview Questions + summary*/}
      <section id="Interview questions and results" className="flex flex-col items-center pt-18 bg-white text-justify text-black">

        <p className="font-bold text-3xl pt-20"> User Research </p>
    

        <p className="font-semibold text-xl pt-8"> Interview Questions </p>

        <ul className="pt-8 list-decimal max-w-2xl"> 
            <li> 
                Have you used this type of printer before? If so, how frequently?
            </li>

            <li>
                What task were you trying to complete when you approached the printer 
                (print, scan, etc)? Were you able to accomplish the task/goal?
            </li>

            <li>
                Did you encounter any issues while using the printer? If so, 
                how did you troubleshoot? Were there any features or instructions that 
                guided you towards the solution?
            </li>
            <li> 
                How did you feel about the layout of the screen and buttons? Were 
                they easy to find and understand?
            </li>

            <li> 
                Did you find the options and settings intuitive or did you have 
                difficulty navigating finding the functionality/feature you wanted?
            </li>

            <li>
                Is there anything you wish was different about the printer's interface or a feature you wish it had?
            </li>
        </ul>

        <p className="font-semibold text-xl pt-16 pb-8"> Interview Results </p>
        
        <p className="text-left pb-8 max-w-2xl"> 
            I interviewed 3 users after closely observing them interact with 
            the printer interface. The users were all students. Below are notes of 
            my observations as well as a summary of the user responses.
        </p>


        <div className="font-bold text-left pb-8 ">Users Interviewed:</div>



        <ul className=" pl-3 list-[upper-roman] max-w-xl text-left space-y-4">
            <li>
                User A: 
                <ul className="list-disc pl-8 pt-4">
                    <li>
                        First time using this printer interface and also first time
                        trying to make a copy/scan a document. Was able to accomplish goal.
                    </li>
                </ul>
            </li>

            <li>
                User B: 
                <ul className="list-disc pl-8 pt-4">
                    <li>
                        Needed to print a document. Has used the printers at Brown
                        before; semi-familar with the interface. Was able to accomplish goal.
                    </li>
                </ul>
            </li>


            <li>
                User C: 
                <ul className="list-disc pl-8 pt-4">
                    <li>
                        Needed to print documents. Has used printer before but
                        not at Brown. Was able to accommplish goal.
                    </li>
                </ul>
            </li>
        </ul>
        
        <div className="font-bold text-left pb-8 pt-8">Responses</div>
        <ul className="list-[upper-roman] max-w-2xl space-y-8">
            <li>
                User A and B did not intitially know where to swipe their 
                card as directed.
                <ul className="list-disc pl-8 pt-4">
                    <li>
                        Although the directions said to "swipe", 
                        User A and B interpreted the symbol of the hand on display to mean 
                        tap your card. 
                    </li>
                    <li>
                        User B had difficulty finding where to swipe since the place 
                        to swipe was on the printer itself and not on the display
                        where their attention was. 
                    </li>
                </ul>
            </li>

            <li>
                User A was searching how to make a copy but did not see it as an option.
                <ul className="list-disc pl-8 pt-4">
                    <li>
                        User A ended up clicking scan assuming there would be an option
                        to print scan. User A did not see that as an option 
                        but went forward with the process. User A ended up scanning the document, emailing it, 
                        then printing the pdf from the email. 
                    </li>
                </ul>
            </li>

            <li>
                User A did not know where to put her document in the printer. 
                <ul className="list-disc pl-8 pt-4">
                    <li>
                        User A placed her document on the wrong side to scan
                        and ended up with a blank paper emailed to them. Wished there
                        were directions displayed on what side to place 
                    </li>
                </ul>
            </li>

            <li>
                User C expressed confusion about where the home button navigated to.
                <ul className="list-disc pl-8 pt-4">
                    <li>
                        User C thought home would return her back to the screen where
                        you can choose between print, device functions, and scan
                        but instead it logged them out and the user saw an unfamilar page with
                        what appeared to be settings. User C just logged back in 
                        and started the process all over again. 
                    </li>
                </ul>
            </li>

            <li>
                User C expressed confusion about where the home button navigated to.
                <ul className="list-disc pl-8 pt-4">
                    <li>
                        User C thought home would return her back to the screen where
                        you can choose between print, device functions, and scan
                        but instead it logged them out and the user saw an unfamilar page with
                        what appeared to be settings. User C just logged back in 
                        and started the process all over again. 
                    </li>
                </ul>
            </li>


            <li>
                All users appreciated the size and visibility of all the buttons
                and overall expressed that they felt it was intuitive.
                <ul className="list-disc pl-8 pt-4 space-y-4">
                    <li>
                        User C expressed it was the easiest printer she has used!
                    </li>
                    <li>
                        All users appreciated the back button always available. 
                    </li>

                    <li>
                        User B liked how as soon as they swiped their card, they were 
                        very quickly and easily able to view + access their pending 
                        print jobs.
                    </li>
                </ul>
            </li>
        </ul>
        </section>

        {/* Interview Questions + summary*/}
        <section id="Interview questions and results" className="flex flex-col items-center pt-24 bg-white text-justify text-black">

        <p className="font-bold text-3xl pt-20 pb-16 "> Personas </p>

        <p className="font-extralight pb-12 max-w-2xl text-justify"> 
            Using my observations and the responses from the interviews, I created 
            two personas by creating an empathy map. For each archtypcal character, 
            I described what they might think, feel, say, and do. 
        </p>

        <div className="flex flex-col space-y-4 max-w-2xl">
            <p className="font-bold">Meet Persona 1: Rebecca</p>
            <p>
                Rebecca is a first-year student who is trying to print her practice exam.
                She managed to queue her PDF to print and is now going to use the printer
                at the Rock for the first time. She has in the past struggled to use other
                printers.
            </p>
            <Image src="/Rebecca.png" alt="rebecca empathy map" width={600} height={600} />

            <p> Most of the users I observed were there to print something that they had already
                put on queue on their Myprint account. Some users were in/out quickly while others
                did take longer and seeminly read the screen for a long time before 
                the printer started printing. Rebecca represents one of the many people 
                who are nervous to print because they are worried they don't know how. 
            </p>
        </div>

        {/* Persona 2 */}
        <div className="flex flex-col space-y-4 max-w-2xl pt-12">
            <p className="font-bold">Meet Persona 2: Raven</p>
            <p>
                Raven is a 3rd-year at Brown and wants to make a physical copy of her
                notes to give to her friend. Her notes are very colorful, so it is
                important to her that the printed version reflects that. She has class in
                10 minutes but is confident she will be out quickly because she frequently
                makes copies at home, and it is super quick. It is her first time trying
                to make a copy with a Brown printer, however.
            </p>
            <Image src="/raven.png" alt="raven empathy map" width={600} height={600} />

            <p> Raven represents a user who does know how to use a printer well and 
                is confident in their abilities. Even if one knows how to navigate
                a printer however, navigating a printer =/ navigating Brown's printer 
                interface and thus, unfamilarities may still arise.
            </p>
        </div>
        </section>

        {/* Interview Questions + summary*/}
        <section id="Interview questions and results" className="flex flex-col items-center pt-24 bg-white text-justify text-black">

        <p className="font-bold text-3xl pt-20 pb-16 "> Storyboard </p>

        <p className="font-extralight pb-12 max-w-2xl text-justify"> 
            To further illustrate the needs of the users, I created a storyboard 
            for one of the personas I created: Raven. The storyboard is meant to 
            show Raven's user story from start to end emphasizing her goal.
        </p>

        <Image src="/raven-storyboard.png" alt="raven storyboard" width={800} height={800} />

        </section>

</div>
    
    )
}