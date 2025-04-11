import Tec from "../img/Tecnm.jpg";
import Punto from "../img/punto.png"


const China = () =>{
    return(
        <>
            <div className="mt-16 mb-4 flex flex-row gap-x-4">
                {/* Imagen detrás del texto */}
                <img
                    src={Punto}
                    alt="Mancha decorativa"
                    className="w-10 opacity-40 z-5"
                />

                {/* Título encima */}
                <h1 className="text-2xl font-bold text-gray-900 z-10 relative">
                    Proyecto Escolar
                </h1>
            </div>
            <p className="text-xl mb-2"><strong>Descripción general:</strong></p>
            <p className="mb-2">La aplicacion esta diseñada para la gestion de proceso de cerficado en dichas areas, estas correspondian de tres, de mi parte me toco el de extraescolares el cual los alumnos ingresaban de forma voluntaria a dichas clases que tienen por obligacion ingresar para cubrir puntos y haci alcanzar un certificado para el proceso de titulo, la aplicacion tiene la funcion de llevar un control de estos puntos, asi como muchas funciones mas para que el alumno logre alcanzar los puntos para su certificado</p>
            <img src={Tec} alt="Instituto tecnologico de china" className="border-2 border-gray-600 rounded p-2 bg-gray-400 mb-2" />
            <p className="text-xl mb-2"><strong>Tecnologías utilizadas:</strong></p>
            <p><strong>Frontend:</strong></p>
            <p><strong>JavaScript:</strong> Interactividad y lógica del frontend </p>
            <p><strong>Ajax:</strong> Comunicación dinámica con el servidor sin recargar la página</p>
            <p><strong>Botstrap:</strong> Para diseñar una interfaz limpia y con un enfoque en la personalización rápida.</p>
            <p><strong>Backend:</strong> Implementé login, registro y protección de rutas con el sistema de autenticación nativo de Laravel.</p>
            <p><strong> Sistema de Autenticación de Laravel:</strong> Como base de datos en tiempo real para almacenar información sobre productos y ventas.</p>
            <p><strong>Laravel:</strong> Frameword para el manejo de la base de datos y mejor gestion</p>
            <p><strong>Otras herramientas:</strong></p>
            <p className="mb-4"><strong>GitHub:</strong> Para el control de versiones y colaboración en equipo.</p>
            <p><strong>--- Proyecto escolar en mi proceso de tesis ---</strong></p>
        </>
    )
}

export default China;