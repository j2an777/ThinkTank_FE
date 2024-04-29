import MainExtra from "../../components/mainComp/mainExtra/MainExtra";
import MainList from "../../components/mainComp/mainList/MainList";
import Nav from "../../components/nav/Nav";
import { MainContainer } from "./styles";

const MainPage = () => {
  return (
    <MainContainer>
      <Nav />
      <MainList />
      <MainExtra />
    </MainContainer>
  );
};

export default MainPage;
