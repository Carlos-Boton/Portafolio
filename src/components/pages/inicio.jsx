const Inicio = ({iconosImagenes,logoSeleccionado,setLogoSeleccionado}) => {

    return (
        <div className="h-screen">
            <section id="inicio" className="relative h-full isolate px-6 lg:px-8">
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
                    <div className="flex items-center -mt-16 text-center">
                        <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl max-w-xl">
                            Carlos Daniel Francisco Botón
                        </h1>
                        <img src={iconosImagenes[logoSeleccionado]} alt="" className="w-0 md:w-40 lg:w-56" />
                    </div>
                    <img src={iconosImagenes[logoSeleccionado]} alt="" className="w-32 mt-4 md:hidden" />
                    <div className="flex mt-8 text-pretty text-lg font-medium text-slate-400 sm:text-xl/8">
                        <h3 className="border-r-2 border-r-slate-400 mr-1 px-2 text-right">Ingeniero Informatico</h3>
                        <h3 className="border-l-2 border-l-slate-400 mr-1 px-2">Desarrollador Full Stack</h3>
                    </div>
                    <div className="w-full h-16 mt-10 flex space-x-4 justify-center">
                        {iconosImagenes.map((logo, i) => (
                            i !== logoSeleccionado && (
                                <div key={i}>
                                    <img onClick={() => setLogoSeleccionado(i)} src={logo} alt="" className="w-16 h-16" />
                                </div>
                            )
                        ))}
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
export default Inicio;