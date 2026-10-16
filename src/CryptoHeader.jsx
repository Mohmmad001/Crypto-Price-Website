import "./CryptoHeader.css";
import { useContext } from "react";
import { DataContext } from "./App";

export default function CryptoHeader() {
  const { buttonState, setButtonState, setOrder } = useContext(DataContext);
  return (
    <div className="cryptop-header">
      <div className="sorting">
        <span>Sort by: </span>
        <select name="" id="" onChange={(e) => setOrder(e.target.value)}>
          <option value="rank">Rank</option>
          <option value="name">Name</option>
          <option value="priceLow">Pirce (Low to High) </option>
          <option value="priceHigh">Pirce (High to Low)</option>
          <option value="24hChange">24H Change</option>
          <option value="marketCap">Market Cap</option>
        </select>
      </div>
      <div className="display-option">
        <button
          onClick={() => {
            setButtonState("list");
          }}
          className={`${buttonState == "list" ? "active" : ""}`}
        >
          list
        </button>
        <button
          onClick={() => {
            setButtonState("grid");
          }}
          className={`${buttonState == "grid" ? "active" : ""}`}
        >
          grid
        </button>
      </div>
    </div>
  );
}
