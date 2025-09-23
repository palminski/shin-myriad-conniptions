import Image from "next/image";
export default function Furniture() {

    let images = [
        "/images/Furniture/DSC_0620.jpg",
        // "/images/Furniture/DSC_0623.jpg",
        // "/images/Furniture/DSC_0625.jpg",
        "/images/Furniture/DSC_0629.jpg",
        "/images/Furniture/DSC_0633.jpg",
        "/images/Furniture/DSC_0635.jpg",
    ]

    return (
        <main className=" lg:mt-[50px] pt-8">

            <div className="mt-10 mb-20 space-y-8">
                <div className="space-y-1">
                    <h1 className="text-left font-bold text-5xl">Mid-Century Modern Coffee Table</h1>
                    <h3 className="text-left italic text-2xl poppins-light-italic">Interior Architecture Studio</h3>
                </div>

                <p className="text-lg text-custom-green-paragraph">
                    As part of an interior architecture studio, I designed and built a custom mid-century modern coffee table using white maple, tempered glass, and black leather. The table was designed as a display cabinet, allowing the owner to showcase sculptural objects inside. For my personal version, I used a Honda motor block as the focal point and contrast between precision engineering and natural wood. The design is flexible, allowing future owners to swap out the display element while maintaining the table’s clean aesthetic.
                </p>
            </div>

            <div className="lg:px-4 mb-4 lg:mb-0">
                <Image
                    src="/images/Furniture/DSC_0625.jpg"
                    alt=" "
                    width={3000}
                    height={3000}
                    className="w-full  object-cover mx-auto order-first rounded-lg shadow"
                />
            </div>

            <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-2 gap-4 lg:p-4 pb-0">
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

            <div className="lg:px-4">
                <Image
                    src="/images/Furniture/DSC_0623.jpg"
                    alt=" "
                    width={3000}
                    height={3000}
                    className="w-full  object-cover mx-auto order-first rounded-lg shadow"
                />
            </div>

        </main>
    );
}