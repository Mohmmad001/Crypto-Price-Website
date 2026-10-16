import "./App.css";
import Container from "./Container.jsx";
import MainPage from "./MainPage.jsx";
import CryptoDetails from "./CryptoDetails.jsx";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

export const DataContext = createContext();
function App() {
  const [buttonState, setButtonState] = useState("grid");
  const [order, setOrder] = useState("rank");
  const [search, setSearch] = useState("");

  return (
    <Container>
      <DataContext.Provider
        value={{
          buttonState,
          setButtonState,
          order,
          setOrder,
          search,
          setSearch,
        }}
      >
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/details/:id" element={<CryptoDetails />} />
        </Routes>
      </DataContext.Provider>
    </Container>
  );
}

export default App;
