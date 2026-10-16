import "./CryptoList.css";
import MovingIcon from "@mui/icons-material/Moving";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "./App";
import { Link } from "react-router-dom";

export default function CryptoList() {
  const [list, setList] = useState([]);
  const { buttonState, order, search } = useContext(DataContext);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1",
      {
        headers: {
          "x-cg-demo-api-key": "",
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const temp_list = list.filter((obj) => {
    return obj.name.toLowerCase().includes(search.toLowerCase());
  });

  if (order == "name") {
    temp_list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (order == "priceLow") {
    temp_list.sort((a, b) => a.current_price - b.current_price);
  } else if (order == "priceHigh") {
    temp_list.sort((a, b) => b.current_price - a.current_price);
  } else if (order == "24hChange") {
    temp_list.sort(
      (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h,
    );
  } else if (order == "marketCap") {
    temp_list.sort((a, b) => b.market_cap - a.market_cap);
  } else if (order == "rank") {
    temp_list.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
  }

  return (
    <div className={`crypto-list ${buttonState}`}>
      {temp_list.map((obj) => {
        let high = obj.ath_change_percentage > 0;

        return (
          <Link to={`/details/${obj.id}`} key={obj.id} className="crypto-link">
            <div className="div">
              <div className="crypto-info">
                <div className="img">
                  <img src={obj.image} alt={obj.name} />
                </div>

                <div className="crypto-name">
                  <div className="title">{obj.name}</div>
                  <div className="short-title">{obj.symbol.toUpperCase()}</div>
                  <div className="rank">#{obj.market_cap_rank}</div>
                </div>
              </div>

              <div className="price">
                ${obj.current_price?.toLocaleString()}
              </div>

              <div className={`stock-state ${high ? "high" : "low"}`}>
                {high ? (
                  <MovingIcon></MovingIcon>
                ) : (
                  <TrendingDownIcon></TrendingDownIcon>
                )}
                {obj.ath_change_percentage?.toFixed(2)}%
              </div>

              <hr />

              <div className="market-info">
                <div>
                  <span>Market cap</span>
                  <br />$
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                    maximumFractionDigits: 1,
                  }).format(obj.market_cap)}
                </div>

                <div>
                  <span>Volume</span>
                  <br />$
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                    maximumFractionDigits: 1,
                  }).format(obj.total_volume)}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
