import Distri from "../img/distribuidor.png";

const Distribuidor = () => {

    return(
        <>
        <h3 className="text-2xl font-bold mb-3 mt-6">Distribuidor de Productos</h3>
        <p className="text-xl mb-2"><strong>Descripción general:</strong></p>
        <p className="mb-2">Esta aplicación está diseñada para facilitar la gestión de productos de un distribuidor, permitiendo a los usuarios consultar, agregar, editar y eliminar productos de un catálogo de manera eficiente. La app está pensada para facilitar el control de inventarios y mejorar la eficiencia en la gestión de ventas.</p>
        <img src={Distri} alt="distribuidor" className="border-2 border-gray-600 rounded mb-2"/>
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
        <p><strong>GitHub:</strong> Para el control de versiones y colaboración en equipo.</p>
        </>
    )
}

export default Distribuidor;