const ModalProyectos = ({mostrarModal,setMostrarModal,proyectos,valorModal,XMarkIcon}) => {
    return(
        <div className={`fixed h-screen bg-slate-900 right-0 z-50 transition-all duration-500 ${mostrarModal ? ('w-[600px]') : ('w-0')}`}>
            <div className="w-full h-12">
                <div
                onClick={() => setMostrarModal(false)}
                className="w-12 h-12">
                    <XMarkIcon className='w-full h-full text-white'/>
                </div>
            </div>
            <div className="w-full h-[4rem]">
                <h3 className="text-center text-4xl font-bold text-white">{proyectos[valorModal].nombre}</h3>
            </div>
            <div className="h-[calc(100vh-15rem)] w-full"></div>
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
    )
}
export default ModalProyectos;