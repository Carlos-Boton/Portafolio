import { useState } from "react";
import Navbar from "./navbar";
import Diseño from "./pages/diseño";
import Distribuidor from "./pages/distribuidor";

const Contenido = ({imgWhatsapp,IconsPoryectos}) => {

    const [linkNav, setLinkNav] = useState("1")
    const [valorImg, setValorImg] = useState(0);
    const ArrayTextWhatsapp = [
        {funcion: "Interfaz responsiva tipo WhatsApp (lista de chats, ventana de conversación)", img:[imgWhatsapp[0]]},
        {funcion:"Componentes reusables (barra lateral, encabezado, burbujas de mensaje)",img:[imgWhatsapp[2],imgWhatsapp[3],imgWhatsapp[4],imgWhatsapp[5]]},
        {funcion:"Diseño inspirado en UI real, pero 100% construido desde cero",img:[imgWhatsapp[1]]},
        {funcion:"Uso de Tailwind CSS para estructurar el diseño",img:[imgWhatsapp[8],imgWhatsapp[9]]},
        {funcion:"Simulación de estados visuales",img:[imgWhatsapp[6],imgWhatsapp[7]]},
    ];
    const ArrayImg = ArrayTextWhatsapp.length;

    const toggleCheveron = (i) => {
        if(i === 0) {
            if (valorImg === ArrayImg-1 ) return;
            setValorImg(valorImg + 1)
        }
        if(i === 1) {
            if(valorImg === 0) return;
            setValorImg(valorImg - 1)
        }
    }

    return(
        <>
            <Navbar linkNav={linkNav} setLinkNav={setLinkNav} />
            {linkNav === "1" ? (
                <Diseño imgWhatsapp={imgWhatsapp} IconsPoryectos={IconsPoryectos} toggleCheveron={toggleCheveron} valorImg={valorImg} ArrayTextWhatsapp={ArrayTextWhatsapp} ArrayImg={ArrayImg} />
            )
            : linkNav === "2" ? (
                <Distribuidor/>
            )
            : (
                <></>
            )}
        </>
    )
}

export default Contenido;