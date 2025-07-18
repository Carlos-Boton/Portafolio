import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacto = ({ iconsContacto, ImgAzul }) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_renbkry",
            "template_5jm2heh",
            form.current,
            "pcK4jplLAEiYuc4ho"
        )

            .then(
                (result) => {
                    console.log(result.text);
                    alert("Mensaje enviado con éxito!");
                    form.current.reset(); // limpia el formulario
                },
                (error) => {
                    console.log(error.text);
                    alert("Hubo un error. Intenta de nuevo.");
                }
            );
    };

    const [Icono1, Icono2, Icono3, Icono4] = iconsContacto;
    return (
        <div className="h-screen relative">
            <section id="contacto" className="min-h-full text-white flex flex-col flex-1 justify-center px-8">
                

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src={ImgAzul}
                        className="mx-auto h-20 w-auto"
                    />
                    <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight">
                        Enviame un correo para saber mas sobre mi
                    </h2>
                </div>

                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm mb-10">
                    <form ref={form} onSubmit={sendEmail} className="space-y-2">
                        <div>
                            <label htmlFor="name" className="block text-sm/6 font-medium">
                                Tu nombre
                            </label>
                            <div className="mt-2">
                                <input
                                    name="text"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="correo" className="block text-sm/6 font-medium">
                                Tu correo
                            </label>
                            <div className="mt-2">
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="contraseña" className="block text-sm/6 font-medium">
                                    Dejame tu mensaje
                                </label>
                            </div>
                            <div className="mt-2">
                                <textarea 
                                name="message"
                                placeholder="Tu mensaje"
                                required
                                className="block w-full resize-none rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600 sm:text-sm/6"></textarea>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>

                <div className=" w-full">
                    <div className="flex items-center justify-center w-full space-x-6">
                        <div className="group relative w-14 h-14 z-10">
                            <div className="absolute bg-slate-400 h-full w-full rounded-full z-20 p-2">
                                <Icono1 className="w-10 h-10" />
                            </div>
                            <div className="absolute transition-all w-14 h-14 bottom-0 group-hover:-bottom-[70px]">
                                <div className="relative h-full w-full">
                                    <div className="absolute transition-all left-0 group-hover:-left-[70px] h-full w-full bg-slate-500 rounded-full group-hover:w-[200px] p-3 group-hover:delay-300 delay-0 overflow-hidden">
                                        <h3 className="opacity-0 scale-95 transition-all duration-300 text-xl text-center
                                        group-hover:opacity-100 group-hover:scale-100 group-hover:delay-[350ms] delay-0 whitespace-nowrap">+52 981 177 15 71</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative w-14 h-14 z-10">
                            <div className="absolute bg-slate-400 h-full w-full rounded-full z-20 p-2">
                                <Icono2 className="w-10 h-10" />
                            </div>
                            <div className="absolute transition-all w-14 h-14 bottom-0 group-hover:-bottom-[70px]">
                                <div className="relative h-full w-full">
                                    <div className="absolute transition-all left-0 group-hover:-left-[80px] h-full w-full bg-slate-500 rounded-full group-hover:w-[220px] p-3 group-hover:delay-300 delay-0 overflow-hidden">
                                        <h3 className="opacity-0 scale-95 transition-all duration-300 text-xl text-center
                                        group-hover:opacity-100 group-hover:scale-100 group-hover:delay-[350ms] delay-0 whitespace-nowrap">Campeche, campeche</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative w-14 h-14 z-10">
                            <div className="absolute bg-slate-400 h-full w-full rounded-full z-20 p-2">
                                <Icono3 className="w-10 h-10" />
                            </div>
                            <div className="absolute transition-all w-14 h-14 bottom-0 group-hover:-bottom-[70px]">
                                <div className="relative h-full w-full">
                                    <div className="absolute transition-all left-0 group-hover:-left-[75px] h-full w-full bg-slate-500 rounded-full group-hover:w-[210px] p-3 group-hover:delay-300 delay-0 overflow-hidden">
                                        <h3 className="opacity-0 scale-95 transition-all duration-300 text-xl text-center
                                        group-hover:opacity-100 group-hover:scale-100 group-hover:delay-[350ms] delay-0 whitespace-nowrap">carldfco@gmail.com</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative w-14 h-14 z-10">
                            <div className="absolute bg-slate-400 h-full w-full rounded-full z-20 p-2">
                                <Icono4 className="w-10 h-10" />
                            </div>
                            <div className="absolute transition-all w-14 h-14 bottom-0 group-hover:-bottom-[70px]">
                                <div className="relative h-full w-full">
                                    <div className="absolute transition-all left-0 group-hover:-left-[20px] h-full w-full bg-slate-500 rounded-full group-hover:w-[100px] p-3 group-hover:delay-300 delay-0 overflow-hidden">
                                        <h3 className="opacity-0 scale-95 transition-all duration-300 text-xl text-center
                                        group-hover:opacity-100 group-hover:scale-100 group-hover:delay-[350ms] delay-0 whitespace-nowrap">Github</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="space-y-10 block sm:hidden w-full">
                    <div className="space-y-6 flex flex-col items-center justify-center w-full">
                        <div className="hover:bg-slate-700 p-2 rounded-full flex items-center overflow-hidden border h-14 w-48">
                            <Icono1 className="w-10 h-10 mr-2" />
                            <h3 className="text-xl">9811771571</h3>
                        </div>
                        <div className="hover:bg-slate-700 p-2 rounded-full flex items-center overflow-hidden border h-14 w-[270px]">
                            <Icono2 className="w-10 h-10 mr-2" />
                            <h3 className="text-xl">Campeche, campeche</h3>
                        </div>
                        <div className="hover:bg-slate-700 p-2 rounded-full flex items-center overflow-hidden border h-14 w-64">
                            <Icono3 className="w-10 h-10 mr-2" />
                            <h3 className="text-xl">carldfco@gmail.com</h3>
                        </div>
                        <div className="hover:bg-slate-700 p-2 rounded-full flex items-center overflow-hidden border h-14 w-36">
                            <Icono4 className="w-10 h-10 mr-2" />
                            <h3 className="text-xl">Github</h3>
                        </div>
                    </div>
                </div> */}
            </section>
        </div>
    )
}
export default Contacto;