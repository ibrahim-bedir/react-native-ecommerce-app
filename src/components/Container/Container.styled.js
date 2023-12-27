import { SafeAreaView } from "react-native";
import { ScrollView, Text, styled } from "tamagui";
import colors from "../../styles/colors";

export const StyledContainer = styled(SafeAreaView, {
  flex: 1,
  justifyContent: "center",
});

export const ScrollViewStyled = styled(ScrollView, {
  flex: 1,
  padding: 20,
  backgroundColor: colors.white,
});

export const StyledContainerLoading = styled(StyledContainer, {
  flexDirection: "col",
  gap: 10,
  alignItems: "center",
  justifyContent: "center",
});

export const LoadingText = styled(Text, {
  fontSize: 12,
  fontFamily: "InterMedium",
});

export const StyledContainerError = styled(StyledContainer, {
  flexDirection: "col",
  gap: 10,
  alignItems: "center",
  justifyContent: "center",
});

export const ErrorText = styled(Text, {
  fontSize: 12,
  fontFamily: "InterMedium",
  color: "$red10Light",
});
