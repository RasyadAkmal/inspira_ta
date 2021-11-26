import { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css"
import { NavLink } from "react-router-dom";

const Search = () => {
  const [data, setData] = useState([]);
  const [nama, setName] = useState("");
  const [isLoading] = useState(false);
  const [isError] = useState(false);

  useEffect(() => {
    const doSearch = (e) => {
      axios
        .get("https://my-json-server.typicode.com/rasyadakmal/InspiraApp/desain?nama=" + nama)
        .then((results) => {
          setData(results.data);
        });
    };
    doSearch();
  }, [nama]);
  console.log(data);

  const renderList = () => {
    return (
      <main>
        <input
          className="search-input"
          type="text"
          placeholder="Cari Design"
          value={nama}
          onChange={(e) => setName(e.target.value)}
            />
            <div className="item-container1">
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <NavLink to={`/Cardsdetails/${item.id}`}>
                                <img className="imgsearch" src={item.image}/>
                                <div className="search-name">
                                  <p>{item.nama}</p>
                                </div>
                            </NavLink>
                        </div>
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
    <div className="search-container">
      {renderError()}
      <img id="search" src="./searchlogo.png"/>
      {isLoading ? (
        <div className="search-loading">Loading...</div>
      ) : (
        <div className="search-result">{renderList()}</div>
      )}
    </div>
  );
};

export default Search;