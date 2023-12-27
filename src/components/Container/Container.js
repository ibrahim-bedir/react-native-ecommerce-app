import {
  ErrorText,
  LoadingText,
  ScrollViewStyled,
  StyledContainer,
  StyledContainerError,
  StyledContainerLoading,
} from "./Container.styled";
import { Spinner } from "tamagui";

const Container = (props) => {
  if (props.isLoading || props.isFetching)
    return (
      <StyledContainerLoading>
        <Spinner />
        <LoadingText>Lütfen Bekleyin...</LoadingText>
      </StyledContainerLoading>
    );

  if (props.isError)
    return (
      <StyledContainerError>
        <ErrorText>
          Bir hata oluştu. Lütfen daha sonra tekrar deneyin.
        </ErrorText>
      </StyledContainerError>
    );

  if (props.as === "ScrollView") {
    return <ScrollViewStyled {...props} />;
  }

  return <StyledContainer {...props} />;
};

export default Container;
