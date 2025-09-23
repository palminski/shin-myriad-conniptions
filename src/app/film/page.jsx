import Image from "next/image";
export default function Film() {

    let images = [
        "/images/Film/_25_0286.jpg",
        "/images/Film/_37_0382.jpg",
        "/images/Film/_DSC0240-2.jpg",
        "/images/Film/_DSC0372-2.jpg",
        "/images/Film/_DSC0383-2.jpg",
        "/images/Film/_DSC0385-2.jpg",
        "/images/Film/---_0395.jpg",
        "/images/Film/---_0396.jpg",
        "/images/Film/---_0399.jpg",
        "/images/Film/---_0496.jpeg",
        "/images/Film/---_0498.jpeg",
        "/images/Film/---_0500.jpeg",
        "/images/Film/---_0502.jpeg",
        "/images/Film/---_0507.jpeg",
        "/images/Film/00A_0352.jpg",
        "/images/Film/11A_0303.jpg",
        "/images/Film/13A_0237.jpg",
        "/images/Film/15A_0306.jpg",
        "/images/Film/16A_0307.jpg",
        "/images/Film/21A_0245.jpg",
    ]

    return (
        <main className=" lg:mt-[50px] pt-8">

            <div className="mt-10 mb-20 space-y-8">
                <div className="space-y-1">
                    <h1 className="text-left font-bold text-5xl">35mm Film Photography</h1>
                    <h3 className="text-left italic text-2xl poppins-light-italic">Capturing Light and Texture</h3>
                </div>

                <p className="text-lg text-custom-green-paragraph">
                    I shoot on 35mm film, focusing on texture, light, and composition. Film photography allows me to slow down and capture moments with intention, emphasizing atmosphere over perfection.
                </p>
            </div>


            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 lg:p-4">
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