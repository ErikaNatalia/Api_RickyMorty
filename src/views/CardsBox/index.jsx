import { useEffect, useState } from 'react';
import {Card} from './components/Card'
import cards from './cards.module.css'

function CardsBox() {

    const [listCharacters, setListCharacters] = useState([]);
    useEffect(() => {  //En este caso, el useEfect hace que se renderice lo que contiene una sola vez
        const consumeApi = async () => {
            fetch("https://rickandmortyapi.com/api/character") // con fetch, traer la info del link establecido
            .then((result) => result.json()) //retorna el texto convertido en json y los pasa a "data" parametro que pede tener cualquier nombre
            .then((data) => {setListCharacters(data.results)}) //pasa el .results del txt json a la lista listCharacters
        };
        consumeApi();

    }, []);  //Es importante el [] array vacio para no generar un bucle

    return(
        <div>
            <div className={cards.contCard}>
                {listCharacters.map((element) => (
                    <Card 
                    key = {element.id}
                    image={element.image} 
                    name={element.name} 
                    species={element.species}
                    status={element.status}/>
                ))}
            </div>
        </div>
    );
}

export {CardsBox}