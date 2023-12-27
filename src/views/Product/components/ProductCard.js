import { useNavigation } from "@react-navigation/native";
import { Dimensions, TouchableOpacity } from "react-native";
import {
  Button,
  Card,
  H2,
  Image,
  Paragraph,
  Separator,
  Text,
  View,
  XStack,
} from "tamagui";
const width = Dimensions.get("window").width;
export const ProductCard = ({ item }) => {
  const navigation = useNavigation();
  const calculateDiscount = (item) => {
    const discount = item.price - (item.price * item.discountPercentage) / 100;
    return discount.toFixed(0);
  };

  return (
    <TouchableOpacity
      accessibilityHint="Ürün detay sayfasına gitmek için dokunun"
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("Ürün Detay", { id: item.id });
      }}
    >
      <Card bordered marginBottom={10} className="bg-tertiary">
        <View padding="$2" flexDirection="row" gap="$2">
          <View>
            <Image
              source={{ uri: item.thumbnail }}
              width={75}
              height={75}
              borderRadius="$4"
            />
          </View>
          <View>
            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                size="$5"
                minWidth={width * 0.4}
                maxWidth={width * 0.4}
                className="text-primary"
              >
                {item.title}
              </Text>
              <Text
                minWidth={width * 0.3}
                maxWidth={width * 0.3}
                className="text-red text-xs text-right"
              >
                {item.discountPercentage}% discount
              </Text>
            </View>
            <View maxWidth={width - width * 0.3} height={width * 0.1}>
              <Text className="text-font-color text-xs font-light">
                Brand: {item.brand}
              </Text>
              <Text className="text-font-color text-xs font-light">
                Category: {item.category}
              </Text>
            </View>
            <View>
              <Text
                maxWidth={width - width * 0.31}
                minWidth={width - width * 0.31}
                className="text-secondary text-xs"
              >
                {item.description}
              </Text>
              <View
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text className="text-green text-2xl">
                  {calculateDiscount(item)} ${" "}
                  {item.discountPercentage ? (
                    <Text
                      theme="alt1"
                      fontSize="$6"
                      textDecorationLine="line-through"
                      color="$red10Dark"
                    >
                      {item.price} $
                    </Text>
                  ) : (
                    item.price
                  )}
                </Text>
                <Text className="text-xs text-font-color">
                  in stock: {item.stock}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
