import { useState } from "react";
import Navbar from "./navbar";
import Distribuidor from "./pages/distribuidor";

const Contenido = ({imgWhatsapp,IconsPoryectos}) => {

    const [linkNav, setLinkNav] = useState("1")
    const [valorImg, setValorImg] = useState(0);
    const ArrayImg = imgWhatsapp.length;

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
                <Distribuidor imgWhatsapp={imgWhatsapp} IconsPoryectos={IconsPoryectos} toggleCheveron={toggleCheveron} valorImg={valorImg} />
            )
            : linkNav === "2" ? (
                <></>
            )
            : (
                <></>
            )}
        </>
    )
}

export default Contenido;