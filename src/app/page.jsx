import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
    return (

        <main className=" lg:mt-[40px] ">

            <div className=" relative  xl:left-1/2 xl:-translate-x-1/2 xl:w-screen xl:px-40 text-white text-center pt-0 py-4 ">
                <div className="relative bg-cover bg-center lg:bg-top bg-[url('/images/HeroImage.png')] h-[600px] lg:h-[90vh] w-full rounded-lg shadow-lg shadow-purple-900">
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-left font-bold lg:text-8xl text-5xl">Portfolio</h2>
                        <h3 className="text-left font-bold lg:text-3xl text-xl">William Bolls</h3>
                    </div>
                </div>
            </div>
            <div className="my-16" />

            {/* ----------------------------------------------------------------------------------------------------------------------------------- */}

            <div className=" space-y-4 " id="professional-work">
                <div className="mb-20 space-y-8">
                    <div className="space-y-1">
                        <h2 className="text-left font-bold text-5xl">Professional Work</h2>
                        <h3 className="text-left italic text-2xl poppins-light-italic">Web and Application Development</h3>
                    </div>

                    <p className="text-lg text-zinc-400">
                        Professionally, I have gained experience both as a freelance developer and as part of a local IT company. In my freelance work, I built websites from scratch for a diverse set of clients, managing everything from planning, development, deployment, and continued maintinence. At the IT company, I not only assisted with client websites but also maintained and developed new features for the company’s internal intranet systems, which were central to daily operations.
                    </p>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-2">
                        <div className="relative shadow rounded-lg bg-cover bg-[url('/images/MainPageCards/www_laptop.jpg')] aspect-square">
                            <Link href={"web-design"} className="group absolute inset-0 w-full h-full flex items-end lg:items-center justify-center">
                                <div className="transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out absolute bg-[url('/images/bgSVGs/filmGrain.svg')] bg-black/90 inset-5 rounded-lg hidden lg:flex items-center justify-center">
                                    <h3 className="text-6xl text-center uppercase">Freelance Web Design</h3>
                                </div>
                                <h3 className="lg:hidden w-full rounded-b-lg text-center text-2xl py-4 uppercase bg-black/90 bg-[url('/images/bgSVGs/filmGrain.svg')">Freelance Web Design</h3>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 p-2">
                        <div className="relative shadow rounded-lg bg-cover bg-[url('/images/MainPageCards/talk-nerdy-to-me.png')] aspect-square">
                            <Link href={"psit"} className="group absolute inset-0 w-full h-full flex items-end lg:items-center justify-center">
                                <div className="transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out absolute bg-[url('/images/bgSVGs/filmGrain.svg')] bg-black/90 inset-5 rounded-lg hidden lg:flex items-center justify-center">
                                    <h3 className="text-6xl text-center uppercase">Developer at Partnered Solutions IT</h3>
                                </div>
                                <h3 className="lg:hidden w-full rounded-b-lg text-center text-2xl py-4 uppercase bg-black/90 bg-[url('/images/bgSVGs/filmGrain.svg')">Developer at Partnered Solutions IT</h3>

                            </Link>
                        </div>
                    </div>
                    

                    {/* <div className="w-full lg:w-1/2 p-2">
                        <div className="relative shadow rounded-lg bg-cover bg-[url('/images/stairs.jpg')] aspect-square">
                            <Link href={"concrete"} className="group absolute inset-0 w-full h-full flex items-end lg:items-center justify-center">
                                <div className="transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out absolute bg-[url('/images/bgSVGs/filmGrain.svg')] bg-black/90 inset-5 rounded-lg hidden lg:flex items-center justify-center">
                                    <h3 className="text-6xl text-center uppercase">Concrete & Design</h3>
                                </div>
                                <h3 className="lg:hidden w-full rounded-b-lg text-center text-2xl py-4 uppercase bg-black/90 bg-[url('/images/bgSVGs/filmGrain.svg')">Concrete & Design</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-2">
                        <div className="relative shadow rounded-lg bg-cover bg-[url('/images/Terra_Pacem.jpg')] aspect-square">
                            <Link href={"terra-pacem"} className="group absolute inset-0 w-full h-full flex items-end lg:items-center justify-center">
                                <div className="transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out absolute bg-[url('/images/bgSVGs/filmGrain.svg')] bg-black/90 inset-5 rounded-lg hidden lg:flex items-center justify-center">
                                    <h3 className="text-6xl text-center uppercase">Interior Design</h3>
                                </div>
                                <h3 className="lg:hidden w-full rounded-b-lg text-center text-2xl py-4 uppercase bg-black/90 bg-[url('/images/bgSVGs/filmGrain.svg')">Interior Design</h3>
                            </Link>
                        </div>
                    </div> */}

                </div>
            </div>

            {/* <hr className="my-16 border-black" /> */}
            {/* ----------------------------------------------------------------------------------------------------------------------------------- */}

            <div className="pt-20 space-y-4" id="personal-projects">

                <div className="mb-20 space-y-8">
                    <div className="space-y-1">
                        <h2 className="text-left font-bold text-5xl">Personal Projects</h2>
                        <h3 className="text-left italic text-2xl poppins-light-italic">Video Games, Websites, Custom Tools</h3>
                    </div>

                    <p className="text-lg text-zinc-400">
                        In addition to my professional work I have also undertaken several personal projects in my free time in order to experiment, learn new skills, and take on the challenge of bringing concepts all the way from prototype to completion. These range from making and publishing games in unity to developing custom AI tools to assist in language study. Here are a few highlights.
                    </p>
                </div>


                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-2">
                        <div className="relative shadow rounded-lg bg-cover bg-[url('/images/MainPageCards/RABITCard.png')] aspect-square">
                            <Link href={"rabit"} className="group absolute inset-0 w-full h-full flex items-end lg:items-center justify-center">
                                <div className="transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out absolute bg-[url('/images/bgSVGs/filmGrain.svg')] bg-black/90 inset-5 rounded-lg hidden lg:flex items-center justify-center">
                                    <h3 className="text-6xl text-center uppercase">RABIT</h3>
                                </div>
                                <h3 className="lg:hidden w-full rounded-b-lg text-center text-2xl py-4 uppercase bg-black/90 bg-[url('/images/bgSVGs/filmGrain.svg')">RABIT</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-2">
                        <div className="relative shadow rounded-lg bg-cover bg-[url('/images/MainPageCards/Vorpal.jpg')] aspect-square">
                            <Link href={"vorpal"} className="group absolute inset-0 w-full h-full flex items-end lg:items-center justify-center">
                                <div className="transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out absolute bg-[url('/images/bgSVGs/filmGrain.svg')] bg-black/90 inset-5 rounded-lg hidden lg:flex items-center justify-center">
                                    <h3 className="text-6xl text-center uppercase">Vorpal</h3>
                                </div>
                                <h3 className="lg:hidden w-full rounded-b-lg text-center text-2xl py-4 uppercase bg-black/90 bg-[url('/images/bgSVGs/filmGrain.svg')">Vorpal</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-2">
                        <div className="relative shadow rounded-lg bg-cover bg-[url('/images/MainPageCards/redops.png')] aspect-square">
                            <Link href={"redops"} className="group absolute inset-0 w-full h-full flex items-end lg:items-center justify-center">
                                <div className="transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out absolute bg-[url('/images/bgSVGs/filmGrain.svg')] bg-black/90 inset-5 rounded-lg hidden lg:flex items-center justify-center">
                                    <h3 className="text-6xl text-center uppercase">Redops</h3>
                                </div>
                                <h3 className="lg:hidden w-full rounded-b-lg text-center text-2xl py-4 uppercase bg-black/90 bg-[url('/images/bgSVGs/filmGrain.svg')">Redops</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-2">
                        <div className="relative shadow rounded-lg bg-cover bg-[url('/images/StructuralAxon.jpg')] aspect-square">
                            <Link href={"drawings"} className="group absolute inset-0 w-full h-full flex items-end lg:items-center justify-center">
                                <div className="transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out absolute bg-[url('/images/bgSVGs/filmGrain.svg')] bg-black/90 inset-5 rounded-lg hidden lg:flex items-center justify-center">
                                    <h3 className="text-6xl text-center uppercase">Nihonki</h3>
                                </div>
                                <h3 className="lg:hidden w-full rounded-b-lg text-center text-2xl py-4 uppercase bg-black/90 bg-[url('/images/bgSVGs/filmGrain.svg')">Nihonki</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <hr className="my-16 border-black" /> */}
            {/* ----------------------------------------------------------------------------------------------------------------------------------- */}
            {/* <div className="pt-20 space-y-4" id="personal-projects">



                <div className="mb-20 space-y-8">
                    <div className="space-y-1">
                        <h2 className="text-left font-bold text-5xl">Art & Personal Projects</h2>
                        <h3 className="text-left italic text-2xl poppins-light-italic">Digital, Physical, and Interactive</h3>
                    </div>

                    <p className="text-lg text-zinc-400">
                        Outside of architecture and design, I work on a range of creative projects that blend digital art, technology, and hands-on craftsmanship. From experimental collages to interactive lighting installations, each project is a mix of design, engineering, and storytelling.
                    </p>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-2">
                        <div className="relative shadow rounded-lg bg-cover bg-[url('/images/PraxisHome.jpg')] aspect-square">
                            <Link href={"brutalism"} className="group absolute inset-0 w-full h-full flex items-end lg:items-center justify-center">
                                <div className="transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out absolute bg-[url('/images/bgSVGs/filmGrain.svg')] bg-black/90 inset-5 rounded-lg hidden lg:flex items-center justify-center">
                                    <h3 className="text-6xl text-center uppercase">Brutalism Collages</h3>
                                </div>
                                <h3 className="lg:hidden w-full rounded-b-lg text-center text-2xl py-4 uppercase bg-black/90 bg-[url('/images/bgSVGs/filmGrain.svg')">Brutalism Collages</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-2">
                        <div className="relative shadow rounded-lg bg-cover bg-[url('/images/Arcana.jpg')] aspect-square">
                            <Link href={"arcana-cards"} className="group absolute inset-0 w-full h-full flex items-end lg:items-center justify-center">
                                <div className="transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out absolute bg-[url('/images/bgSVGs/filmGrain.svg')] bg-black/90 inset-5 rounded-lg hidden lg:flex items-center justify-center">
                                    <h3 className="text-6xl text-center uppercase">Arcana Card Game</h3>
                                </div>
                                <h3 className="lg:hidden w-full rounded-b-lg text-center text-2xl py-4 uppercase bg-black/90 bg-[url('/images/bgSVGs/filmGrain.svg')">Arcana Card Game</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-2">
                        <div className="relative shadow rounded-lg bg-cover bg-[url('/images/photo.jpg')] aspect-square">
                            <Link href={"film"} className="group absolute inset-0 w-full h-full flex items-end lg:items-center justify-center">
                                <div className="transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out absolute bg-[url('/images/bgSVGs/filmGrain.svg')] bg-black/90 inset-5 rounded-lg hidden lg:flex items-center justify-center">
                                    <h3 className="text-6xl text-center uppercase">35mm Fim</h3>
                                </div>
                                <h3 className="lg:hidden w-full rounded-b-lg text-center text-2xl py-4 uppercase bg-black/90 bg-[url('/images/bgSVGs/filmGrain.svg')">35mm Fim</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-2">
                        <div className="relative shadow rounded-lg bg-cover bg-[url('/images/stage.jpg')] aspect-square">
                            <Link href={"lighting"} className="group absolute inset-0 w-full h-full flex items-end lg:items-center justify-center">
                                <div className="transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out absolute bg-[url('/images/bgSVGs/filmGrain.svg')] bg-black/90 inset-5 rounded-lg hidden lg:flex items-center justify-center">
                                    <h3 className="text-6xl text-center uppercase">DMX Lighting</h3>
                                </div>
                                <h3 className="lg:hidden w-full rounded-b-lg text-center text-2xl py-4 uppercase bg-black/90 bg-[url('/images/bgSVGs/filmGrain.svg')">DMX Lighting</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}





            <div className=" relative  xl:left-1/2 xl:-translate-x-1/2 xl:w-screen xl:px-40 text-center py-4 lg:flex my-16" id="about">

                <div className="relative bg-zinc-400 lg:h-[85vh] w-full rounded-t-xl lg:rounded-tl-none lg:rounded-r-xl shadow-lg order-1 shadow-purple-900">

                    <Image
                        src="/images/profile-image.jpeg"
                        alt="Ben Welding"
                        width={3000}
                        height={3000}
                        className="w-full h-full object-cover mx-auto order-first rounded-t-xl lg:rounded-tl-none lg:rounded-r-xl"
                    />

                </div>

                <div className="relative bg-[url('/images/bgSVGs/filmGrain.svg')]  bg-zinc-950 lg:h-[85vh] w-full rounded-b-xl lg:rounded-br-none lg:rounded-l-xl shadow-lg shadow-purple-900 lg:flex items-center justify-center">
                    <div className="p-4 lg:p-24 space-y-4">
                        <h2 className="text-left font-bold text-5xl">About <span className="text-purple-800">Me</span></h2>
                        <p className="text-left lg:text-lg">
                            Hello! I am William Bolls, a software developer from Eugene, Oregon with an interest in web and game design. I have completed a comprehensive full-stack web development bootcamp through the University of Oregon. This rigorous program ingrained in me a deep understanding of JavaScript and the MERN stack, forming the foundation of my expertise in web technologies. Beyond this foundational training, I also possess a bachelor's degree in Psychology and Japanese culture from the same institution, providing me with a unique perspective in the realm of software design and user experience.
<br />
Though the bootcamp was primarily centered around JavaScript and the MERN stack, my learning journey didn't stop there. Post-bootcamp, I've explored a myriad of technologies: from developing a mobile game application using Unity and C# to crafting websites with TypeScript and the Angular framework. This self study has not only taught me about the involved technologies, but also has improved my ability to adapt and utilize new technologies quickly.
<br />
This website has a selections of some of the projects that I have worked on or am currently working on with links to the application itself (or to videos demonstrating the application in the case of unpublished games) as well as to its github repository. If any of these projects pique your interest, or you have any questions, comments, or proposals, please don't hesitate to reach out! I can be reached by either using the form on this website, or via email at williambolls98@gmail.com.
                        </p>
                    </div>

                </div>


            </div>

            {/* <hr className="my-16 border-black" /> */}


            <div className="max-w-[700px] mx-auto" id="contact">
                <ContactForm></ContactForm>

            </div>

        </main>

    );
}
