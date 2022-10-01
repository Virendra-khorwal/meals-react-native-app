import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, Pressable, StyleSheet } from "react-native";

const MealItem = ({ itemData}) => {
  const navigation = useNavigation()
  const onPressHandler = () => {
    navigation.navigate("MealDetailScreen", {
      mealId: itemData.id,
    });
  };
  return (
    <View style={styles.outerContainer}>
      <Pressable android_ripple={{ color: "#bbb" }} style={({pressed}) => pressed ? styles.buttonPressed : styles.pressable } onPress={onPressHandler}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: itemData.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{itemData.title}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>{itemData.duration} M</Text>
          <Text>{itemData.complexity.toUpperCase()}</Text>
          <Text>{itemData.affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 4,
  },
  innerContainer: {},
  outerContainer: {
    marginVertical: 12,
    backgroundColor: "#fff",
    elevation: 4,
    overflow: "hidden",
    borderRadius: 4,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    paddingTop: 4,
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 2,
    justifyContent: "space-between",
  },
  pressable: {
    padding: 10,
  },
  buttonPressed: {
    opacity: 0.8,
    padding: 10,
  },
});

export default MealItem;
