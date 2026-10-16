"use client";

import Image from "next/image";
import Slider from "./slider";
import Masonry from 'react-masonry-css'
import Header from "./header";
import Featured from "./featured";
import About from "./about";
import Gallery from "./gallery";

export default function Home() {
  return (



    <div id="container" className="max-w-6xl w-full bg-red-100x mx-auto px-8">

        <Header />

        <Featured />

        <About />

        <Gallery />

        <div id="footer"
            className="py-10 flex justify-between jetbrains-mono-400 text-[#666666] text-[10px] tracking-[1px] flex-col lg:flex-row items-center gap-4 text-center">

            <h6>
                © 2026 CK ARCHITECTURE
            </h6>

            <h6>
                BUILT SLOWLY · HELD LIGHTLY
            </h6>

        </div>

    </div>

  );
}
