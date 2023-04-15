'use client'
import React, { useEffect } from 'react'
import PokeCard from './PokeCard';
import { getPokemonData } from '@/app/utils/datafetch';


  
export default function Pokepage() {

    const [page, setPage] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            const response = await getPokemonData(page);
            setPokemons([...pokemons, ...response]);
            
            // setCurrentId(currentId + numsPerPage);
            setLoading(false);
        };
        fetchPokemons();
    }, [page]);

    const nextPage = () => {
        setPage(page + 1);
    }

    console.log(pokemons);

    if (loading) {
        return <h1>Loading...</h1>;}

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
    {pokemons.map((pokemon, index) => {
      return <PokeCard key={pokemon.id} pokemon={pokemon} gen={1} isLast={index === pokemons.length-1} nextPage={nextPage} />;
    })}
  </div>
  )
}
