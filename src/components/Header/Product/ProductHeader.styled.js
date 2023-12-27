import { Dimensions, TextInput } from "react-native";
import { View, styled } from "tamagui";
import colors from "../../../styles/colors";
import fontSize from "../../../styles/fontSize";
const { width, height } = Dimensions.get("window");
export const ProductHeaderWrapperStyled = styled(View, {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.1,
  shadowRadius: 3.5,
  backgroundColor: colors.white,
});

export const ProductHeaderSearchStyled = styled(View, {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  height: 40,
  backgroundColor: colors.tertiary,
  borderRadius: 5,
  paddingHorizontal: 10,
  marginRight: 10,
});

export const SearchResultWrapperStyled = styled(View, {
  position: "absolute",
  top: 60,
  backgroundColor: colors["transparent-dark"],
  width: width,
  height: height,
});

export const SearchResultCardStyled = styled(View, {
  backgroundColor: colors.tertiary,
  padding: 10,
  borderTopWidth: 1,
  borderTopColor: colors.gray,
});

export const TextInputStyled = styled(TextInput, {
  flex: 1,
  fontSize: fontSize.base,
});
