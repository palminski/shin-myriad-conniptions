import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "William Bolls",
    description: "William Bolls Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative bg-[url('/images/bgSVGs/filmGrain.svg'),linear-gradient(to_right,#000000,#0d0017)] bg-repeat app-bg text-white poppins-regular`}
            >
                <NavBar />

                <div className=" mx-auto p-2 lg:p-4 w-auto xl:w-[1280px] bg-[url('/images/bgSVGs/filmGrain.svg')] bg-zinc-900 shadow-purple-900 shadow-xl text-white">

                    <div className="p-2 lg:p-4">
                    {children}

                    </div>

                    <div className="container text-center mx-auto font-strong p-6">
                        <a href="https://www.willamettewebworks.net/">
                            Made By Willamette Web Works
                        </a>
                    </div>
                </div>

                {/* <footer className="bg-zinc-800 text-white p-4 z-50">
                    <div className="container text-center mx-auto">
                        <a href="https://www.willamettewebworks.net/">
                            Made By Willamette Web Works
                        </a>
                    </div>
                </footer> */}
            </body>
        </html>
    );
}
