import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { setSelectedPokemon } from "../store/pokemonSlice";

const PokemonList = () => {
    const fetchPokemonList = () =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
        .then(result => result.json())
        .then(list => {
            console.log('----> Result: ',list);
            list?.results.forEach((pokemon:any)=>{
                fetchPokemonDetail(pokemon?.url);
            })
        })
    }

    const fetchPokemonDetail = (url:string) => {
        fetch(url)
        .then((res)=> res.json())
        .then((pokemon: any)=>{
            console.log(`Pokemon detail: ${pokemon}`);
            setList( (_list:any[]) => [..._list, pokemon]);
        })
    }

    const [list, setList] = useState<any[]>([]);
    useEffect(()=> {
        fetchPokemonList();
    }, [])

    useEffect(()=> {
        console.log('>>>>: ',list);
    }, [list])

    const navigate = useNavigate();

    const dispatch = useDispatch();

    function showDetails(pokemon: any): void {
        console.log('>>>>: ',pokemon?.id);
        // 
        dispatch(setSelectedPokemon(pokemon));
        navigate('/details/'+ pokemon?.id);
    }

    const renderList = () => {
        return list.length > 0 ? (
            <div className="columns is-multiline is-centered">
                { list.map( (pokemon, index) => (
                        <div onClick={e => showDetails(pokemon)} className="column is-one-quarter box" key={index}>
                            
                            <Link to={"/details/"+pokemon?.id}>
                                <img src={pokemon?.sprites?.other?.dream_world?.front_default}></img>
                            </Link>
                            <h5 className="title">{pokemon.name}</h5>
                        </div>
                    ))
                }
            </div>
            ) : (<h3 className="title is-h3"> Loading ...</h3>)
    }

    return  ( <div className="list-container">
                {renderList()}
            </div>)

}
export default PokemonList


