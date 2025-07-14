
const Distribuidor = ({IconsPoryectos,toggleCheveron,valorImg,ArrayTextWhatsapp,ArrayImg}) => {

    const [Icon1,Icon2] = IconsPoryectos;

    const imagenes = ArrayTextWhatsapp[valorImg].img || [];
    const total = imagenes.length;
    const visibles = imagenes.slice(0, 4);

    const getImageClass = (index) => {
        if (total === 1) return "col-span-2 row-span-2 w-full px-20 flex items-center";
        if (total === 2) return "col-span-2 h-[200px] w-[24rem]";
        if (total === 3) {
            if (index === 0 || index === 1) return "col-span-1 h-[170px]"; // dos arriba
            if (index === 2) return "col-span-2 h-[170px] w"; // uno abajo
        }
            
        return "col-span-1 h-[200px] w-[30vh]"; // para 4 o más
    };

    return(
        <div className=" h-[calc(100vh-4rem)] w-full overflow-y-auto">
             <div className="h-full text-blue-300">
                <div className="p-4 px-8 text-justify text-blue-500 text-sm flex justify-center">
                    <p className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-[400px]"><strong>Este proyecto busca resolver un objetivo personal:</strong> mejorar mi comprensión y habilidades en diseño de interfaces web modernas, inspirándome en el diseño de WhatsApp. El enfoque está en replicar la estructura, distribución visual y estilo responsivo del frontend</p>
                </div>
                <div className="px-4 pb-4 text-justify mb-4">
                    <p>Clon visual de WhatsApp Web – Proyecto de práctica
                    Aplicación de frontend enfocada 100% en la reproducción visual de WhatsApp Web.
                    No incluye funcionalidad real de chat, pero reproduce la estructura, estética, y lógica visual de una app de mensajería.
                    El objetivo es fortalecer habilidades en diseño web responsivo con Tailwind CSS y React.</p>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">¿Que funcionalidades Tiene?</h3>
                <div className="flex-col justify-center h-[32rem] mb-4">
                    <h4 className="text-center">{ArrayTextWhatsapp[valorImg].funcion}</h4>
                    <div className="h-[28rem] relative flex justify-center p-4">
                        {!(valorImg === 0) && (
                            <div className="absolute z-20 h-full w-14 left-10 flex items-center" ><Icon1 onClick={() => toggleCheveron(1)}  className="w-12 h-12 hover:bg-blue-950 rounded-full p-1" strokeWidth={2}/></div>
                        )}
                        {!(valorImg === ArrayImg-1) && (
                            <div className="absolute z-20 h-full w-14 right-10 flex items-center" ><Icon2 onClick={() => toggleCheveron(0)} className="w-12 h-12 hover:bg-blue-950 rounded-full p-1" strokeWidth={2}/></div>
                        )}
                        
                            <div className="grid grid-cols-2 gap-2">
                                {visibles.map((vistaImg, i) => (
                                    <div key={i}
                                    className={`relative overflow-hidden rounded-md ${getImageClass(i)}`}
                                    >
                                        <img src={vistaImg} alt="" className="w-full object-contain"/>     
                                    </div>
                                ))}
                            </div>
                    </div>
                    <div className="text-center">
                        <a href="https://portafolio-whats.vercel.app/proyectos" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold">Link de Diseño de WhatsApp</a>
                    </div>
                </div>
                {/* <ul>
                    <li>Interfaz responsiva tipo WhatsApp (lista de chats, ventana de conversación)</li>
                    <li>Componentes reusables (barra lateral, encabezado, burbujas de mensaje)</li>
                    <li>Diseño inspirado en UI real, pero 100% construido desde cero</li>
                    <li>Uso de Tailwind CSS para estructurar el diseño</li>
                    <li>Simulación de estados visuales</li>
                </ul> */}
                <div className="flex justify-center space-x-12 h-[20rem] relative">
                    <div className="w-64 relative">
                        <div className="absolute top-8 right-0 transition-all shadow-[0_0_15px_rgba(147,197,253,0.4)] hover:shadow-[0_0_15px_rgba(147,197,253,0.8)] hover:top-4 p-4 rounded-2xl">
                            <h3 className="font-bold text-xl mb-4">Tecnologias utilizadas</h3>
                            <ul className="list-disc ml-4">
                                <li>React</li>
                                <li>React Router</li>
                                <li>TailwindCss</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-64 relative">
                        <div className="absolute top-8 transition-all shadow-[0_0_15px_rgba(147,197,253,0.4)] hover:shadow-[0_0_15px_rgba(147,197,253,0.8)] hover:top-4 p-4 rounded-2xl">
                            <h3  className="font-bold text-xl mb-4">Aprendisaje en este proyecto</h3>
                                <ul className="list-disc ml-4">
                                    <li>El uso avanzado de Tailwind CSS</li>
                                    <li>La composición de componentes en React</li>
                                    <li>La maquetación responsiva para escritorio</li>
                                    <li>La separación visual por niveles de jerarquía (layouts)</li>
                                    <li>La atención al detalle en diseño de interfaces reales</li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div className="py-12"></div>
             </div>
        </div>
    )
}

export default Distribuidor;