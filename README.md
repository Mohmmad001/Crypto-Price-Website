# 🚀 Crypto Tracker

A responsive React app for browsing real-time cryptocurrency prices and market data, powered by the [CoinGecko API](https://www.coingecko.com/en/api).

Browse the top 20 coins by market cap, search and sort them, switch between grid and list views, and open any coin to see a detailed page with a 7-day price chart.

## 🌐 Live Demo

**👉 [steady-bombolone-1c733f.netlify.app](https://steady-bombolone-1c733f.netlify.app)**

[![Live Demo](https://img.shields.io/badge/demo-live-00bcd4?style=for-the-badge&logo=netlify&logoColor=white)](https://steady-bombolone-1c733f.netlify.app)

## ✨ Features

- **Live market data** – top 20 cryptocurrencies by market cap, fetched from CoinGecko
- **Search** – filter coins by name as you type
- **Sorting** – by rank, name, price (low → high / high → low), 24h change, or market cap
- **Grid / List view** – toggle the layout of the coin cards
- **Details page** – per-coin view with:
  - current price, 24h high and low
  - 7-day interactive price chart
  - market cap, 24h volume, circulating supply, and total supply
- **Client-side routing** – dedicated route for each coin (`/details/:id`)
- **Dark, neon-glow UI** with hover animations

## 🛠️ Tech Stack

- [React](https://react.dev/) (hooks + Context API for shared state)
- [React Router](https://reactrouter.com/) for navigation
- [Recharts](https://recharts.org/) for the price chart
- [Material UI Icons](https://mui.com/material-ui/material-icons/)
- [CoinGecko API](https://www.coingecko.com/en/api) for data
- Plain CSS for styling

## 📂 Project Structure

```
src/
├── main.jsx                  # App entry, BrowserRouter
├── App.jsx                   # Routes + DataContext (view, sort, search state)
├── Container.jsx             # Page wrapper
├── MainPage.jsx              # Home page layout
├── Header.jsx                # Title + search bar
├── CryptoHeader.jsx          # Sort dropdown + grid/list toggle
├── CryptoSection.jsx         # Scrollable section wrapper
├── CryptoList.jsx            # Fetches and renders coin cards
├── CryptoDetails.jsx         # Coin details page + chart
└── CryptoDetailsHeader.jsx   # Details page header with back button
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# install dependencies
npm install

# start the dev server
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

### API Key

The app uses the CoinGecko demo API. Get a free key from the [CoinGecko developer dashboard](https://www.coingecko.com/en/api) and store it in a `.env` file (never commit it):

```env
VITE_CG_API_KEY=your_api_key_here
```

## 🧠 How It Works

- `App.jsx` creates a `DataContext` that holds the view mode, sort order, and search text, so the header, sort controls, and list all stay in sync.
- `CryptoList.jsx` fetches the market data once, then filters and sorts it on the client based on context values.
- `CryptoDetails.jsx` reads the coin `id` from the URL and fetches both the coin data and its 7-day price history.

## 🔮 Future Improvements

- Pagination / "load more" beyond the top 20
- Selectable chart ranges (24h, 7d, 30d, 1y)
- Favorites / watchlist saved in local storage
- Loading skeletons and better error handling
- Light/dark theme toggle

## 🙌 Acknowledgements

Market data provided by [CoinGecko](https://www.coingecko.com/).
