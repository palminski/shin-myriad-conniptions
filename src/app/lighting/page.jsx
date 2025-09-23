import Image from "next/image";
export default function TerraPacem() {

    let images = [
        "/images/Lighting/IMG_2270.jpg",
        "/images/Lighting/IMG_2272.jpg",
        "/images/Lighting/IMG_2594.jpg",
        "/images/Lighting/IMG_2598.jpg",
        // "/images/Lighting/0245dae3-6bd5-4813-b810-49b6d5d3b676.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    ]

    return (
        <main className=" lg:mt-[50px] pt-8">

            <div className="mt-10 mb-20 space-y-8">
                <div className="space-y-1">
                    <h1 className="text-left font-bold text-5xl">DMX Lighting & Visuals</h1>
                    <h3 className="text-left italic text-2xl poppins-light-italic">Custom Stage Design</h3>
                </div>

                <p className="text-lg text-custom-green-paragraph">
                    I build custom DMX lighting rigs for professional DJ gigs, including 8-foot-tall light tubes wired entirely from scratch. I soldered, 3D-printed, and assembled them using parts sourced from Home Depot. Alongside the physical build, I handle all visuals and lighting programming, using VDMX for live visuals and QLC+ for DMX control, creating immersive, synchronized experiences.
                </p>
            </div>

            <div className="lg:px-4 mb-4 lg:mb-0">
                <Image
                    src="/images/Lighting/ezgif-40553586e3f0c5.gif"
                    alt=" "
                    width={3000}
                    height={3000}
                    className="w-full  object-cover mx-auto order-first rounded-lg shadow"
                />
            </div>


            <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-2 gap-4 lg:p-4">
                {images.map((image, i) => (
                    <div key={i}>
                        <Image
                            src={image}
                            alt=" "
                            width={3000}
                            height={3000}
                            className="w-full rounded-lg break-inside-avoid mb-4 shadow"
                        />
                    </div>
                ))}
            </div>

            <div className="lg:px-4 mt-4 lg:mt-0">
                <Image
                    src="/images/Lighting/0245dae3-6bd5-4813-b810-49b6d5d3b676.__CR0,0,970,600_PT0_SX970_V1___.jpg"
                    alt=" "
                    width={3000}
                    height={3000}
                    className="w-full  object-cover mx-auto order-first rounded-lg"
                />
            </div>



        </main>
    );
}