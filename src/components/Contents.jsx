import React, { useEffect, useState } from "react";

import { Cards } from "./ui/Cards";
import axios from "axios";
let url = `https://pokeapi.co/api/v2/pokemon`;
export const Contents = () => {
  const [name, setName] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  const [disableBack, setDisableBack] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  const getData = async (page_no, offset, limit) => {
    try {
      const response = await axios.get(url + `?offset=${offset}&limit=${10}`);
      console.log(response.data.results);
      setPokemonData(response.data.results);
      setCurrentPage(page_no);
      setDisableBack(page_no === 1);
      setDisableNext(page_no === 2);
      console.log(currentPage);
    } catch (error) {
      console.error("Error in fetching pokemon data:", error);
    }
  };

  useEffect(() => {
    getData(1, 10, 10);
  }, []);
  const handleBack = () => {
    if (currentPage > 1) {
      getData(currentPage - 1, 10, 10);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      getData(currentPage + 1, 20, 10);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(name);
    if (name === "") {
      getData(1, 10, 10);
    }
    const new_data = pokemonData.filter((items) => items.name == name);
    setPokemonData(new_data);
  };

  return (
    <main className="md:mx-10 mx-2 p-4">
      <div className=" border-sky-100 border-2 p-1 rounded-2xl">
        <form className="flex items-center">
          <input
            className=" focus:border-none text-xl w-full p-2"
            placeholder="Search Pokemon"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            className="button button:hover text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex md:flex-row  flex-col flex-1 flex-wrap gap-4 md:p-2 md:my-8 my-10">
        {pokemonData ? (
          pokemonData.map((item, index) => (
            <Cards name={item.name} detailUrl={item.url} key={index} />
          ))
        ) : (
          <>Loading...</>
        )}
      </div>
      <div className="join grid grid-cols-2 w-1/2 md:w-1/3 mx-auto mt-4 gap-4">
        {" "}
        <button
          className={disableBack ? "bg-grey-400" : "bg-grey-200"}
          disabled={disableBack}
          onClick={handleBack}
        >
          Previous page
        </button>
        <button
          className={disableNext ? "bg-grey-300" : "bg-green-300"}
          disabled={disableNext}
          onClick={handleNext}
        >
          Next page
        </button>
      </div>
    </main>
  );
};
