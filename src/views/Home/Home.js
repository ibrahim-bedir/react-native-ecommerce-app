import React from "react";
import { HomeContainer, HomeText } from "./Home.styled";
import { Container } from "@components";
import { Button } from "tamagui";
import { Text } from "tamagui";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@slices/cart";

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.count);

  return (
    <Container>
      <HomeContainer>
        <Text>Count: {count}</Text>
      </HomeContainer>
    </Container>
  );
};

export default Home;
