import { PhoneIcon,MapPinIcon,EnvelopeIcon,CodeBracketSquareIcon,XMarkIcon,ChevronLeftIcon,ChevronRightIcon,GlobeAltIcon } from "@heroicons/react/16/solid";
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
import Express from "../img/icons/express.svg";
import Firebase from "../img/icons/firebase.svg";
import Git from "../img/icons/git.svg";
import GitHub from "../img/icons/github.svg";
import Html from "../img/icons/html5.svg";
import JavaScript from "../img/icons/javascript.svg";
import Laravel from "../img/icons/laravel.svg";
import Mongo from "../img/icons/mongodb.svg";
import Mysql from "../img/icons/mysql.svg";
import Node from "../img/icons/nodedotjs.svg";
import Php from "../img/icons/php.svg";
import React from "../img/icons/react.svg";
import ReactRouter from "../img/icons/reactrouter.svg";
import Tailwind from "../img/icons/tailwindcss.svg";
import Vite from "../img/icons/vite.svg";
import Whats1 from "../img/whatsapp/ajustes.webp";
import Whats2 from "../img/whatsapp/chatContacto.webp";
import Whats3 from "../img/whatsapp/chatContactoChat.webp";
import Whats4 from "../img/whatsapp/chatContactoChatInformacion.webp";
import Whats5 from "../img/whatsapp/chatContactoImg.webp";
import Whats6 from "../img/whatsapp/estado.webp";
import Whats7 from "../img/whatsapp/estadoImg.webp";
import Whats8 from "../img/whatsapp/perfil.webp";
import Dist1 from "../img/distribuidor/clientes.webp";
import Dist2 from "../img/distribuidor/descargaPdf.webp";
import Dist3 from "../img/distribuidor/generarPedidos.webp";
import Dist4 from "../img/distribuidor/generarPedidosMensaje.webp";
import Dist5 from "../img/distribuidor/inicioSesion.webp";
import Dist6 from "../img/distribuidor/navApp.webp";
import Dist7 from "../img/distribuidor/productos.webp";
import Dist8 from "../img/distribuidor/ticketPedido.webp";
import Dist9 from "../img/distribuidor/ventasSemana.webp";
import Dist10 from "../img/distribuidor/viajePedidoResumen.webp";
import Dist11 from "../img/distribuidor/viajePedidos.webp";

import ModalProyectos from "../pages/modalProyectos";

const Cuerpo = () => {

    const [navegante,setNavegante] = useState("inicio");
    const [mostrarModal, setMostrarModal] = useState(false);
    const [valorModal, setValorModal] = useState(0)
    const [valorImagenModal, setValorImagenModal] = useState(0)
    const [logoSeleccionado, setLogoSeleccionado] = useState(0);
    const iconsContacto = [PhoneIcon,MapPinIcon,EnvelopeIcon,CodeBracketSquareIcon];
    const iconosImagenes = [ImgAzul,ImgAnaranjado,ImgMorado,ImgRojo,ImgVerde];
    const IconsTecnologias = [React,Vite,ReactRouter,Tailwind,Firebase,JavaScript,Css,Html,Php,Mysql,Laravel,Node,Mongo,Express,Git,GitHub];
    const proyectos = [
        // {nombre:"", iconos: [], imagen: [],},
        {nombre: "Diseño WhatsApp", iconos: [React,Vite,ReactRouter,Tailwind,JavaScript,Css,Html], imagen: [Whats1,Whats2,Whats3,Whats4,Whats5,Whats6,Whats7,Whats8], descripcion:"El objetivo de este proyecto es desarrollar un clon de WhatsApp con el propósito de practicar y mejorar mis habilidades en FrontEnd, esta complementa conceptos clave del desarrollo web de lado del Frontend, tales como interfaces dinámicas, visualizacion de estados, diseño adaptable, simulando el entorno de una aplicación de mensajería moderna como es WhatsApp.",github:"https://github.com/Carlos-Boton/DisenoWhats",link:"https://portafolio-whats.vercel.app/proyectos"},
        {nombre: "Gestion de ventas", iconos: [Firebase,React,ReactRouter,Tailwind,JavaScript,Css,Html], imagen: [Dist1,Dist2,Dist3,Dist4,Dist5,Dist6,Dist7,Dist8,Dist9,Dist10,Dist11],descripcion:"El objetivo es diseñar y desarrollar una aplicación web para gestionar la generación y organización de pedidos de manera eficiente, permitiendo agruparlos en viajes según la capacidad de entrega, registrar ventas locales independientes e impresion de ticket, con el fin de optimizar el trabajo diario de un distribuidor y mejorar la administración de sus operaciones.",github:"https://github.com/Carlos-Boton/SistemaPruebaVenta",link:"https://sistema-prueba-venta.vercel.app/login"},
        {nombre: "Sistema Tecn", iconos: [JavaScript,Css,Html,Php,Mysql,Laravel], imagen: [],descripcion:"",github:"",link:""}
    ]
    const valorProyecto = proyectos[valorModal].imagen.length - 1;

    const toggleModal = (i) => {
        setMostrarModal(true);
        setValorModal(i);
        setValorImagenModal(0);
    }

    const toggleImagenModal = (i) => {
        if(i === 0){
            if(valorImagenModal === 0) return;
            setValorImagenModal(valorImagenModal - 1)
        }
        if(i === 1){
            if(valorImagenModal === valorProyecto) return;
            setValorImagenModal(valorImagenModal + 1)
        }
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
        const main = document.getElementById("main");

        const handleScroll = () => {
            const scrollTop = main.scrollTop;
            const scrollHeight = main.scrollHeight - main.clientHeight;

            if (scrollTop >= scrollHeight - 500) {
                main.classList.remove("bg-slate-800");
                main.classList.add("bg-slate-900");
            } else {
                main.classList.remove("bg-slate-900");
                main.classList.add("bg-slate-800");
            }
        };

        if (main) {
            main.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (main) {
            main.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);


    return(
        <div id="main" className="h-screen overflow-y-auto overflow-x-hidden transition-colors duration-700 bg-slate-800">
            <Navbar navegante={navegante} setNavegante={setNavegante}/>
            <ModalProyectos mostrarModal={mostrarModal} setMostrarModal={setMostrarModal} proyectos={proyectos} valorModal={valorModal} XMarkIcon={XMarkIcon} ChevronLeftIcon={ChevronLeftIcon} ChevronRightIcon={ChevronRightIcon} toggleImagenModal={toggleImagenModal} valorImagenModal={valorImagenModal} GitHub={GitHub} GlobeAltIcon={GlobeAltIcon} />
            <Inicio iconosImagenes={iconosImagenes} setLogoSeleccionado={setLogoSeleccionado} logoSeleccionado={logoSeleccionado} />
            <Proyectos proyectos={proyectos} toggleModal={toggleModal} />
            <Sobremi IconsTecnologias={IconsTecnologias} />
            <Contacto iconsContacto={iconsContacto} iconosImagenes={iconosImagenes} logoSeleccionado={logoSeleccionado} />
        </div>
    )
}
export default Cuerpo;