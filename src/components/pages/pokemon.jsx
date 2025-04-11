import { useEffect, useState } from "react";
import Punto from "../img/punto.png"

const Pokemon = () => {

    const [pokemon, setPokemon] = useState();
    const [id, setid] = useState(1);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setPokemon(data);
        })
    })

    const siguienteCard = () => {
        setid(id + 1);
    };

    const anteriorCard = () => {
        id > 1 && setid(id - 1);
    };

    return(
        <div>
            <div className="mt-16 mb-4 flex flex-row gap-x-4">
                {/* Imagen detrás del texto */}
                <img
                    src={Punto}
                    alt="Mancha decorativa"
                    className="w-10 opacity-40 z-5"
                />

                {/* Título encima */}
                <h1 className="text-2xl font-bold text-gray-900 z-10 relative">
                    Consumiendo Apis
                </h1>
            </div>
            <p className="text-xl mb-2"><strong>Descripción general:</strong></p>
            <p className="mb-8">Aprendiendo a consumir apis para experiencia en el area</p>
            <div className="flex flex-col justify-center items-center"> {/* pt-[60px] para ajustar al navbar */}
                {/* Título principal centrado arriba */}
        
                {/* Card */}
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
                    {/* Imagen en la tarjeta */}
                    {
                        pokemon &&
                        <div>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name}
                            className="w-full h-48 object-cover rounded-t-lg mb-4"/>
                            <h2 className="text-xl font-semibold mb-4 text-center">{pokemon.name}</h2>
                        </div>
                    }
                    <p className="text-gray-700 mb-6 text-center">
                        Tarjeta para visualizar a los pokemons
                    </p>
            
                    <div className="flex justify-between">
                        <button 
                        onClick={anteriorCard} 
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                        Anterior
                        </button>
                        <button 
                        onClick={siguienteCard} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                        Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Pokemon;