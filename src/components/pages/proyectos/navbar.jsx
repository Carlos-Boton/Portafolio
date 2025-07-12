

const Navbar = ({linkNav,setLinkNav}) => {

    return(
        <div className=" h-16 w-full border-b-2 border-b-slate-700 text-white">
            <ul className="relative flex items-center px-4 h-full">
                <li
                onClick={() => setLinkNav("1")}
                className={`p-3 cursor-pointer font-bold transition-all duration-300 ${linkNav === "1" && ('text-blue-600')}`}
                >Distribuidor</li>
                <li
                onClick={() => setLinkNav("2")}
                className={`p-3 cursor-pointer font-bold transition-all duration-300 ${linkNav === "2" && ('text-blue-600')}`}
                >Diseño WhatsApp</li>
                <li
                onClick={() => setLinkNav("3")}
                className={`p-3 cursor-pointer font-bold transition-all duration-300 ${linkNav === "3" && ('text-blue-600')}`}
                >Sistemas</li>
                <div className={`absolute transition-all h-full
                    ${linkNav === "1" ? ('left-[22px] w-[104px]')
                    : linkNav === "2" ? ('left-[136px] w-[146px]')
                    : ('left-[294px] w-[80px]')}`}>
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-blue-700"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-blue-700"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-blue-700"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-blue-700"></div>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;