import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
let url = `https://pokeapi.co/api/v2/pokemon`;
export const View = () => {
  const { name } = useParams();
  const [pokemon, setPokemonData] = useState();
  const [moves, setMoves] = useState();
  const getDetails = async () => {
    try {
      const details = await axios.get(url + `/${name}`);
      setPokemonData(details.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div className="flex justify-center flex-col items-center shadow-md m-10">
      <p className="text-2xl uppercase font-semibold"> {name}</p>
      <ul>
        <li>Base Expericence : {pokemon?.base_experience}</li>
        <li>Height : {pokemon?.height}</li>
        <li>Weight : {pokemon?.weight}</li>
        <li> Moves: {pokemon?.moves[0].move.name}</li>
      </ul>
    </div>
  );
};
