import "./Header.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useContext } from "react";
import { DataContext } from "./App";

export default function Header() {
  const { search, setSearch } = useContext(DataContext);
  return (
    <div className="header">
      <div className="info">
        <div className="title">
          <RocketLaunchIcon sx={{ fontSize: 37 }}></RocketLaunchIcon>Crypto
          Tracker
        </div>
        <div className="desc">
          Real-time cryptocurrency prices and market data
        </div>
      </div>

      <input
        className="search"
        type="text"
        placeholder="search crypto courncyes..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}
