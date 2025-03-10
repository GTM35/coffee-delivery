import { Card } from "../../Components/Card";
import { Intro } from "../../Components/Intro";

import { CoffeContainer, CoffeList } from "./styles";

export function Home() {
  return (
    <>
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
