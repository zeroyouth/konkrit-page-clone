import GlobalStyle from "./GlobalStyle";
import Header from "@components/templates/Header";
import TopBanner from "@components/templates/TopBanner";
import Events from "@components/templates/Events";
import ItemsOnSale from "@components/templates/ItemsOnSale";
import OpenseaTopCollection from "@components/templates/OpenseaTopCollection";
import OnBoarding from "@components/templates/OnBoarding";
import Footer from "@components/templates/Footer";
import useAuth from "@hooks/useAuth";
import { toast } from "react-toastify";
import { useEffect } from "react";

const klaytn = window.klaytn

function App() {
  const { user, setUser } = useAuth();
  useEffect(() => {
    //kaikas 지갑 없을시 이 effect무효!
    if (!klaytn) {
      return;
    }

    const account = localStorage.getItem("_user");
    const currentKaikasAccount = klaytn?.selectedAddress;

    if (!account || !currentKaikasAccount) {
      setUser("");
      localStorage.removeItem("_user");
      return;
    }

    if (account === currentKaikasAccount) {
      setUser(account);
      localStorage.setItem("_user", account);
    }
  }, [setUser]);
  return (
    <>
      <GlobalStyle />
      <Header>헤더부분</Header>
      <TopBanner>탑배너부분</TopBanner>
      <Events>이벤트</Events>
      <ItemsOnSale>아이템</ItemsOnSale>
      <OpenseaTopCollection>컬렉션</OpenseaTopCollection>
      <OnBoarding>온보딩</OnBoarding>
      <Footer>푸터</Footer>
    </>
  );
}

export default App;
