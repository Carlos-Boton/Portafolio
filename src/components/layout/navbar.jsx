const Navbar = ({navegante,setNavegante}) => {

    return(
        <div className="fixed z-20 top-0 h-[4rem] w-screen">
            <div className="w-full h-full flex items-center justify-center">
                <ul className="text-white flex relative">
                    <a
                    href="#inicio"
                    onClick={() => setNavegante("inicio")}
                    className={`hover:text-slate-300 transition-all px-4 mb-2 text-sm/6 font-semibold ${navegante === "inicio" && ("text-slate-400 font-bold")} `}>Inicio</a>
                    <a
                    href="#proyectos"
                    onClick={() => setNavegante("proyectos")}
                    className={`hover:text-slate-300 transition-all px-4 mb-2 text-sm/6 font-semibold ${navegante === "proyectos" && ("text-slate-400 font-bold")} `}
                    >Proyectos</a>
                    <a
                    href="#sobremi"
                    onClick={() => setNavegante("sobremi")}
                    className={`hover:text-slate-300 transition-all px-4 mb-2 text-sm/6 font-semibold ${navegante === "sobremi" && ("text-slate-400 font-bold")} `}
                    >Sobre mi</a>
                    <a
                    href="#contacto"
                    onClick={() => setNavegante("contacto")}
                    className={`hover:text-slate-300 transition-all px-4 mb-2 text-sm/6 font-semibold ${navegante === "contacto" && ("text-slate-400 font-bold")} `}
                    >Contacto</a>
                    <div className={`absolute border border-slate-500 bottom-0 transition-all duration-500
                    ${navegante === "inicio" ? ("w-[66px] left-[0px]") :
                    navegante === "proyectos" ? ("left-[66px] w-[95px]") :
                    navegante === "sobremi" ? ("left-[160px] w-[89px]") :
                    ("left-[249px] w-[90px]")}`}></div>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;