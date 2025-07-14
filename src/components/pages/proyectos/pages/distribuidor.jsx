
const Distribuidor = () => {

    return(
        <div className=" h-[calc(100vh-4rem)] w-full text-blue-300 overflow-y-auto">
            <h3>Nombre de la aplicacion: TIGER</h3>
            <h3>Descripcion: Aplicacion web para gestionar ventas, registro de pedidos, organizar entregas y llevar un historial de clientes en la aplicacion local</h3>
            <h3>Tecnologias usadas:</h3>
            <ul>
                <li>Frontend: React + TailwindCss</li>
                <li>Backend: Firebase</li>
                <li>Base de datos: Firebase Realtime/Firestore</li>
                <li>Otros: Firebase Authentication,Github,React router,Docker</li>
            </ul>
            <h3>Funciones Principales</h3>
            <ul>
                <li>Inicio de sesion</li>
                <ul>
                    <li>Solo el usuario puede acceder</li>
                    <li>Firebase Authentication solo acepta al usuario correcto</li>
                </ul>
                <li>Gestion de Pedidos</li>
                <ul>
                    <li>Crear nuevos pedidos locales o para viajes</li>
                    <li>Almacena los pedidos en el localstore para uso sin internet de los pedidos para los viajes</li>
                    <li>Agrupa los pedidos por viaje para la capacidad del carrito</li>
                </ul>
                <li>Productos y Clientes</li>
                <ul>
                    <li>Almacena los clientes y productos nuevos a la base de datos de firebase</li>
                    <li>Desactivacion de producto o clientes</li>
                    <li>Edicion de Productos o Clientes</li>
                </ul>
                <li></li>
            </ul>
        </div>
    )
}

export default Distribuidor;