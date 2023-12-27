import { Container } from "@components";
import { productApi } from "@api";
import { FlatListStyled } from "./Product.styled";
import { Image, Paragraph, Text, View } from "tamagui";
import { Dimensions, TouchableOpacity } from "react-native";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

const Product = ({ route, navigation }) => {
  const { data, isFetching, isError } = productApi.useGetProductQuery(
    route?.params?.id
  );
  const [currentImage, setCurrentImage] = useState(0);

  if (isFetching) {
    return <Container isFetching />;
  }

  if (isError) {
    return <Container isError />;
  }

  const calculateDiscount = (item) => {
    const discount = item.price - (item.price * item.discountPercentage) / 100;
    return discount.toFixed(0);
  };

  return (
    <>
      <Container as="ScrollView" className="bg-tertiary">
        <View className="flex-row justify-center items-center bg-tertiary">
          <FlatListStyled
            style={{
              padding: 0,
              paddingVertical: 0,
            }}
            data={data?.images}
            onScroll={(e) => {
              const offset = e.nativeEvent.contentOffset.x;
              const index = Math.round(offset / width);
              setCurrentImage(index);
            }}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                width={width - 40}
                height={height / 4}
                style={{ resizeMode: "contain" }}
              />
            )}
            horizontal
            pagingEnabled
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text className="w-full text-center text-sm text-secondary my-4">
          {data?.images?.length} / {currentImage + 1}
        </Text>
        <Text className="text-2xl text-font-color mb-1" fontFamily="InterBold">
          {data?.title}
        </Text>
        <View className="flex-row items-center">
          <Text className="text-xs text-font-color mr-1" fontFamily="InterBold">
            Category:
          </Text>
          <Text className="text-xs text-secondary" fontFamily="InterLight">
            {data?.category}
          </Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-xs text-font-color mr-1" fontFamily="InterBold">
            Brand:
          </Text>
          <Text className="text-xs text-secondary" fontFamily="InterLight">
            {data?.brand}
          </Text>
        </View>
        <Paragraph className="text-sm text-secondary mt-2">
          {data?.description}
        </Paragraph>
        <View className="flex-row justify-between items-center my-3">
          <Text className="text-green text-2xl">
            {calculateDiscount(data)} ${" "}
            {data?.discountPercentage ? (
              <Text
                theme="alt1"
                fontSize="$6"
                textDecorationLine="line-through"
                color="$red10Dark"
              >
                {data?.price} $
              </Text>
            ) : (
              data?.price
            )}
          </Text>
          <Text className="text-sm text-secondary" fontFamily="InterLight">
            in stock: {data?.stock}
          </Text>
        </View>
        <TouchableOpacity
          className="bg-primary p-3 rounded-md"
          activeOpacity={0.8}
          onPress={() => alert("Sepete eklendi")}
        >
          <Text className="text-sm text-white" fontFamily="InterLight">
            Add to cart
          </Text>
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default Product;
