import { useLocation,useNavigate  } from "react-router-dom";
import Sidebar from "./sidebar";
import Contenido from "../pages/proyectos/contenido";
import Sobremi from "../pages/sobremi/sobremi";
import Contacto from "../pages/contacto/contacto";

const Interfaz = () => {
    const location = useLocation();
    const path = location.pathname;
    let Content = null;

    if (path.startsWith("/proyectos")) {
        Content = <Contenido/>
    } else if (path.startsWith("/sobremi")) {
        Content = <Sobremi/>;
    } else if (path.startsWith("/contacto")) {
        Content = <Contacto/>;
    }

    return (
        <div className="bg-slate-950 flex">
            <Sidebar/>
            <div className="flex-1 h-screen">{Content}</div>
        </div>
    )
}
export default Interfaz;