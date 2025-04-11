import Distri from "../img/distribuidor.png";
import Punto from "../img/punto.png"

const Distribuidor = () => {

    return(
        <>
            <div className="mt-8 mb-4 flex flex-row gap-x-4">
                {/* Imagen detrás del texto */}
                <img
                    src={Punto}
                    alt="Mancha decorativa"
                    className="w-10 opacity-40 z-5"
                />

                {/* Título encima */}
                <h1 className="text-2xl font-bold text-gray-900 z-10 relative">
                    Distribuidor de Productos
                </h1>
            </div>
            <p className="text-xl mb-2"><strong>Descripción general:</strong></p>
            <p className="mb-2">Esta aplicación está diseñada para facilitar la gestión de productos de un distribuidor, permitiendo a los usuarios consultar, agregar, editar y eliminar productos de un catálogo de manera eficiente. La app está pensada para facilitar el control de inventarios y mejorar la eficiencia en la gestión de ventas.</p>
            <img src={Distri} alt="distribuidor" className="border-2 border-gray-600 rounded p-2 bg-gray-400 mb-2"/>
            <p className="text-xl mb-2"><strong>Tecnologías utilizadas:</strong></p>
            <p><strong>Frontend:</strong></p>
            <p><strong>React:</strong> Para la creación de interfaces interactivas y reactivas.</p>
            <p><strong>React Router:</strong> Para gestionar la navegación entre páginas de manera eficiente.</p>
            <p><strong>Tailwind CSS:</strong> Para diseñar una interfaz limpia y moderna con un enfoque en la personalización rápida.</p>
            <p><strong>Backend:</strong></p>
            <p><strong>Firebase:</strong> Como base de datos en tiempo real para almacenar información sobre productos y ventas.</p>
            <p><strong>Firebase Authentication:</strong> Para el manejo de usuarios y autenticación segura.</p>
            <p><strong>Otras herramientas:</strong></p>
            <p><strong>Docker:</strong> Para la creación de entornos de desarrollo consistentes.</p>
            <p className="mb-4"><strong>GitHub:</strong> Para el control de versiones y colaboración en equipo.</p>
            <p><strong>--- Proyecto Individual para un distribuidor ---</strong></p>
        </>
    )
}

export default Distribuidor;