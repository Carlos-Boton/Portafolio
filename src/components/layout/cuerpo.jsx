import { PhoneIcon,MapPinIcon,EnvelopeIcon,CodeBracketSquareIcon,XMarkIcon } from "@heroicons/react/16/solid";
import { useState,useEffect } from "react";
import ImgAzul from "../img/azul.webp";
import ImgAnaranjado from "../img/anaranjado.webp";
import ImgMorado from "../img/morado.webp";
import ImgRojo from "../img/rojo.webp";
import ImgVerde from "../img/verde.webp";
import Contacto from "../pages/contacto";
import Inicio from "../pages/inicio";
import Proyectos from "../pages/proyectos";
import Sobremi from "../pages/sobremi";
import Navbar from "./navbar";
import Css from "../img/icons/css.svg";
import Firebase from "../img/icons/firebase.svg";
import Html from "../img/icons/html5.svg";
import JavaScript from "../img/icons/javascript.svg";
import Laravel from "../img/icons/laravel.svg";
import Mysql from "../img/icons/mysql.svg";
import Php from "../img/icons/php.svg";
import React from "../img/icons/react.svg";
import ReactRouter from "../img/icons/reactrouter.svg";
import Tailwind from "../img/icons/tailwindcss.svg";
import Vite from "../img/icons/vite.svg";
import Whats1 from "../img/whatsapp/1.webp";
import Whats2 from "../img/whatsapp/2.webp";
import Whats3 from "../img/whatsapp/3.webp";
import Whats4 from "../img/whatsapp/4.webp";
import Whats5 from "../img/whatsapp/5.webp";
import Whats6 from "../img/whatsapp/6.webp";
import Whats7 from "../img/whatsapp/7.webp";
import Whats8 from "../img/whatsapp/8.webp";
import Whats9 from "../img/whatsapp/9.webp";
// import Whats10 from "../img/whatsapp/10.webp";
import ModalProyectos from "../pages/modalProyectos";

const Cuerpo = () => {

    const [navegante,setNavegante] = useState("inicio");
    const [mostrarModal, setMostrarModal] = useState(false);
    const [valorModal, setValorModal] = useState(0)
    const [logoSeleccionado, setLogoSeleccionado] = useState(0);
    const iconsContacto = [PhoneIcon,MapPinIcon,EnvelopeIcon,CodeBracketSquareIcon];
    const iconosImagenes = [ImgAzul,ImgAnaranjado,ImgMorado,ImgRojo,ImgVerde];
    const proyectos = [
        {nombre: "Diseño WhatsApp", iconos: [React,Vite,ReactRouter,Tailwind,JavaScript,Css,Html], imagen: [Whats1,Whats2] },
        {nombre: "Gestion de ventas", iconos: [Firebase,React,ReactRouter,Tailwind,JavaScript,Css,Html], imagen: [Whats3,Whats4,Whats5,Whats6]},
        {nombre: "Sistema Tecn", iconos: [JavaScript,Css,Html,Php,Mysql,Laravel], imagen: [Whats7,Whats8,Whats9]}
    ]

    const toggleModal = (i) => {
        setMostrarModal(true);
        setValorModal(i);
    }

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
            main.classList.add("bg-slate-900");
        } else {
            main.classList.remove("bg-slate-900");
            main.classList.add("bg-slate-800");
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <div id="main" className="min-h-screen transition-colors duration-700 bg-slate-800">
            <Navbar navegante={navegante} setNavegante={setNavegante}/>
            <ModalProyectos mostrarModal={mostrarModal} setMostrarModal={setMostrarModal} proyectos={proyectos} valorModal={valorModal} XMarkIcon={XMarkIcon} />
            <Inicio iconosImagenes={iconosImagenes} setLogoSeleccionado={setLogoSeleccionado} logoSeleccionado={logoSeleccionado} />
            <Proyectos proyectos={proyectos} toggleModal={toggleModal} />
            <Sobremi/>
            <Contacto iconsContacto={iconsContacto} iconosImagenes={iconosImagenes} logoSeleccionado={logoSeleccionado} />
        </div>
    )
}
export default Cuerpo;