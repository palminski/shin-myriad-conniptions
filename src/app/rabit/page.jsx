import Image from "next/image";
export default function Thesis() {

    let images = [
        "/images/RABIT/CRYSTAL.png",
        // "/images/RABIT/Hero.png",
        "/images/RABIT/Jungle.png",
        "/images/RABIT/RabitBloodyRoom.png",
        "/images/RABIT/Screenshot.png",
        "/images/RABIT/Screenshot2.png",
        "/images/RABIT/Screenshot3.png",
    ]

    return (
        <main className=" lg:mt-[50px] pt-8">

            <div className="mt-10 mb-20 space-y-8">
                <div className="space-y-4 lg:space-y-1 lg:flex justify-between items-center">
                    <div className="space-y-1">
                        <h1 className="text-left font-bold text-4xl lg:text-5xl">RABIT</h1>
                        <h3 className="text-left italic lg:text-2xl poppins-light-italic">Retro 2D Platformer</h3>
                    </div>
                    <div className="h-12 flex space-x-4">

                        <svg viewBox="0 0 128 128" className="text-white fill-current">
                            <path d="M59.049 0 7.339 29.855V89.56l19.825-11.45V54.714c.009-.402.225-.771.573-.967a1.13 1.13 0 0 1 1.129-.008l24.087 13.9a2.275 2.275 0 0 1 1.133 1.97v27.8a1.156 1.156 0 0 1-.565.98 1.131 1.131 0 0 1-1.124.012l-20.27-11.718-19.832 11.46L63.991 128l51.702-29.856-19.817-11.46-20.261 11.703a1.151 1.151 0 0 1-1.124-.008 1.145 1.145 0 0 1-.568-.976V69.608c0-.82.424-1.56 1.133-1.968L99.13 53.737a1.119 1.119 0 0 1 1.124.008c.352.196.572.565.575.967v23.396l19.83 11.454V29.855h-.009L68.96 0v22.9l20.26 11.696c.347.204.555.577.555.984 0 .403-.212.773-.555.976L65.137 50.468a2.302 2.302 0 0 1-2.27 0L38.791 36.556a1.122 1.122 0 0 1-.56-.976 1.127 1.127 0 0 1 .56-.984L59.048 22.9zm0 0"></path>
                        </svg>


                        <svg viewBox="0 0 128 128" className="text-white fill-current">
                            <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zM115 62h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6H94v-5h3.5l.9-4H94v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zm-12.7 4h3.8l.9-4h-3.8z" fill="#00000"></path>
                        </svg>

                        

                    </div>

                </div>

                <p className="text-lg text-zinc-400">
                    RABIT is an arcade style platforming game with retro graphics and a mysterious atmosphere. Its central mechanic is the ability to toggle certain objects on and off at the click of a button. This along with several other movement abilities allows for some devious and exciting platforming sections
                </p>

                <a href="https://store.steampowered.com/app/3536600/RABIT/" target="_blank" type="submit" className="border bg-theme-blue inline-block transform transition-transform duration-200 hover:scale-105 rounded-lg  w-auto lg:text-xl px-4 py-2">View on Steam</a>



            </div>

            <div className="flex flex-wrap">
                {images.map((image, i) => (
                    <div className="py-2 lg:px-2 w-full lg:w-1/2" key={i}>
                        <Image
                            src={image}
                            alt=""
                            width={3000}
                            height={3000}
                            className="w-full  rounded-lg break-inside-avoid shadow"
                        />
                    </div>
                ))}
            </div>



        </main>
    );
}