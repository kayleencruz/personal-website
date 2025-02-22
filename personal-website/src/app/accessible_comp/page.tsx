"use client";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AccessibleComponents() {
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
          <h1 className="text-6xl font-bold ml-8 py-8">Accessible Components</h1>
          <p className= "ml-8 font-extralight"> Analyzing the accessibility of search bars</p>
          <p className= "ml-8 font-extralight"> A redesign of Gmail's search</p>

          {/* Main Image */}
          <div className= "py-8">
            <Image 
                src="/personal-website/searchbars.png" 
                alt="collage" 
                width={800} 
                height={800} 
            />
            </div>
        </div> 
      </section>


      <section id="Interacting with Existing Search Bars" className="flex flex-col items-center pt-24 bg-white text-black">
        <h1 className="font-bold text-3xl pb-8"> Inputs: </h1>
        <p className="font-extralight pb-12 max-w-2xl"> 
            First, I sought out to interact with the different components on each 
            application using different inputs: keyboard, mouse, and touch. 
            I tracked how the user experience of each input noting its functionalities. 
            Below is a overview of the different interactions.
        </p>


        <div className="relative flex flex-col h-full overflow-scroll shadow-md rounded-lg bg-clip-border w-[800px] mx-auto">
            <table className="text-center text-black table-fixed border border-gray-500 border-collapse w-full bg-gray-100 " role="table">
                <thead>
                    <tr role="row">
                    <th className="border border-gray-400 bg-pink-200 text-black p-2" role="columnheader"></th>
                    <th className="border border-gray-400 bg-pink-200 text-black p-2" role="columnheader">Spotify</th>
                    <th className="border border-gray-400 bg-pink-200 text-black p-2" role="columnheader">Pinterest</th>
                    <th className="border border-gray-400 bg-pink-200 text-black p-2" role="columnheader">Gmail</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="hover:bg-pink-50 focus-within:bg-gray-100" role="row">
                        <td className="border border-gray-400 bg-pink-200 text-black font-semibold p-2" role="rowheader">Mouse/Touchpad</td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            Search bar clickable with hover state <br /> <br />

                            Click elsewhere to exit search <br /> <br />

                            Right click: copy/paste popup <br /> <br />

                            <div>Alt tag for search icon </div>

                            No state change for trying to submit empty text box <br /> <br />

                            No need to submit search -- filters results as you type

                        </td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            Search bar clickable with hover state <br /> <br />

                            Click elsewhere to exit search <br /> <br />

                            Click one of suggested smart options to submit search <br /> <br />

                            Right click: copy/paste popup <br /> <br />

                            No state change for trying to submit empty text box <br /> <br />

                        </td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            Search bar clickable with NO hover state <br /> <br />

                            Click elsewhere to exit search <br /> <br />

                            Click icon to submit search query <br /> <br />

                            Right click: copy/paste popup <br /> <br />

                            Alt tag for search icon <br /> <br />

                            No state change for trying to submit empty text box <br /> <br />

                        </td>
                    </tr>

                    <tr className="hover:bg-pink-50 focus-within:bg-gray-100" role="row">
                        <td className="border border-gray-400 bg-pink-200 text-black font-semibold p-2" role="rowheader">Keyboard</td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            Command + K: Search bar popup with background blurred <br /> <br />

                            Enter:  submit search query <br /> <br />

                            Esc:  exit search + clear any text on search bar
                        </td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            Tab once: Search Pops up <br /> <br />

                            Enter: submit search query <br /> <br />

                            Esc:  exit search + clear any text on search bar

                        </td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            Tab until we get to search bar <br /> <br />

                            /: enter search bar (had to activate shortcuts in settings) <br /> <br />

                            Enter: submit search query <br /> <br />

                            Esc: exit search <br /> <br />

                            When typing -- Tab to autofill
                        </td>
                    </tr>

                    <tr className="hover:bg-pink-50 focus-within:bg-gray-100" role="row">
                        <td className="border border-gray-400 bg-pink-200 font-semibold text-black p-2" role="rowheader">Touch</td>
                        <td className="border border-gray-400 p-2 whitespace-pre-line" tabIndex={0}>
                            Search bar at the top of the screen <br /> <br />

                            Clicking search bar navigates to different screen <br /> <br />

                            Back arrow to exit search <br /> <br />

                            Submit through keyboard <br />

                        </td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            Search bar identifiable only through icon <br /> <br />

                            Icon navigates to different page with search bar <br /> <br />

                            Cancel button  to exit search <br /> <br />

                            Submit through keyboard
                        </td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            Search in tab identified with icon + text “Search” <br /> <br />

                            Navigates to different page where search is at the top <br /> <br />

                            Cancel button to exit search <br /> <br />

                            Submit through keyboard 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p className="font-semibold text-xl pt-20"> Summary of Observations </p>

        <ul className="pt-8 list-disc max-w-2xl"> 
            <li> 
                General appearance of the search bars between applications is very similar. 
                Rounded box with search icon (magnifying glass). 
            </li>
            <li>
                Placeholder text telling users how to use the text box ("Search mail")
            </li>
            <li>Spotify and Pinterest have hover states, Gmail does not</li>
            <li> 
                Gmail keyboard shorcuts not memorable and Pinterst is just Tab.
                Spotify was the most keyboard accessible with a search bar popping up
                when the specified keys were pressed. 
            </li>

            <li> 
                Enter all used to submit query -- very intuitive. 
            </li>
        </ul>
      </section>

      {/* Table for output */}
      <section id="Interacting with Existing Search Bars" className="flex flex-col items-center pt-24 bg-white text-black">
        <h1 className="font-bold text-3xl pb-8"> Output: </h1>
        <p className="font-extralight pb-12 max-w-2xl"> 
            Next, I observed the visual cues that show users when the search bar 
            changes states. I focused on the color of the search bar, border thickness, 
            and the contents inside the search bar/text box. I also utilized a screen reader
            on all applications to see how each application interacted with it. Below is a overview of my observations.
        </p>

        <div className="relative flex flex-col h-full overflow-scroll shadow-md rounded-lg bg-clip-border w-[800px] mx-auto">

            <table className="text-center text-black table-fixed border border-gray-500 border-collapse w-full bg-gray-100 " role="table">
                <thead>
                    <tr role="row">
                    <th className="border border-gray-400 bg-pink-200 text-black p-2" role="columnheader"></th>
                    <th className="border border-gray-400 bg-pink-200 text-black p-2" role="columnheader">Spotify</th>
                    <th className="border border-gray-400 bg-pink-200 text-black p-2" role="columnheader">Pinterest</th>
                    <th className="border border-gray-400 bg-pink-200 text-black p-2" role="columnheader">Gmail</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="hover:bg-pink-50 focus-within:bg-gray-100" role="row">
                        <td className="border border-gray-400 bg-pink-200 text-black font-semibold p-2" role="rowheader">Color</td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            On Hover: Different color -- Lighter shade of grey
                        </td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            On Hover + On Click: Different color -- Darker color search bar 
                        </td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            On Click: Different color -- Search bar becomes white
                        </td>
                    </tr>

                    <tr className="hover:bg-pink-50 focus-within:bg-gray-100" role="row">
                        <td className="border border-gray-400 bg-pink-200 text-black font-semibold p-2" role="rowheader">Border Thickness</td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            On Hover: Slight light grey outline <br /> <br />

                            On click: 
                            Bold white outline around text box and bolded search icon <br /> <br />

                            On Submit/Enter:
                            outline disappears
                        </td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            On Click: Bright blue + bold outline around text box

                        </td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            On Click: Shadow outline
                        </td>
                    </tr>

                    <tr className="hover:bg-pink-50 focus-within:bg-gray-100" role="row">
                        <td className="border border-gray-400 bg-pink-200 font-semibold text-black p-2" role="rowheader">Text in Box</td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            On click: X button to exit <br /> <br />
                            On Hover: Keyboard shorcut
                        </td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            On click: X button to exit <br /> <br />
                            No more search icon <br /> <br />
                            submit button
                        </td>
                        <td className="border border-gray-400 p-2" tabIndex={0}>
                            Typing: "tab" to autofill
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p className="font-semibold text-xl pt-20"> Summary of Observations </p>

        <ul className="pt-8 list-disc max-w-2xl"> 
            <li> 
                Apperances changed for Spotify and Pinterest on both hover and on click.
            </li>
            <li>
                Gmail's appearance only changed for on click.
            </li>
            <li> Spotified gave keyboard shortcut to activate search on hover. </li>
            <li> 
                Gmail gave keyboard shortcut to autofill but activate search.
            </li>

            <li> 
                Gmail and Spotify very screen reader accessible. Tells users they are in 
                search and prompts users type if they want to enter text in this field. In contrast, Pinterest 
                just read out the placeholder text "search" with no futher instructions.
            </li>
        </ul>
      </section>

      <section id="overview" className="min-h-screen flex flex-col items-center pt-24 bg-white text-black">
        <h1 className="font-bold text-3xl pb-12"> State Model and Redesign </h1>

        <p className="max-w-2xl"> 
            Given the lack of a hover state and observed difficulty navigating to search
            for keyboard users, I decided to focus on redesiging the search bar on Gmail. 
            Before getting to my redesign I looked closer at the input/output/state interactions 
            on Gmail and then reflected on how I can improve its accessibility. Below is the current
            Gmail design broken down through its visual states and state models, a problem-solution 
            flowchart, and finally the redesign given the solutions above.
        </p>
        

        <p className="font-semibold text-2xl pt-20"> Visual of Current Gmail Search Bar </p>
        <p className="font-extralight pb-2"> Mouse and Keyboard Interactions </p>

        {/* image of current search bar */}
        <div className= "py-8">
            <Image 
                src="/personal-website/og-search.png" 
                alt="gmail search bar" 
                width={800} 
                height={800} 
            />
        </div>

        <p className="font-semibold text-2xl pt-12"> State Models of Current Gmail Search Bar</p>
        <p className="font-extralight pb-2"> Mouse and Keyboard Interactions </p>

        <div className= "p-8 flex flex-row space-x-8">
            {/* mouse state diagram of current search bar */}
            <Image 
                src="/personal-website/og-mouse-user.png" 
                alt="gmail search bar" 
                width={600} 
                height={600} 
            />
            {/* keyboard state diagram of current search bar */}
            <Image 
                src="/personal-website/og-keyboard.png" 
                alt="gmail search bar" 
                width={600} 
                height={600} 
            />
        </div>    
  

        <h2 className="font-bold text-2xl pb-12 pt-12"> Redesigned Gmail Search Bar: </h2>
        <div className="text-left max-w-2xl space-y-10">

    {/* Problem #1 */}
    <div className="flex items-center space-x-4">
        {/* Problem Box */}
        <div className="border-4 border-pink-400 bg-pink-50 text-black rounded-lg p-4 w-1/2 min-h-48">
            <p className="font-semibold text-lg text-pink-950">Problem #1</p>
            <p className="font-extralight pb-2">No hover state</p>
            <ul className="list-disc ml-4 text-sm">
                <li>No hover state to indicate users should click the text box to search their mail.</li>
            </ul>
        </div>

        {/* Arrow */}
        <div className="text-3xl text-gray-500">➡️</div>

        {/* Solution Box */}
        <div className="border-4 border-pink-400 bg-pink-50 text-black rounded-lg p-4 w-1/2 min-h-48">
            <p className="font-semibold text-lg text-pink-950">Solution #1</p>
            <p className="font-extralight pb-2">On Hover: Change Appearance</p>
            <ul className="list-disc ml-4 text-sm">
                <li>
                    On hover, the search bar mimics the on-click state — turns white, adds a drop shadow, 
                    and darkens the search icon.
                </li>
            </ul>
        </div>
    </div>

    {/* Problem #2 */}
    <div className="flex items-center space-x-4">
        <div className="border-4 border-pink-400 bg-pink-50 text-black rounded-lg p-4 w-1/2 min-h-48">
            <p className="font-semibold text-lg text-pink-950">Problem #2</p>
            <p className="font-extralight pb-2">Hard-to-Learn Keyboard Shortcut</p>
            <ul className="list-disc ml-4 text-sm">
                <li>
                    Gmail hides keyboard shortcuts, making them hard to discover and unintuitive 
                    without reading guides.
                </li>
            </ul>
        </div>

        <div className="text-3xl text-gray-500">➡️</div>

        <div className="border-4 border-pink-400 bg-pink-50 text-black rounded-lg p-4 w-1/2 min-h-48">
            <p className="font-semibold text-lg text-pink-950">Solution #2</p>
            <p className="font-extralight pb-2">On Hover: Show Shortcut Key</p>
            <ul className="list-disc ml-4 text-sm">
                <li>
                    Display the "/" key on hover to teach users about the shortcut and improve memorability.
                </li>
            </ul>
        </div>
    </div>

    {/* Problem #3 */}
    <div className="flex items-center space-x-4">
        <div className="border-4 border-pink-400 bg-pink-50 text-black rounded-lg p-4 w-1/2 min-h-48">
            <p className="font-semibold text-lg text-pink-950">Problem #3</p>
            <p className="font-extralight pb-2">No Difference Between Hover & Active States</p>
            <ul className="list-disc ml-4 text-sm">
                <li>
                    Without differentiation, users might not realize they are actively typing in the text box.
                </li>
            </ul>
        </div>

        <div className="text-3xl text-gray-500">➡️</div>

        <div className="border-4 border-pink-400 bg-pink-50 text-black rounded-lg p-4 w-1/2 min-h-48">
            <p className="font-semibold text-lg text-pink-950">Solution #3</p>
            <p className="font-extralight pb-2">On Click: Blue Outline</p>
            <ul className="list-disc ml-4 text-sm">
                <li>
                    Add a bold blue outline to the text box to indicate focus, matching Gmail's color scheme.
                </li>
            </ul>
        </div>
    </div>

    {/* Tradeoffs */}
    <div className="border-2 border-yellow-400 bg-yellow-50 text-black rounded-lg p-4">
        <p className="font-semibold text-lg text-yellow-900">Tradeoffs</p>
        <ul className="list-disc ml-4 text-sm">
            <li>
                Hover states are not recognized by screen readers, limiting accessibility improvements.
            </li>
            <li>
                Keyboard users relying on the "tab" key may find the hover-triggered spacebar unintuitive.
            </li>
        </ul>
    </div>

</div>


        <p className="font-semibold text-2xl pt-20"> Visual of Redesign </p>
        <p className="font-extralight pb-2"> Mouse and Keyboard Interactions </p>
        {/* image of the state models for keyboard and mouse users */}
        <div className= "py-12">
            <Image 
                src="/personal-website/hover-search.png" 
                alt="gmail search bar redesign" 
                width={800} 
                height={800} 
            />
        </div>     

        <p className="font-semibold text-2xl pt-12"> State Models of Redesign</p>
        <p className="font-extralight pb-2"> Mouse and Keyboard Interactions </p>

        <div className= "p-8 flex flex-row space-x-8">
            {/* mouse state diagram of redesigned search bar */}
            <Image 
                src="/personal-website/redesigned-mouse.png" 
                alt="gmail search bar" 
                width={600} 
                height={600} 
            />
            {/* keyboard state diagram of current search bar */}
            <Image 
                src="/personal-website/redesigned-keyboard.png" 
                alt="gmail search bar" 
                width={600} 
                height={600} 
            />
        </div>

        <h1 className="font-bold text-3xl pt-20 pb-12"> Reflection </h1>

        <p className="max-w-2xl pb-24"> 
            Often components are designed with mouse/touchpad 
            users in mind, excluding that some people can only navigate through the keyboard.
            Before reading Google's "Keyboard shorcuts" guide, I thought I was 
            only able to naviagte to the search bar by clicking tab until I got 
            to the component. With Gmail having many features, this was very tedious 
            especially after doing it numerous times. My redesign kept this in mind
            by adding an on hover state that gives the users the command.
        </p>          

      </section>
    </div>
    )
}