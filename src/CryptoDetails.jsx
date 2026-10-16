import "./CryptoDetails.css";
import CryptoDetailsHeader from "./CryptoDetailsHeader";
import MovingIcon from "@mui/icons-material/Moving";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CryptoDetails() {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);
  const [chartData, setChartData] = useState([]);

  function formatNumber(number) {
    return number?.toLocaleString("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    });
  }

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
      headers: {
        "x-cg-demo-api-key": "",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCrypto(data);
      })
      .catch((error) => console.log(error));

    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`,
      {
        headers: {
          "x-cg-demo-api-key": "CG-gJnan44oxMa2HkhEt2gsuMA7",
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.prices.map((price) => ({
          time: new Date(price[0]).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          price: price[1].toFixed(2),
        }));

        setChartData(formattedData);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!crypto) return <p>Loading...</p>;

  return (
    <>
      <CryptoDetailsHeader />

      <div className="crypto-details">
        <div className="name-info">
          <div className="first">
            <div>
              <img src={crypto.image?.small} alt={crypto.name} />
            </div>

            <div className="names">
              <div className="title">{crypto.name}</div>
              <div className="short-title">{crypto.symbol?.toUpperCase()}</div>
            </div>
          </div>

          <div className="rank">Rank #{crypto.market_cap_rank}</div>
        </div>

        <div className="market-details">
          <div className="price">${crypto.market_data?.current_price?.usd}</div>

          <div
            className={`stock-state ${
              (crypto.market_data?.ath_change_percentage?.usd ?? 0) >= 0
                ? "high"
                : "low"
            }`}
          >
            {(crypto.market_data?.ath_change_percentage?.usd ?? 0) >= 0 ? (
              <MovingIcon />
            ) : (
              <TrendingDownIcon />
            )}
            {crypto.market_data?.ath_change_percentage?.usd?.toFixed(2)}%
          </div>

          <div className="the24h-change">
            <div className="high-change">
              <span>24h High</span>
              <br />${crypto.market_data?.high_24h?.usd}
            </div>

            <div className="low-change">
              <span>24h Low</span>
              <br />${crypto.market_data?.low_24h?.usd}
            </div>
          </div>
        </div>

        <div className="price-chart">
          <h3>For last 7 days</h3>
          <div className="chart">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                ></CartesianGrid>
                <XAxis
                  dataKey="time"
                  stroke="#9ca3af"
                  style={{ fontSize: "12px" }}
                ></XAxis>
                <YAxis domain={["auto", "auto"]}></YAxis>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(20,20,40,0.95)",
                    border: "1px solid rgba(255,255,255,0,1)",
                    borderRaduis: "8px",
                    color: "#e0e0e0",
                  }}
                ></Tooltip>
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#ADD8E6"
                  storkeWidth={2}
                  dot={false}
                ></Line>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="financial-info">
          <div className="market-cap">
            <span>Market cap</span>
            <br />${formatNumber(crypto.market_data?.market_cap?.usd)}
          </div>

          <div className="volume">
            <span>Volume (24h)</span>
            <br />${formatNumber(crypto.market_data?.total_volume?.usd)}
          </div>

          <div className="supply">
            <span>Circulating supply</span>

            <br />
            {formatNumber(crypto.market_data?.circulating_supply)}
          </div>

          <div className="total-supply">
            <span>Total supply</span>
            <br />
            {formatNumber(crypto.market_data?.total_supply)}
          </div>
        </div>
      </div>
    </>
  );
}
