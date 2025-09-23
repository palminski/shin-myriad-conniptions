import Image from "next/image";
export default function Arcana() {

    let images = [
        "/images/Arcana/Arcana.png",
        "/images/Arcana/King Rate New Card Design.png",
        "/images/Arcana/Spell.png",
    ]

    return (
        <main className=" lg:mt-[50px] pt-8">



            <div className="mt-10 mb-20 space-y-8">
                <div className="space-y-1">
                    <h1 className="text-left font-bold text-5xl">Arcana</h1>
                    <h3 className="text-left italic text-2xl poppins-light-italic">Solo Developed Card Game</h3>
                </div>

                <p className="text-lg text-custom-green-paragraph">
                    I’ve been developing Arcana, a whimsical tarot-inspired card game, as a solo designer. I created the mechanics, world-building, and visual direction, ensuring a cohesive aesthetic and gameplay experience. Every element from the rules to the illustrations were carefully curated to bring the game’s universe to life.
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