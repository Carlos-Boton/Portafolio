const Proyectos = () => {
    return (
        <div className="h-screen">

            <section id="proyectos" className="relative h-full isolate">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
                    <div className="h-[540px] sm:h-[600px] py-6 sm:px-12 w-full overflow-x-auto">
                        <div className="flex items-center justify-center h-full min-w-max">

                            <div className="w-80 h-full rounded-2xl mx-6 bg-slate-700 shadow-lg overflow-hidden text-white">
                                <div className="h-[300px] sm:h-[360px] bg-gray-200">
                                    <img
                                        src="https://via.placeholder.com/320x160"
                                        alt="IMG"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 flex flex-col justify-between h-[calc(100%-304px)] sm:h-[calc(100%-360px)]">
                                    <div>
                                        <h2 className="text-xl font-bold mb-2 text-white">Prueba de tarjeta</h2>
                                        <p className="text-sm text-white">
                                            hola como estamos a todos, este es una prueba de texto larga para diferenciarlo entre tamaño de dispositivos, bla bla bla
                                        </p>
                                    </div>
                                    <button className="mt-4 bg-slate-500 text-white text-sm px-4 py-2 rounded hover:bg-slate-600 transition-all">
                                        Github
                                    </button>
                                </div>
                            </div>
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