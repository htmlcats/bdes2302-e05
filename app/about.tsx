
export default () => {
    return (

        <div id="about" className="py-16 flex gap-16 items-center flex-col lg:flex-row">

            <div id="about_left" className="flex-1">

                <h6 className="text-[10px] tracking-[1.8px] jetbrains-mono-500 text-[#00789F] mb-2">
                    A NOTE ON MAKING · 01
                </h6>

                <h1 className="text-[48px] leading-none cormorant-garamond-300">
                    Leave room for<br/>
                    the day to change.
                </h1>

                <p className="text-[16px] leading-[24px] inter-300 text-[#666666] mt-6 mb-4">
                    We make places that notice the small things: the sun moving across
                    a wall, a doorway that slows you down, the grain of a board worn
                    smooth by daily life.
                </p>
                <p className="text-[14px] leading-[20px] inter-300 text-[#999999] mb-4">
                    Each project begins with what is already there.
                </p>
                <p className="text-[14px] leading-[20px] inter-300 text-[#999999]">
                    We listen to a site, work with its materials, and shape rooms that feel generous without
                    asking to be the center of attention.
                </p>

            </div>
            <div id="about_right" className="flex-1">

                <img className="aspect-4/3 saturate-0 hover:saturate-100 transition-all duration-500" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&amp;fit=crop&amp;w=1200&amp;q=85" alt="Natural materials and soft daylight in a calm living space" />

            </div>


        </div>


    );
};