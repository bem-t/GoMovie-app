import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Demo.css";

const Demo = () => {
  const URL =
    "https://api.themoviedb.org/3/person/popular?api_key=ec49a9176aaaa92453852d5fe8b2493d&language=en-US&page=";
  const imgHeader = "https://image.tmdb.org/t/p/w185";

  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(`${URL}${page}`);
      setData(
        data.results.filter((e) =>
          e.name.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
    handleSearch();
  };

  const handlePrevPage = () => {
    setPage(page - 1);
    handleSearch();
  };


  return (
    <>
      <div className="container">
        <button onClick={handlePrevPage}> {"<"} </button>
        <input
          className="searchInput"
          type="text"
          placeholder="search..."
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          autoFocus
        />
        <button className="searchButton" onClick={handleSearch}>
          SEARCH
        </button>
        <button onClick={handleNextPage}> {">"} </button>
      </div>

      <div className="App">
        <div className="movies">
          {data.map((movieStar) => {
            return (
              <div className="movie" key={movieStar.id} >
                <img
                  src={`${imgHeader}${movieStar.profile_path}`}
                  alt={movieStar}
                />
                <div>{movieStar.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Demo;
