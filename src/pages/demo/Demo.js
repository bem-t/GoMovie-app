import React, { useState, useEffect } from "react";
import axios from "axios";
import './Demo.css'

//https://api.themoviedb.org/3/person/5696d98292514154c9000291?api_key=ec49a9176aaaa92453852d5fe8b2493d&language=en-US

const Demo = () => {
  const URL =
    "https://api.themoviedb.org/3/person/popular?api_key=ec49a9176aaaa92453852d5fe8b2493d&language=en-US&page=";
  const imgHeader = "https://image.tmdb.org/t/p/w185";

  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2)

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


  const handlePage = () =>{
    setPage(page+1)
  }


  return (
    <div>
        <div className="container">
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
      <button className="searchButton" onClick={handleSearch}>SEARCH</button>
      </div>
      {/* <button  onClick={handlePage}>next page</button> */}
      <div className="App">
        <div className="movies">
          {data.map((movieStar) => {
            return (
              <div className="movie">
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
    </div>
  );
};

export default Demo;
