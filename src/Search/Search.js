import { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css"
import { NavLink } from "react-router-dom";
import {Navbar} from "../Components/Navbar/Navbar.js";
import {Hero} from "../Components/Hero/Hero.js";
import {Card} from "../Components/Card/Card.js";

const Search = () => {
  const [data, setData] = useState([]);
  const [nama, setName] = useState("");
  const [isLoading] = useState(false);
  const [isError] = useState(false);

  const doSearch = (e) => {
    axios
      .get("https://63669e6ff5f549f052c9e8a9.mockapi.io/api/v1/profile?nama=" + nama)
      .then((results) => {
        setData(results.data);
      });
  };
  useEffect(() => {
    doSearch();
  }, [nama]);

  const renderList = () => {
    return (
      <main>
        <div class="searchin">
          <img id="search" src="./searchlogo.png"/> 
          <input
            className="search-input"
            type="text"
            placeholder="Cari Design"
            value={nama}
            onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="item-container1">
            {data.map((item, index) => {
                return (
                  <Card key={item.id} id={item.id} image={item.image} nama={item.nama} fetchedData={doSearch}/>
                );
          })}
        </div>
      </main>
    );
  };

  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert">
          Unable to Get data, Please try again next time
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar pages="SEARCH"/>
      <Hero
        title="Cari Referensi"
        caption="Silahkan cari referensi berdasarkan kata kunci"
      />
      <div className="search-container">
        {renderError()}
        {isLoading ? (
          <div className="search-loading">Loading...</div>
        ) : (
          <div className="search-result">{renderList()}</div>
        )}
      </div>
    </div>
  );
};

export default Search;
