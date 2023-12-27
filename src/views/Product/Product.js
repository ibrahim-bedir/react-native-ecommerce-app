import React from "react";
import { Container } from "@components";
import { ProductCard } from "./components/ProductCard";
import { productApi } from "@api";
import { FlatListStyled } from "./Product.styled";

const Product = () => {
  const { data, isLoading, isError } = productApi.useGetProductsQuery();

  if (isLoading) {
    return <Container isLoading />;
  }

  if (isError) {
    return <Container isError />;
  }

  return (
    <FlatListStyled
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      showsVerticalScrollIndicator={false}
      data={data?.products}
      renderItem={({ item }) => <ProductCard item={item} />}
    />
  );
};

export default Product;
