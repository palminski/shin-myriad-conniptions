import Image from "next/image";
export default function StructuralFab() {

    let images = [
        "/images/StructuralFab/IMG_1101.jpg",
        "/images/StructuralFab/IMG_1230.jpg",
        "/images/StructuralFab/IMG_1258.jpg",
        "/images/StructuralFab/IMG_1429.jpg",
        "/images/StructuralFab/IMG_1516.jpg",
        "/images/StructuralFab/IMG_1583.jpg",
        "/images/StructuralFab/IMG_2028.jpg",
        // "/images/StructuralFab/IMG_5210-2.jpg",
        // "/images/StructuralFab/IMG_5210.jpg",
        // "/images/StructuralFab/IMG_7431.jpg",
        "/images/StructuralFab/IMG_9421.jpg",


    ]

    return (
        <main className=" lg:mt-[50px] pt-8">

            <div className="mt-10 mb-20 space-y-8">
                <div className="space-y-1">
                    <h1 className="text-left font-bold text-5xl">Structural Fabrication</h1>
                    <h3 className="text-left italic text-2xl poppins-light-italic">The Circuit Climbing Gym</h3>
                </div>

                <p className="text-lg text-custom-green-paragraph">
                    I helped build the Circuit Climbing Gym in Eugene, OR by laying out and welding the steel structure that supports the climbing walls. I also built industrial details throughout the space, including furniture, railings, doors, and the vestibule. One of the standout pieces was a large concrete countertop for the bar, which I helped design, pour, and finish. Everything needed to be durable, functional, and fit the gym’s aesthetic.
                </p>
            </div>

            

            <div className="lg:px-4 mb-4 lg:mb-0">
                <Image
                    src="/images/StructuralFab/IMG_7431.jpg"
                    alt=" "
                    width={3000}
                    height={3000}
                    className="w-full lg:h-[600px] object-cover mx-auto order-first rounded-lg shadow"
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
                            className="w-full rounded-lg break-inside-avoid mb-4"
                        />
                    </div>
                ))}
            </div>

            <div className="lg:px-4">
                <Image
                    src="/images/welding.png"
                    alt=" "
                    width={3000}
                    height={3000}
                    className="w-full h-full object-cover mx-auto order-first rounded-lg"
                />
            </div>

        </main>
    );
}