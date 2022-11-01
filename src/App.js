import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Divder from "@components/atoms/Divider"
import MetaMaskIcon from "@components/atoms/MetaMaskIcon";
import Header from "@components/templates/Header";
import TopBanner from "@components/templates/TopBanner";

const Events = styled.div`
  width: 100%;
  height: 398px;
  background-color: pink;
`;

const ItemOnSale = styled.div`
  width: 100%;
  height: 394px;
  background-color: blue;
`;

const OpenseaTopCollections = styled.div`
  width: 100%;
  height: 648px;
  background-color: dodgerblue;
`;

const OnBoarding = styled.div`
  width: 100%;
  height: 415px; 
  background-color: teal;
`;

const Footer = styled.footer`
  height: 240px;
  width: 100%;
  background-color: floralwhite;
  margin-top: 100px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>헤더부분</Header>
      <TopBanner>탑배너부분</TopBanner>
      <Events>탑배너부분</Events>
      <ItemOnSale>탑배너부분</ItemOnSale>
      <OpenseaTopCollections>컬렉션</OpenseaTopCollections>
      <OnBoarding>온보딩</OnBoarding>
      <Footer>푸터</Footer>
    </>
  );
}

export default App;
