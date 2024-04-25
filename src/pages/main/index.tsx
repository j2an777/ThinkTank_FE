import MainExtra from "../../components/mainComp/mainExtra/MainExtra";
import MainList from "../../components/mainComp/mainList/MainList";
import Nav from "../../components/nav/Nav";
import { Wrapper } from "./indexStyles";

const MainPage = () => {
  return (
    <Wrapper>
      <Nav />
      <MainList />
      <MainExtra />
    </Wrapper>
  );
};

export default MainPage;
