import { Link } from "react-router-dom";
import imgAzul from "../img/azul.webp";
import { useState } from "react";


const Sidebar = () => {

    const [activeSidebar, setActiveSidebar] = useState("portafolio");

    return(
        <div className="relative w-80 h-screen border-r-2 border-r-slate-700 flex items-center justify-center">
            <div className="" >
                <div className="flex justify-center">
                    <img src={imgAzul} alt="" className="w-28 mb-2"/>
                </div>
                <h3 className="text-blue-600 font-bold mb-8 text-xl text-center">Carlos Daniel Francisco Botón</h3>
                <nav className="relative ">
                    <ul className="text-white py-4 flex flex-col items-center">
                        <Link to="/proyectos" onClick={() =>  setActiveSidebar("portafolio")} className={`p-3 cursor-pointer transition-all duration-500 ${activeSidebar === "portafolio" && ('text-blue-600 font-bold')}`}>Portafolio</Link>
                        <Link to="/sobremi" onClick={() =>  setActiveSidebar("sobremi")} className={`p-3 cursor-pointer transition-all duration-500 ${activeSidebar === "sobremi" && ('text-blue-600 font-bold')}`}>Sobre mi</Link>
                        <Link to="/contacto" onClick={() =>  setActiveSidebar("contacto")} className={`p-3 cursor-pointer transition-all duration-500 ${activeSidebar === "contacto" && ('text-blue-600 font-bold')}`}>Contacto</Link>
                        <div className={`absolute w-28 h-12 transition-all duration-500 ${activeSidebar === "portafolio" ? ("top-4")
                            : activeSidebar === "sobremi" ? ("top-[64px]")
                            : ("top-[112px]")}`}>
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-blue-700"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-blue-700"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-blue-700"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-blue-700"></div>
                        </div>   
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar;