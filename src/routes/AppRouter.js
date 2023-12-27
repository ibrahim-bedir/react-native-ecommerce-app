import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Home } from "@views";
import { Product, ProductDetail } from "@views";
import { ProductHeader } from "@components";
import {
  ArrowLeftIcon,
  OrdersIcon,
  ProductsIcon,
  SettingsIcon,
  ShoppingCart,
  UsersIcon,
} from "@icons";

import colors from "../styles/colors";
import { View } from "tamagui";
export const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "#fff",
      }}
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3.5,
        },
        tabBarIconStyle: {
          width: 30,
          height: 30,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5775CD",
        tabBarStyle: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -5 },
          shadowOpacity: 0.1,
          shadowRadius: 2.5,
        },
      }}
    >
      <Tab.Screen
        name="Profil"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <UsersIcon size={size} style={{ color }} />;
          },
        }}
      />
      <Tab.Screen
        name="Ürünler"
        component={Product}
        options={{
          header: (header) => <ProductHeader {...header} />,
          tabBarIcon: ({ focused, color, size }) => {
            return <ProductsIcon size={size} style={{ color }} />;
          },
        }}
      />
      <Tab.Screen
        name="Siparişler"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <OrdersIcon size={size} style={{ color }} />;
          },
        }}
      />
      <Tab.Screen
        name="Sepetim"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <ShoppingCart size={size} style={{ color }} />;
          },
        }}
      />
      <Tab.Screen
        name="Ayarlar"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <SettingsIcon size={size} style={{ color }} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

function StackNavigator(props) {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="AppStack"
      screenOptions={{
        headerLeft: () => (
          <View className="px-2" onPress={() => navigation.goBack()}>
            <ArrowLeftIcon
              style={{
                color: colors["font-color"],
              }}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen
        name="AppStack"
        component={AppStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Ürün Detay" component={ProductDetail} />
    </Stack.Navigator>
  );
}

const AppRouter = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppRouter;
