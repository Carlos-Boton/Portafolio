const Navbar = ({navegante,setNavegante}) => {

    return(
        <div className="fixed z-20 top-0 bg-slate-950 h-[4rem] w-screen">
            <div className="w-full h-full flex items-center justify-center">
                <ul className="text-white flex relative">
                    <a
                    href="#inicio"
                    onClick={() => setNavegante("inicio")}
                    className="hover:text-slate-400 transition-all px-4 mb-2">Inicio</a>
                    <a
                    href="#proyectos"
                    onClick={() => setNavegante("proyectos")}
                    className="hover:text-slate-400 transition-all px-4">Proyectos</a>
                    <a
                    href="#sobremi"
                    onClick={() => setNavegante("sobremi")}
                    className="hover:text-slate-400 transition-all px-4">Sobre mi</a>
                    <a
                    href="#contacto"
                    onClick={() => setNavegante("contacto")}
                    className="hover:text-slate-400 transition-all px-4">Contacto</a>
                    <div className={`absolute border bottom-0 transition-all duration-1000
                    ${navegante === "inicio" ? ("w-[70px] left-[0px]") :
                    navegante === "proyectos" ? ("left-[70px] w-[101px]") :
                    navegante === "sobremi" ? ("left-[171px] w-[95px]") :
                    ("left-[266px] w-[97px]")}`}></div>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;