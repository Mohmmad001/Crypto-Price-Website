import "./CryptoDetailsHeader.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";

export default function CryptoDetailsHeader() {
  return (
    <div className="header">
      <div className="info">
        <div className="title">
          <RocketLaunchIcon sx={{ fontSize: 37 }}></RocketLaunchIcon>Crypto
          Tracker
        </div>
      </div>

      <Link to="/">
        <button className="back-btn">
          <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
          <span>Back to list</span>
        </button>
      </Link>
    </div>
  );
}
