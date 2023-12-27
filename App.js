import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme, createTamagui } from "tamagui";
import config from "./tamagui.config";
import * as Font from "expo-font";
import { useEffect } from "react";
import AppRouter from "./src/routes/AppRouter";
import { Provider } from "react-redux";
import store from "./src/store";
import { Container } from "./src/components";

export default function App() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = Font.useFonts({
    Inter: require("./assets/fonts/Inter-Regular.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterExtraLight: require("./assets/fonts/Inter-ExtraLight.ttf"),
    unset: require("@tamagui/font-inter/otf/Inter-Medium.otf"), // default
  });
  useEffect(() => {}, [fontsLoaded]);

  if (!fontsLoaded) {
    return;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === "dark" ? "dark" : "light"}>
        <StatusBar style="auto" />
        <Provider store={store}>
          <Container>
            <AppRouter />
          </Container>
        </Provider>
      </Theme>
    </TamaguiProvider>
  );
}
