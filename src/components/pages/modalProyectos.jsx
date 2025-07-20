const ModalProyectos = ({mostrarModal,setMostrarModal,proyectos,valorModal,XMarkIcon,ChevronLeftIcon,ChevronRightIcon,toggleImagenModal,valorImagenModal}) => {
    return(
        <div className={`fixed h-screen bg-slate-900 overflow-hidden right-0 z-50 transition-all duration-200 ${mostrarModal ? 'group w-full sm:w-[600px]' : 'w-0'}`}>
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
                <div className="h-[calc(100vh-15rem)] w-full px-8 text-justify">
                    <div className="h-[30rem] relative flex items-center justify-center mb-8">
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
                <div className="h-[8rem] flex flex-col justify-center px-[4rem]">
                    <a href="http://"
                    className="mt-2 bg-slate-600 text-white text-sm px-4 py-2 rounded hover:bg-slate-700 transition-all text-center">
                        Documentacion Github
                    </a>
                    <a href="http://"
                    className="mt-2 bg-slate-600 text-white text-sm px-4 py-2 rounded hover:bg-slate-700 transition-all text-center">
                        Link del proyecto
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ModalProyectos;