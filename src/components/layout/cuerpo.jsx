import { PhoneIcon,MapPinIcon,EnvelopeIcon,CodeBracketSquareIcon } from "@heroicons/react/16/solid";
import { useState,useEffect } from "react";
import ImgAzul from "../img/azul.webp";
import Contacto from "../pages/contacto";
import Inicio from "../pages/inicio";
import Proyectos from "../pages/proyectos";
import Sobremi from "../pages/sobremi";
import Navbar from "./navbar";

const Cuerpo = () => {

    const [navegante,setNavegante] = useState("inicio");
    const iconsContacto = [PhoneIcon,MapPinIcon,EnvelopeIcon,CodeBracketSquareIcon];

     useEffect(() => {
        const sections = document.querySelectorAll("section");
        // console.log("Secciones encontradas:", sections);
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            // console.log("Observando:", entry.target.id, "Visibilidad:", entry.isIntersecting);
            if (entry.isIntersecting) {
                // console.log("Sección activa:", entry.target.id);
                setNavegante(entry.target.id);
            }
            });
        },
        { threshold: 0.6 } // Detecta cuando el 60% de la sección es visible
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
        sections.forEach((section) => observer.unobserve(section));
        };
    }, [navegante]);

    useEffect(() => {
        const handleScroll = () => {
        const main = document.getElementById("main");
        const scrollTop = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;

        if (scrollTop >= scrollHeight - 500) {
            main.classList.remove("bg-slate-800");
            main.classList.add("bg-slate-950");
        } else {
            main.classList.remove("bg-slate-950");
            main.classList.add("bg-slate-800");
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <div id="main" className="min-h-screen transition-colors duration-700 bg-slate-800">
            <Navbar navegante={navegante} setNavegante={setNavegante}/>
            <Inicio ImgAzul={ImgAzul} />
            <Proyectos/>
            <Sobremi/>
            <Contacto iconsContacto={iconsContacto} ImgAzul={ImgAzul} />
        </div>
    )
}
export default Cuerpo;