
import React, { useEffect, useState } from "react";
import Logo from "../img/boton.jpg";
import Mancha from "../img/mancha.jpg";
import Verde from "../img/verde.jpg";
import Azul from "../img/azul.png";
import Distribuidor from "../pages/distribuidor";
import Tecnologico from "../pages/intchina";
import Estudiando from "../img/estudiando.png"
import Pokemon from "../pages/pokemon";

const Contenido = () => {
    const [startTransition, setStartTransition] = useState(false);
    const [twoTransition, setTwoTransition] = useState(false);
    const [activeSection, setActiveSection] = useState("proyectos");
    const [vistaModal, setVistaModal] = useState(false);
    
    const accionar = () => {
        setVistaModal(!vistaModal)
    }

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
    <>
        <div className="w-screen h-screen overflow-hidden hidden md:flex">
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
                <h1  className="text-xl font-bold mb-2 hidden lg:flex">Carlos Daniel Francisco Boton</h1>
                <h1  className="text-xl font-bold mb-2 lg:hidden">Carlos Daniel Francisco Boton</h1>
                <p className="text-lg mt-4"><strong>Desarrollador Web | Full Stack</strong></p>
                <nav className="mt-6 space-y-4">
                    <a href="#proyectos" className={`block font-bold flex items-center ${activeSection === "proyectos" ? "text-gray-800" : "text-white"}`}>
                        {activeSection === "proyectos" && "➡"} Proyectos
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
                <section id="proyectos" className="p-10">
                    <div className="relative">
                    {/* Imagen detrás del texto */}
                        <img
                            src={Mancha}
                            alt="Mancha decorativa"
                            className="absolute -left-7 -top-2 w-64 opacity-40 z-5"
                        />

                        {/* Título encima */}
                        <h1 className="text-4xl font-bold text-gray-900 z-10 relative">
                            Proyectos
                        </h1>
                    </div>
                    <Distribuidor/>
                    <Tecnologico/>
                    <Pokemon/>
                </section>

                <section id="sobre-mi" className="p-10">
                    <div className="relative">
                        {/* Imagen detrás del texto */}
                        <img
                            src={Verde}
                            alt="Mancha decorativa"
                            className="absolute -left-7 -top-2 w-64 opacity-40 z-5"
                        />

                        {/* Título encima */}
                        <h1 className="text-4xl font-bold text-gray-900 z-10 relative">
                            Sobre mi
                        </h1>
                    </div>
                    <p className="mt-8 mb-2">¡Hola! Soy Carlos, desarrollador Full Stack junior con enfoque en React, Firebase y Tailwind CSS.</p>
                    <p className="mb-2">Me encanta construir apps funcionales y visualmente limpias, como sistemas de ventas o apps de control de inventario.</p>
                    <p className="mb-2">Actualmente trabajo en <strong>Permaducto, S.A. de C.V.</strong>, una empresa especializada en servicios de infraestructura terrestre y marina para la industria energética. Permaducto forma parte de <strong>Grupo Protexa</strong>, un grupo empresarial mexicano con más de 79 años de trayectoria en sectores como energía, construcción e industria. Esta experiencia me ha permitido fortalecer mis habilidades en el desarrollo de soluciones digitales orientadas a procesos reales.</p>
                    <div className="flex flex-row gap-x-4">
                        <div>
                            <p className="mb-2">Además, estoy en constante exploración de nuevas tecnologías y herramientas. Me motiva seguir aprendiendo y uno de mis objetivos es alcanzar el conocimiento necesario para desarrollar proyectos que integren inteligencia artificial, combinando lógica de negocio con soluciones inteligentes.</p>
                            <p className="mb-2">Me considero una persona autodidacta, proactiva y con gusto por los retos técnicos. Disfruto aprender por cuenta propia y buscar soluciones cuando algo se complica.</p>
                        </div>
                        <img src={Estudiando} alt="Estudiando" />
                    </div>
                    

                </section>

                <section id="contacto" className="p-10">
                    <div className="relative">
                    {/* Imagen detrás del texto */}
                        <img
                            src={Azul}
                            alt="Mancha decorativa"
                            className="absolute -left-7 -top-2 w-64 opacity-40 z-5"
                        />

                        {/* Título encima */}
                        <h1 className="text-4xl font-bold text-gray-900 z-10 relative">
                            Contacto
                        </h1>
                    </div>
                    

                    <div className="mt-10 mb-4 flex flex-row gap-x-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/6683/6683352.png" alt="Ubicacion" className="w-5 h-5"/>
                        <p><strong>San francisco de campeche, Campeche.</strong></p>
                    </div>
                    <div className="mb-4 flex flex-row gap-x-4">
                    <img src="https://img.freepik.com/vector-premium/icono-telefono_1076610-15197.jpg" alt="Telefono" className="w-5 h-5"/>
                    <p><strong>9811175484</strong></p>
                    </div>
                    <div className="mb-4 flex flex-row gap-x-4">
                        <img src="https://i.blogs.es/d99c32/new_logo_gmail.svg/1366_2000.png" alt="Gmail" className="w-5 h-5"/>
                        <p><strong>carldfco@gmail.com</strong></p>
                    </div>
                    <div className="mb-4 flex flex-row gap-x-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" alt="Github" className="w-5 h-5"/>
                        <a href="https://github.com/Carlos-Boton?tab=repositories">Github</a>
                    </div>
                   
                </section>
            </div>
        </div>
    </div>
    <div className="w-screen h-screen overflow-hidden md:hidden">
                <div className={`bg-blue-600 transition-all duration-1000 ease-in-out ${ vistaModal ? "h-[30%]" : `${startTransition ? "h-[10%]" : "h-full"}`} w-full flex flex-col items-center justify-center relative`}>
                    <div className={`transition-all duration-1000 ease-in-out flex flex-col items-center justify-center ${
                    vistaModal ? "opacity-100 h-[30%]" : "opacity-0 h-0"
                    } w-full`}>
                        <h1  className="text-2xl font-bold mb-2">Carlos Daniel Francisco Boton</h1>
                        <p className="text-lg mt-4"><strong>Desarrollador Web | Full Stack</strong></p>
                    </div>
                    <div className={`relative w-24 h-24 transition-all duration-1000 ease-in-out ${ vistaModal ? "-mb-32 mt-10" : "mt-20"}`}>
                        <div className={`w-full h-full border-4 border-gray-600 border-t-transparent rounded-full ${
                        startTransition ? "opacity-0" : "animate-spin"
                        } transition-all duration-1000 ease-in-out`}></div>
                        <button>
                            <img
                            src={Logo}
                            onClick={() => accionar()}
                            alt="Logo"
                            className="absolute inset-0 m-auto w-20 h-20 rounded-full"
                            />
                        </button>
                    </div>
                </div>

                
                <div className={`pt-8 ml-auto h-screen overflow-y-scroll space-y-20 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 transition-all duration-1000 ease-in-out ${
                startTransition ? "h-[90%]" : "h-0"
                } w-full`}>
                    <section id="proyectos" className="p-10">
                    <div className="relative">
                    {/* Imagen detrás del texto */}
                        <img
                            src={Mancha}
                            alt="Mancha decorativa"
                            className="absolute -left-7 -top-2 w-64 opacity-40 z-5"
                        />

                        {/* Título encima */}
                        <h1 className="text-4xl font-bold text-gray-900 z-10 relative">
                            Proyectos
                        </h1>
                    </div>
                    <Distribuidor/>
                    <Tecnologico/>
                    <Pokemon/>
                </section>

                <section id="sobre-mi" className="p-10">
                    <div className="relative">
                        {/* Imagen detrás del texto */}
                        <img
                            src={Verde}
                            alt="Mancha decorativa"
                            className="absolute -left-7 -top-2 w-64 opacity-40 z-5"
                        />

                        {/* Título encima */}
                        <h1 className="text-4xl font-bold text-gray-900 z-10 relative">
                            Sobre mi
                        </h1>
                    </div>
                    <p className="mt-8 mb-2">¡Hola! Soy Carlos, desarrollador Full Stack junior con enfoque en React, Firebase y Tailwind CSS.</p>
                    <p className="mb-2">Me encanta construir apps funcionales y visualmente limpias, como sistemas de ventas o apps de control de inventario.</p>
                    <p className="mb-2">Actualmente trabajo en <strong>Permaducto, S.A. de C.V.</strong>, una empresa especializada en servicios de infraestructura terrestre y marina para la industria energética. Permaducto forma parte de <strong>Grupo Protexa</strong>, un grupo empresarial mexicano con más de 79 años de trayectoria en sectores como energía, construcción e industria. Esta experiencia me ha permitido fortalecer mis habilidades en el desarrollo de soluciones digitales orientadas a procesos reales.</p>
                    <p className="mb-2">Además, estoy en constante exploración de nuevas tecnologías y herramientas. Me motiva seguir aprendiendo y uno de mis objetivos es alcanzar el conocimiento necesario para desarrollar proyectos que integren inteligencia artificial, combinando lógica de negocio con soluciones inteligentes.</p>
                    <div className="flex flex-row gap-x-4">
                        <div>
                            <p className="mb-2">Me considero una persona autodidacta, proactiva y con gusto por los retos técnicos. Disfruto aprender por cuenta propia y buscar soluciones cuando algo se complica.</p>
                        </div>
                        <img src={Estudiando} alt="Estudiando" className="h-48 w-48" />
                    </div>
                    

                </section>

                <section id="contacto" className="p-10">
                    <div className="relative">
                    {/* Imagen detrás del texto */}
                        <img
                            src={Azul}
                            alt="Mancha decorativa"
                            className="absolute -left-7 -top-2 w-64 opacity-40 z-5"
                        />

                        {/* Título encima */}
                        <h1 className="text-4xl font-bold text-gray-900 z-10 relative">
                            Contacto
                        </h1>
                    </div>
                    

                    <div className="mt-10 mb-4 flex flex-row gap-x-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/6683/6683352.png" alt="Ubicacion" className="w-5 h-5"/>
                        <p><strong>San francisco de campeche, Campeche.</strong></p>
                    </div>
                    <div className="mb-4 flex flex-row gap-x-4">
                    <img src="https://img.freepik.com/vector-premium/icono-telefono_1076610-15197.jpg" alt="Telefono" className="w-5 h-5"/>
                    <p><strong>9811175484</strong></p>
                    </div>
                    <div className="mb-4 flex flex-row gap-x-4">
                        <img src="https://i.blogs.es/d99c32/new_logo_gmail.svg/1366_2000.png" alt="Gmail" className="w-5 h-5"/>
                        <p><strong>carldfco@gmail.com</strong></p>
                    </div>
                    <div className="mb-32 flex flex-row gap-x-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" alt="Github" className="w-5 h-5"/>
                        <a href="https://github.com/Carlos-Boton?tab=repositories"><strong>Github</strong></a>
                    </div>
                   
                </section>
                </div>
            </div>
    </>
  );
}

export default Contenido;



