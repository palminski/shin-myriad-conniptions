import Image from "next/image";
export default function Models() {

    let images = [
        "/images/Models/IMG_20181004_175753.jpg",
        // "/images/Models/20180423_105448-COLLAGE.jpg",
        "/images/Models/PXL_20230209_005125591.jpg",
        "/images/Models/PXL_20230209_005120362.jpg",
        "/images/Models/IMG_20181023_122655.jpg",
        "/images/Models/IMG_20181004_175914.jpg",
        "/images/Models/PXL_20230209_005107197.jpg",
        "/images/Models/IMG_20180608_153230.jpg",
        "/images/Models/original_263b3464-d9f5-403a-bd6d-14c2998f4fc7_PXL_20221005_182117530.jpg",
    ]


    let mobileImages = [
        "/images/Models/IMG_20181004_175914.jpg",
        "/images/Models/IMG_20181004_175753.jpg",
        // "/images/Models/20180423_105448-COLLAGE.jpg",
        "/images/Models/PXL_20230209_005125591.jpg",
        "/images/Models/PXL_20230209_005120362.jpg",
        
        "/images/Models/PXL_20230209_005107197.jpg",
        "/images/Models/IMG_20181023_122655.jpg",
        "/images/Models/IMG_20180608_153230.jpg",
        "/images/Models/original_263b3464-d9f5-403a-bd6d-14c2998f4fc7_PXL_20221005_182117530.jpg",
    ]

    return (
        <main className=" lg:mt-[50px] pt-8">

            <div className="mt-10 mb-20 space-y-8">
                <div className="space-y-1">
                    <h1 className="text-left font-bold text-5xl">Architecture Models</h1>
                    <h3 className="text-left italic text-2xl poppins-light-italic">Crafting Physical Spaces</h3>
                </div>

                <p className="text-lg text-custom-green-paragraph">
                    Here I highlight the physical architectural models I’ve built to explore form, materiality, and spatial relationships. Each model represents a hands-on approach to design, emphasizing craftsmanship and precision.
                </p>
            </div>

            <div className="hidden lg:block">
                <div className=" columns-1 sm:columns-2 md:columns-2 lg:columns-2 gap-4 p-4">
                    {images.map((image, i) => (
                        <div key={i}>
                            <Image
                                src={image}
                                alt=""
                                width={3000}
                                height={3000}
                                className="w-full h-[550px] object-cover rounded-lg break-inside-avoid mb-4 shadow"
                            />
                        </div>
                    ))}
                </div>
            </div>


            {/* Mobile */}
            <div className="lg:hidden columns-1 sm:columns-2 md:columns-2 lg:columns-2 gap-4 lg:p-4">
                {mobileImages.map((image, i) => (
                    <div key={i}>
                        <Image
                            src={image}
                            alt=""
                            width={3000}
                            height={3000}
                            className="w-full lg:h-[550px] object-cover rounded-lg break-inside-avoid mb-4 shadow"
                        />
                    </div>
                ))}
            </div>



        </main>
    );
}