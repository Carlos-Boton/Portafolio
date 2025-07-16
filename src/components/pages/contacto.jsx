const Contacto = ({iconsContacto}) => {
    const [Icono1,Icono2,Icono3,Icono4] = iconsContacto;
    return(
        <div className="h-screen relative">
            <section id="contacto" className="h-full text-white flex flex-col items-center justify-center">
                <div className="space-y-10 hidden sm:block w-full">
                    <div className="space-y-6 flex flex-col items-center justify-center w-full">
                        <div className="group transition-all hover:bg-slate-700 p-2 rounded-full flex items-center overflow-hidden bg-slate-500 w-14 h-14 hover:w-48">
                            <Icono1 className="w-10 h-10 group-hover:mr-2"/>
                            <h3 className="transition-all hidden group-hover:block text-xl">9811771571</h3>
                        </div>
                        <div className="group transition-all hover:bg-slate-700 p-2 rounded-full flex items-center overflow-hidden bg-slate-500 w-14 h-14 hover:w-[270px] whitespace-nowrap">
                            <Icono2 className="w-10 h-10 group-hover:mr-2"/>
                            <h3 className="transition-all hidden group-hover:block text-xl">Campeche, campeche</h3>
                        </div>
                        <div className="group transition-all hover:bg-slate-700 p-2 rounded-full flex items-center overflow-hidden bg-slate-500 w-14 h-14 hover:w-64">
                            <Icono3 className="w-10 h-10 group-hover:mr-2"/>
                            <h3 className="transition-all hidden group-hover:block text-xl">carldfco@gmail.com</h3>
                        </div>
                        <div className="group transition-all hover:bg-slate-700 p-2 rounded-full flex items-center overflow-hidden bg-slate-500 w-14 h-14 hover:w-36">
                            <Icono4 className="w-10 h-10 group-hover:mr-2"/>
                            <h3 className="transition-all hidden group-hover:block text-xl">Github</h3>
                        </div>
                    </div>
                </div>
                <div className="space-y-10 block sm:hidden w-full">
                    <div className="space-y-6 flex flex-col items-center justify-center w-full">
                        <div className="hover:bg-slate-700 p-2 rounded-full flex items-center overflow-hidden border h-14 w-48">
                            <Icono1 className="w-10 h-10 mr-2"/>
                            <h3 className="text-xl">9811771571</h3>
                        </div>
                        <div className="hover:bg-slate-700 p-2 rounded-full flex items-center overflow-hidden border h-14 w-[270px]">
                            <Icono2 className="w-10 h-10 mr-2"/>
                            <h3 className="text-xl">Campeche, campeche</h3>
                        </div>
                        <div className="hover:bg-slate-700 p-2 rounded-full flex items-center overflow-hidden border h-14 w-64">
                            <Icono3 className="w-10 h-10 mr-2"/>
                            <h3 className="text-xl">carldfco@gmail.com</h3>
                        </div>
                        <div className="hover:bg-slate-700 p-2 rounded-full flex items-center overflow-hidden border h-14 w-36">
                            <Icono4 className="w-10 h-10 mr-2"/>
                            <h3 className="text-xl">Github</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contacto;