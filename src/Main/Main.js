import { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import {Navbar} from "../Components/Navbar/Navbar.js";

function Main(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { history } = props;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const results = await axios(
          "https://my-json-server.typicode.com/rasyadakmal/InspiraApp/db"
        );
        setData(results.data.desain)
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  const renderList = () => {
    return (
      <div className="item-container">
        {data.map((item) => {
          return (
            <div class="box" key={item.id}>
              <NavLink
                to={`/Cardsdetails/${item.id}`}
                onClick={() =>
                  history.push(`/Cardsdetails/${item.id}`)
                }
              >
              <img class="img-list" src={item.image} alt="" />
              </NavLink>
              <h2>{item.nama}</h2>
            </div>
          );
        })}
      </div>
    );
  };

  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Unable to Get data, Please try again next time
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar pages="MAIN"></Navbar>
      <div className="render-container">
        {renderError()}
        {isLoading ? (
          <div className="loading-state">Loading...</div>
        ) : (
          <div className="render">{renderList()}</div>
        )}
      </div>
    </div>
  );
}

export default Main;
