import Slider from "./slider";

export default () => {
    return (

        <div id="featured" className="pb-16 border-b-1 border-black/20">

            <div className="flex justify-between mb-6 items-center">

                <div>
                    <h6 className="text-[10px] tracking-[1.8px] jetbrains-mono-500 text-[#00789F] mb-2">
                        BUILT NOTES · ISSUE 01
                    </h6>
                    <h1 className="text-[30px] leading-none cormorant-garamond-300">
                        Rooms shaped by light
                    </h1>
                </div>

                <div className="border flex border-black/20 items-center">
                    <button className="p-3" id="featured_prev">
                        <img src="Icon.svg" className="aspect-square" />
                    </button>
                    <div className="h-7 border-l-1 border-black/20"></div>
                    <button className="p-3" id="featured_next">
                        <img src="Icon.svg" className="rotate-180 aspect-square" />
                    </button>
                </div>

            </div>


            <div id="slider">

              <Slider />

            </div>



        </div>


    );
};