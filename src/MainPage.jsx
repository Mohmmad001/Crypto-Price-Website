import Header from "./Header.jsx";
import CryptoHeader from "./CryptoHeader.jsx";
import CryptoSection from "./CryptoSection.jsx";
import CryptoList from "./CryptoList.jsx";

export default function MainPage() {
  return (
    <>
      <Header></Header>
      <CryptoSection>
        <CryptoHeader></CryptoHeader>
        <CryptoList></CryptoList>
      </CryptoSection>
    </>
  );
}
