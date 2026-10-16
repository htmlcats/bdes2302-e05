export default () => {
    return (

        <div id="header" className="py-7 flex justify-between flex-col lg:flex-row items-center gap-4">

            <h1 className="text-[24px] cormorant-garamond-300 tracking-[1.92px]">
                CK Architecture
            </h1>

            <div id="menu" className="jetbrains-mono-500 uppercase text-[11px] tracking-[1.1px] flex gap-8 items-center">

                <a href="#featured">Featured</a>
                <a href="#about">Point of view</a>
                <a href="#gallery">Journal</a>

            </div>

        </div>

    );
};