import {ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/outline';
import { useLocation  } from "react-router-dom";
import Sidebar from "./sidebar";
import Contenido from "../pages/proyectos/contenido";
import Sobremi from "../pages/sobremi/sobremi";
import Contacto from "../pages/contacto/contacto";
import Img1 from "../img/whatsapp/1.webp"
import Img2 from "../img/whatsapp/2.webp"
import Img3 from "../img/whatsapp/3.webp"
import Img4 from "../img/whatsapp/4.webp"
import Img5 from "../img/whatsapp/5.webp"
import Img6 from "../img/whatsapp/6.webp"
import Img7 from "../img/whatsapp/7.webp"
import Img8 from "../img/whatsapp/8.webp"
import Img9 from "../img/whatsapp/9.webp"
import Img10 from "../img/whatsapp/10.webp"

const Interfaz = () => {
    const imgWhatsapp = [Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10]
    const IconsPoryectos = [ChevronLeftIcon,ChevronRightIcon]
    const location = useLocation();
    const path = location.pathname;
    let Content = null;

    if (path.startsWith("/proyectos")) {
        Content = <Contenido imgWhatsapp={imgWhatsapp} IconsPoryectos={IconsPoryectos} />
    } else if (path.startsWith("/sobremi")) {
        Content = <Sobremi/>;
    } else if (path.startsWith("/contacto")) {
        Content = <Contacto/>;
    }

    return (
        <div className="bg-slate-950 flex min-w-[950px]">
            <Sidebar/>
            <div className="flex-1 h-screen">{Content}</div>
        </div>
    )
}
export default Interfaz;