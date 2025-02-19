import { Card } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { Intro } from "../../Components/Intro";
import { CoffeContainer, CoffeList } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <Intro />
      <CoffeContainer>
        <h2>Nossos cafés</h2>
        <CoffeList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CoffeList>
      </CoffeContainer>
    </>
  );
}
