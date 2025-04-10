
import React, { useEffect, useState } from "react";
import Logo from "../img/boton.jpg";
import Distribuidor from "../pages/distribuidor";

const Contenido = () => {
    const [startTransition, setStartTransition] = useState(false);
    const [twoTransition, setTwoTransition] = useState(false);
    const [activeSection, setActiveSection] = useState("proyectos");

    useEffect(() => {
        const timer = setTimeout(() => {
        setStartTransition(true);
        }, 3000); // 3 segundos de carga

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (startTransition) {
        const twoTimer = setTimeout(() => {
            setTwoTransition(true);
        }, 1000); // otros 3 segundos después del primer cambio
        return () => clearTimeout(twoTimer);
        }
    }, [startTransition]);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        console.log("Secciones encontradas:", sections);
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            console.log("Observando:", entry.target.id, "Visibilidad:", entry.isIntersecting);
            if (entry.isIntersecting) {
                console.log("Sección activa:", entry.target.id);
                setActiveSection(entry.target.id);
            }
            });
        },
        { threshold: 0.6 } // Detecta cuando el 60% de la sección es visible
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
        sections.forEach((section) => observer.unobserve(section));
        };
    }, []);


  return (
    <div className="w-screen h-screen overflow-hidden flex">
        {/* Fondo azul */}
        <div
        className={`bg-blue-600 transition-all duration-1000 ease-in-out ${
          startTransition ? "w-[40%]" : "w-full"
        } h-full flex flex-col items-center justify-center relative`}
        >
            <div
            className={`transition-all duration-1000 ease-in-out flex flex-col items-center justify-center ${
                twoTransition ? "h-[20%]" : "h-full"
            } w-full`}
            >
                {/* Círculo girando + imagen */}
                <div className="relative w-24 h-24">
                    <div className={`w-full h-full border-4 border-gray-600 border-t-transparent rounded-full ${
                    startTransition ? "opacity-0" : "animate-spin"
                    } transition-all duration-1000 ease-in-out`}></div>
                        <img
                        src={Logo}
                        alt="Logo"
                        className="absolute inset-0 m-auto w-20 h-20 rounded-full"
                        />
                </div>
            </div>

            <div className={`transition-all duration-1000 ease-in-out flex flex-col items-center justify-center ${
                twoTransition ? "opacity-100 h-[30%]" : "opacity-0 h-0"
            } w-full`}>
                <h1  className="text-2xl font-bold mb-2">Carlos Daniel Francisco Boton</h1>
                <p className="text-lg mt-4">Desarrollador Web | Full Stack</p>
                <nav className="mt-6 space-y-4">
                    <a href="#proyectos" className={`block font-bold flex items-center ${activeSection === "proyectos" ? "text-gray-800" : "text-white"}`}>             {activeSection === "proyectos" && "➡"} Proyectos
                    </a>
                    <a href="#sobre-mi" className={`block font-bold flex items-center ${activeSection === "sobre-mi" ? "text-gray-800" : "text-white"}`}>
                        {activeSection === "sobre-mi" && "➡"} Sobre Mí
                    </a>
                    <a href="#contacto" className={`block font-bold flex items-center ${activeSection === "contacto" ? "text-gray-800" : "text-white"}`}>
                        {activeSection === "contacto" && "➡"} Contacto
                    </a>
                </nav>
            </div>

            
        </div>

        {/* Fondo blanco que aparece a la derecha */}
        <div
            className={`bg-white transition-all duration-1000 ease-in-out ${
            startTransition ? "w-[60%]" : "w-0"
            } h-full`}
        >
            {/* Sección con Scroll (60%) */}
            <div className="ml-auto h-screen overflow-y-scroll space-y-20 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
                <section id="proyectos" className="p-20">
                    <h2 className="text-4xl font-bold mb-3">Proyectos</h2>
                    <Distribuidor/>
                </section>

                <section id="sobre-mi" className="p-20">
                    <h2 className="text-4xl font-bold">Sobre Mí</h2>
                    <p className="mt-4">ni yo se, que vas a estar sabiendo tu sobre mi, je je</p>
                </section>

                <section id="contacto" className="p-20">
                    <h2 className="text-4xl font-bold mb-4">Contacto</h2>
                    <p><img src="https://img.freepik.com/vector-premium/icono-telefono_1076610-15197.jpg" alt="llamada" className="w-5 h-5" /><strong>9811175484</strong></p>
                    <p><strong>Correoyo@yomero</strong></p>
                    <p><strong></strong></p>
                    <p className="mt-4">Formulario o redes sociales...</p>
                </section>
            </div>
        </div>
    </div>
  );
}

export default Contenido;



