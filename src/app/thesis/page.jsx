import Image from "next/image";
export default function Thesis() {

    let images = [
        "/images/Thesis/HC.Thesis.Benjamin_Page_01.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_04.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_05.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_06.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_07.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_08.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_09.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_10.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_11.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_12.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_13.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_14.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_15.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_16.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_17.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_18.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_19.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_20.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_21.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_22.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_23.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_24.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_25.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_26.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_27.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_28.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_29.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_30.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_31.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_32.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_33.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_34.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_35.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_36.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_37.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_38.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_39.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_40.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_41.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_42.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_43.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_44.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_45.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_46.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_47.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_48.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_49.jpg",
        "/images/Thesis/HC.Thesis.Benjamin_Page_50.jpg",
    ]

    return (
        <main className=" lg:mt-[50px] pt-8">

            <div className="mt-10 mb-20 space-y-8">
                <div className="space-y-1">
                    <h1 className="text-left font-bold text-5xl">Terminal Studio</h1>
                    <h3 className="text-left italic text-2xl poppins-light-italic">Clark Honors College Thesis</h3>
                </div>

                <p className="text-lg text-custom-green-paragraph">
                For my architectural thesis at the University of Oregon’s Clark Honors College, I redesigned Lawrence Hall, the university’s architecture school as Living Building Challenge-certified. The goal was to transform it into a full-petal Living Building, meeting the highest standards of sustainability and regenerative design. The project focused on energy efficiency, material transparency, water conservation, and biophilic design to create a building that actively benefits both its occupants and the environment.
                </p>
            </div>

            <div className="flex flex-wrap">
                {images.map((image, i) => (
                    <div className="py-2 lg:px-2 w-full lg:w-1/2" key={i}>
                        <Image
                            src={image}
                            alt=""
                            width={3000}
                            height={3000}
                            className="w-full  rounded-lg break-inside-avoid shadow"
                        />
                    </div>
                ))}
            </div>



        </main>
    );
}