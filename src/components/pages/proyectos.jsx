import { useEffect, useState } from "react";

const Proyectos = ({proyectos,toggleModal}) => {

    const [visible, setVisible] = useState(proyectos.map(() => true));
    const [indices, setIndices] = useState(proyectos.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            // Primero, hacemos invisible
            setVisible(prev => prev.map(() => false));

            setTimeout(() => {
                // Luego de 300ms cambiamos la imagen
                setIndices(prevIndices =>
                    prevIndices.map((index, i) =>
                        (index + 1) % proyectos[i].imagen.length
                    )
                );
                // Y la volvemos visible
                setVisible(prev => prev.map(() => true));
            }, 300); // Debe coincidir con la duración de la transición
        }, 4000);

        return () => clearInterval(interval);
    }, [proyectos]);
    
    return (
        <div className="h-screen">

            <section id="proyectos" className="relative h-full isolate">
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
                
                <div className="h-full flex flex-col items-center justify-center">
                    <h3 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl max-w-xl mb-10">Proyectos</h3>
                    <div  className="h-[540px] sm:h-[600px] py-6 sm:px-12 w-full overflow-x-auto">
                        <div  className="flex items-center justify-center h-full min-w-max">

                            {proyectos.map((proy, i) => (
                                <div key={i} className="w-80 h-full rounded-2xl mx-6 bg-slate-700 shadow-lg text-white">
                                    <div className="h-[300px] sm:h-[350px] bg-slate-900 rounded-t-2xl">
                                        <img
                                            src={proy.imagen[indices[i]]}
                                            alt="IMG"
                                            className={`w-full h-full rounded-t-2xl object-cover transition-opacity duration-500 ${visible[i] ? 'opacity-100' : 'opacity-0'}`}
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col justify-between h-[calc(100%-304px)] sm:h-[calc(100%-360px)]">
                                        <div className="">
                                            <h2 className="text-xl font-bold mb-2 text-white">{proy.nombre}</h2>
                                            <div className="flex flex-wrap gap-2 min-w-full p-1">
                                                {proy.iconos.map((icono, i) => (
                                                    <div key={i}>
                                                    <img src={icono} alt="" className="w-8" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <button
                                        onClick={() => toggleModal(i)}
                                        className="mt-2 bg-slate-500 text-white text-sm px-4 py-2 rounded hover:bg-slate-600 transition-all">
                                            Mas Información
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </section>
        </div>
    )
}
export default Proyectos;