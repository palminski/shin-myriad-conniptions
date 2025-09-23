import Image from "next/image";
export default function Brutalism() {

    let images = [
        "/images/Brutalism/Kaiser Wihelm Memorial Church.jpg",
        "/images/Brutalism/MESA LABORATORY.jpg",
        "/images/Brutalism/Praxis Home.jpg",
        "/images/Brutalism/Wright College.jpg",


    ]

    return (
        <main className=" lg:mt-[50px] pt-8">



            <div className="mt-10 mb-20 space-y-8">
                <div className="space-y-1">
                    <h1 className="text-left font-bold text-5xl">Brutalism Collages</h1>
                    <h3 className="text-left italic text-2xl poppins-light-italic">Digital Architectural Art</h3>
                </div>

                <p className="text-lg text-custom-green-paragraph">
                    I create digital collages inspired by Brutalist architecture, using Adobe Photoshop and Illustrator to reinterpret the work of famous architects. These pieces emphasize strong geometry, raw textures, and a bold graphic style.
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