import Image from "next/image";
export default function WWW() {

    let images = [
        "/images/WWW/Cristianne Redesign Template.jpg",
        "/images/WWW/SunsetMarket.png",
        "/images/WWW/WWW Redesign Template.png",
        "/images/WWW/Original draft.png",
    ]

    return (
        <main className=" lg:mt-[50px] pt-8">

            <div className="mt-10 mb-20 space-y-8">
                <div className="space-y-1">
                    <h1 className="text-left font-bold text-5xl">Graphic & Web Design</h1>
                    <h3 className="text-left italic text-2xl poppins-light-italic">Willamette Web Works</h3>
                </div>

                <p className="text-lg text-custom-green-paragraph">
                    At Willamette Web Works, I design websites. As co-owner, I create templates, mockups, and layouts that make sites both functional and visually strong. I work directly with clients to understand their needs and with developers to bring those designs to life. Every project is different, but the goal is always the same: clean, effective design that works for the people using it.
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