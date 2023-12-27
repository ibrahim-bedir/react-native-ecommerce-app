import {
  ProductHeaderSearchStyled,
  ProductHeaderWrapperStyled,
  SearchResultCardStyled,
  SearchResultWrapperStyled,
  TextInputStyled,
} from "./ProductHeader.styled";

import CloseIcon from "../../../../assets/icons/close.svg";
import colors from "../../../styles/colors";
import { Paragraph, Text } from "tamagui";
import { productApi } from "@api";
import { useEffect, useState } from "react";
import { Keyboard, TouchableOpacity } from "react-native";

const ProductHeader = (props) => {
  const { navigation } = props;
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isFetching } = productApi.useGetProductsBySearchQuery(
    searchQuery,
    {
      skip: searchQuery === "" || searchQuery.length < 3 || !searchQuery,
    }
  );

  useEffect(() => {
    if (searchQuery.length > 2) {
      setShowSearchResult(true);
    } else {
      setShowSearchResult(false);
    }
  }, [searchQuery]);

  const closeSearchResult = () => {
    setSearchQuery("");
    setShowSearchResult(false);
    Keyboard.dismiss();
  };

  return (
    <ProductHeaderWrapperStyled>
      <ProductHeaderSearchStyled>
        {showSearchResult && (
          <TouchableOpacity onPress={() => closeSearchResult()}>
            <CloseIcon style={{ color: colors.primary }} width={25} />
          </TouchableOpacity>
        )}
        <TextInputStyled
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.nativeEvent.text);
          }}
        />
      </ProductHeaderSearchStyled>
      {showSearchResult && (
        <SearchResultWrapperStyled onPress={() => closeSearchResult()}>
          {isFetching && (
            <SearchResultCardStyled activeOpacity={0.9}>
              <Text className="text-sm">Loading...</Text>
            </SearchResultCardStyled>
          )}
          {!isFetching &&
            data?.products?.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate("Ürün Detay", { id: item.id });
                  closeSearchResult();
                }}
              >
                <SearchResultCardStyled>
                  <Text className="text-sm">
                    {item?.title?.length > 20
                      ? item?.title?.slice(0, 20) + "..."
                      : item?.title}
                  </Text>
                  <Paragraph className="text-xs text-secondary">
                    {item?.description?.length > 50
                      ? item?.description?.slice(0, 50) + "..."
                      : item?.description}
                  </Paragraph>
                </SearchResultCardStyled>
              </TouchableOpacity>
            ))}
        </SearchResultWrapperStyled>
      )}
    </ProductHeaderWrapperStyled>
  );
};

export default ProductHeader;
