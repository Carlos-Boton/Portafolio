const ModalProyectos = ({mostrarModal,setMostrarModal,proyectos,valorModal,XMarkIcon,ChevronLeftIcon,ChevronRightIcon,toggleImagenModal,valorImagenModal,GitHub,GlobeAltIcon}) => {
    return(
        <div className={`fixed h-screen bg-slate-900 overflow-hidden right-0 z-50 transition-all duration-200 ${mostrarModal ? 'group w-full md:w-[700px]' : 'w-0'}`}>
            <div className="w-full h-12">
                <div
                onClick={() => setMostrarModal(false)}
                className="w-12 h-12">
                    <XMarkIcon className='w-full h-full text-white'/>
                </div>
            </div>
            <div className={`transition-all  ${mostrarModal ? 'duration-1000 mt-0 opacity-100' : '-mt-10 opacity-0'}`} >
                <div className="w-full h-[4rem] whitespace-nowrap">
                    <h3 className="text-center text-4xl font-bold text-white">{proyectos[valorModal].nombre}</h3>
                </div>
                <div className="h-[calc(100vh-15rem)] overflow-y-auto w-full px-8 text-justify py-8">
                    <div className="h-[20rem] sm:h-[30rem] relative flex items-center justify-center mb-8">
                        <div className="absolute h-full w-12 left-0 flex items-center" >
                            <div
                            onClick={() => toggleImagenModal(0)}
                            className="h-12 w-12 hover:bg-slate-700 rounded-full">
                                <ChevronLeftIcon className="h-full w-full text-white"/>
                            </div>
                        </div>
                        <div className="absolute h-full w-12 right-0 flex items-center" >
                            <div
                            onClick={() => toggleImagenModal(1)}
                            className="h-12 w-12 hover:bg-slate-700 rounded-full">
                                <ChevronRightIcon className="h-full w-full text-white"/>
                            </div>
                        </div>
                        <img src={proyectos[valorModal].imagen[valorImagenModal]} alt="" className="h-full" />
                    </div>
                    <p className="text-white">{proyectos[valorModal].descripcion} </p>
                </div>
                <div className="h-[8rem] flex justify-center items-start px-[4rem] space-x-8">
                    <a href={proyectos[valorModal].github}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-2 bg-slate-600 text-white text-sm p-2 rounded hover:bg-slate-700 transition-all text-center">
                        <img src={GitHub} alt="" className="w-10 h-10" />
                    </a>
                    {proyectos[valorModal].link && (
                            <a href={proyectos[valorModal].link}
                            target="_blank" rel="noopener noreferrer"
                            className="mt-2 bg-slate-600 text-white text-sm p-2 rounded hover:bg-slate-700 transition-all text-center">
                                <GlobeAltIcon className="w-10 h-10" />
                            </a>

                    )
                    }
                </div>
            </div>
        </div>
    )
}
export default ModalProyectos;