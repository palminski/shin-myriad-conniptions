import Image from "next/image";
export default function Concrete() {

    let images = [
        // "/images/Concrete/concrete stairs plan-Model.jpg",
        "/images/Concrete/IMG_0101.jpg",
        "/images/Concrete/IMG_2587.jpg",
        // "/images/Concrete/IMG_20180910_151459.jpg",
        "/images/Concrete/original_eb66eb20-1716-4213-81ba-679b545338b7_PXL_20230905_164539941.jpg",
        "/images/Concrete/PXL_20230918_202333442.jpg",


    ]

    return (
        <main className=" lg:mt-[50px] pt-8">

            <div className="mt-10 mb-20 space-y-8">
                <div className="space-y-1">
                    <h1 className="text-left font-bold text-5xl">Concrete & Design</h1>
                    <h3 className="text-left italic text-2xl poppins-light-italic">Independent Work</h3>
                </div>

                <p className="text-lg text-custom-green-paragraph">
                    I designed and built a set of concrete stairs. First, I created detailed plans to make sure everything was right. Then, I handled the pour and finishing process myself. It was a small project, but one that reinforced how much I enjoy seeing a design go from paper to reality.
                </p>
            </div>

            <div className="lg:px-4 mb-4 lg:mb-0">
                <Image
                    src="/images/Concrete/concrete stairs plan-Model.jpg"
                    alt=" "
                    width={3000}
                    height={3000}
                    className="w-full object-cover mx-auto order-first rounded-lg shadow"
                />
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