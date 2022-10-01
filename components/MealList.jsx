import { StyleSheet, View, Text, FlatList } from "react-native";

import MealItem from "../components/MealItem";

const MealList = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <MealItem
            itemData={itemData.item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealList;
