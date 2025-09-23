import Image from "next/image";
export default function TerraPacem() {

    let images = [
        // "/images/terra_pacem/Finished Outlet and Plumbing Plan.jpg",
        "/images/terra_pacem/PXL_20220731_040236979.jpg",
        // "/images/terra_pacem/Floor Plan_Lighting.jpg",
        "/images/terra_pacem/IMG_0860.jpg",
        // "/images/terra_pacem/Menu_Inside.jpg",
        // "/images/terra_pacem/Menu_Outside.jpg",
        "/images/terra_pacem/PXL_20210707_181853558.jpg",
        "/images/terra_pacem/PXL_20220730_205316009.jpg",
        // "/images/terra_pacem/Shelf Support Plan.jpg",

    ]

    return (
        <main className=" lg:mt-[50px] pt-8">

            <div className="mt-10 mb-20 space-y-8">
                <div className="space-y-1">
                    <h1 className="text-left font-bold text-5xl">Interior Design</h1>
                    <h3 className="text-left italic text-2xl poppins-light-italic">Terra Pacem Winery</h3>
                </div>

                <p className="text-lg text-custom-green-paragraph">
                    I designed the interior of Terra Pacem Winery. That meant choosing the finishes, furniture, and materials that shaped the look and feel of the space. I also created installation plans and worked closely with contractors to make sure everything came together smoothly. Beyond the interiors, I handled the winery’s branding by designing their logo (a stylized rooster) and creating graphic elements that tied it all together.
                </p>
            </div>

            <div className="lg:px-4 space-y-4 mb-4 lg:mb-0">
                <Image
                    src="/images/terra_pacem/Floor Plan_Lighting.jpg"
                    alt=" "
                    width={3000}
                    height={3000}
                    className="w-full object-cover mx-auto order-first rounded-lg shadow"
                />
                <Image
                    src="/images/terra_pacem/Finished Outlet and Plumbing Plan.jpg"
                    alt=" "
                    width={3000}
                    height={3000}
                    className="w-full object-cover mx-auto order-first rounded-lg shadow"
                />
                <Image
                    src="/images/terra_pacem/Shelf Support Plan.jpg"
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


            <div className="lg:px-4 space-y-4">
            <Image
                    src="/images/terra_pacem/Menu_Outside.jpg"
                    alt=" "
                    width={3000}
                    height={3000}
                    className="w-full object-cover mx-auto order-first rounded-lg shadow"
                />
                <Image
                    src="/images/terra_pacem/Menu_Inside.jpg"
                    alt=" "
                    width={3000}
                    height={3000}
                    className="w-full object-cover mx-auto order-first rounded-lg shadow"
                />
            </div>


        </main>
    );
}