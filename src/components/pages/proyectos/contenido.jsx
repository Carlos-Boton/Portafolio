import { useState } from "react";
import Navbar from "./navbar";
import Distribuidor from "./pages/distribuidor";

const Contenido = () => {

    const [linkNav, setLinkNav] = useState("1")

    return(
        <>
            <Navbar linkNav={linkNav} setLinkNav={setLinkNav} />
            {linkNav === "1" ? (
                <Distribuidor/>
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