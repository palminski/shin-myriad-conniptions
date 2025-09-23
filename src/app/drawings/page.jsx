import Image from "next/image";
export default function Drawings() {

    let images = [
        "/images/Drawings/Allen walkway filter.jpg",
        "/images/Drawings/axon structure mini diagram.JPG",
        "/images/Drawings/axon studio structure.JPG",
        "/images/Drawings/Detail Axon updated.png",
        "/images/Drawings/Enscape Exterior 2 final.jpg",
        "/images/Drawings/Indoorish4 final.jpg",
        "/images/Drawings/Interior 1.jpg",
        "/images/Drawings/MAin entry with filter.jpg",
        "/images/Drawings/overall atruim.jpg",
        "/images/Drawings/Render Big 1 Final.jpg",
        "/images/Drawings/Screenshot 2025-03-10 at 11.49.29 AM.png",
        "/images/Drawings/Screenshot 2025-03-10 at 11.50.25 AM.png",
        "/images/Drawings/Screenshot 2025-03-10 at 11.51.23 AM.png",
        "/images/Drawings/Screenshot 2025-03-10 at 11.52.04 AM.png",
        "/images/Drawings/site plan.jpg",
    ]

    return (
        <main className=" lg:mt-[50px] pt-8">

            <div className="mt-10 mb-20 space-y-8">
                <div className="space-y-1">
                    <h1 className="text-left font-bold text-5xl">Architecture Drawings & Graphics</h1>
                    <h3 className="text-left italic text-2xl poppins-light-italic">Visualizing Design</h3>
                </div>

                <p className="text-lg text-custom-green-paragraph">
                    A collection of my best architectural drawings, renderings, axonometric studies, floor plans, and diagrams. This section showcases my ability to communicate complex ideas visually, balancing clarity, composition, and technical accuracy.
                </p>
            </div>


            <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-2 gap-4 lg:p-4">
                {images.map((image, i) => (
                    <div key={i}>
                        <Image
                            src={image}
                            alt=""
                            width={3000}
                            height={3000}
                            className="w-full rounded-lg break-inside-avoid mb-4 shadow"
                        />
                    </div>
                ))}
            </div>



        </main>
    );
}