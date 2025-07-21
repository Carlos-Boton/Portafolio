const Sobremi = ({IconsTecnologias}) => {


    const [Icono1,Icono2,Icono3,Icono4,Icono5,Icono6,Icono7,Icono8,Icono9,Icono10,Icono11,Icono12,Icono13,Icono14,Icono15,Icono16] = IconsTecnologias;

    return(
        <div className="h-screen relative" >
            <section id="sobremi" className="relative h-full isolate">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="flex flex-col items-center justify-start h-full text-white">
                    <h3 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl max-w-xl mb-4 mt-16">Sobre mi</h3>
                    <div className="w-full sm:w-[620px] text-justify text-sm sm:text-base mb-4 px-6 sm:px-0">
                        <p>Soy un desarrollador full stack apasionado por la creación de aplicaciones web. Me encanta enfrentar retos que, al principio, confunden mi mente y me hacen sentir que no sé nada… hasta que logro comprender el problema y encontrar una solución.</p>
                        <p>Más que buscar nuevas tecnologías, me enfoco en descubrir soluciones que realmente optimicen el funcionamiento de una aplicación. Sigo en constante aprendizaje y crecimiento, perfeccionando cada vez más mi lógica, mis diseños y la forma en que conecto cada parte de un sistema, tanto en el frontend como en el backend.</p>
                    </div>

                    <div  className="relative overflow-x-auto overflow-y-hidden w-full px-6 pb-4 snap-x">
                        <div className="min-w-max flex flex-col items-center justify-center space-y-4">
                            <div className="">
                                <h3 className="text-center font-bold mb-2">Lenguajes</h3>
                                <div className="flex space-x-3 justify-center">
                                    <div className="flex flex-col items-center"><img src={Icono7} alt="" className="w-8 h-8" /><h3 className="text-xs">Intermedio</h3></div>
                                    <div className="flex flex-col items-center"><img src={Icono8} alt="" className="w-8 h-8" /><h3 className="text-xs">Intermedio/avanzado</h3></div>
                                    <div className="flex flex-col items-center snap-center"><img src={Icono6} alt="" className="w-8 h-8" /><h3 className="text-xs">Intermedio</h3></div>
                                    <div className="flex flex-col items-center"><img src={Icono9} alt="" className="w-8 h-8" /><h3 className="text-xs">Intermedio</h3></div>
                                    <div className="flex flex-col items-center"><img src={Icono12} alt="" className="w-8 h-8" /><h3 className="text-xs">Basico/Intermedio</h3></div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-center font-bold mb-2">Framework / Librerias</h3>
                                <div className="flex space-x-3 justify-center">
                                    <div className="flex flex-col items-center"><img src={Icono1} alt="" className="w-8 h-8" /><h3 className="text-xs">Basico/Intermedio</h3></div>
                                    <div className="flex flex-col items-center"><img src={Icono3} alt="" className="w-8 h-8" /><h3 className="text-xs">Basico/Intermedio</h3></div>
                                    <div className="flex flex-col items-center"><img src={Icono4} alt="" className="w-8 h-8" /><h3 className="text-xs">Intermedio</h3></div>
                                    <div className="flex flex-col items-center"><img src={Icono11} alt="" className="w-8 h-8" /><h3 className="text-xs">Basico/Intermedio</h3></div>
                                    <div className="flex flex-col items-center"><img src={Icono14} alt="" className="w-8 h-8" /><h3 className="text-xs">Basico/Intermedio</h3></div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-center font-bold mb-2">Base de datos</h3>
                                <div className="flex space-x-3 justify-center">
                                    <div className="flex flex-col items-center"><img src={Icono10} alt="" className="w-8 h-8" /><h3 className="text-xs">Basico/Intermedio</h3></div>
                                    <div className="flex flex-col items-center"><img src={Icono5} alt="" className="w-8 h-8" /><h3 className="text-xs">Intermedio</h3></div>
                                    <div className="flex flex-col items-center"><img src={Icono13} alt="" className="w-8 h-8" /><h3 className="text-xs">Basico/Intermedio</h3></div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-center font-bold mb-2">Herramientas / Entorno de desarrollo</h3>
                                <div className="flex space-x-4 justify-center">
                                    <div className="flex flex-col items-center"><img src={Icono2} alt="" className="w-8 h-8" /></div>
                                    <div className="flex flex-col items-center"><img src={Icono5} alt="" className="w-8 h-8" /></div>
                                    <div className="flex flex-col items-center"><img src={Icono11} alt="" className="w-8 h-8" /></div>
                                    <div className="flex flex-col items-center"><img src={Icono12} alt="" className="w-8 h-8" /></div>
                                    <div className="flex flex-col items-center"><img src={Icono15} alt="" className="w-8 h-8" /></div>
                                    <div className="flex flex-col items-center"><img src={Icono16} alt="" className="w-8 h-8" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Sobremi;