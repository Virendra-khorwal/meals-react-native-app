import { StyleSheet, View, Text, FlatList } from "react-native"
import Card from "../components/Card";
import {CATEGORIES} from '../data/dummy-data'

const CategoriesScreen = ({navigation}) => {

  const onPressHandler = (itemData) => {
    navigation.navigate('MealsOverview', {
      categoryId: itemData.item.id,
    })
  }

    return (
      <View style={styles.cardsContainer}>
        <FlatList
          data={CATEGORIES}
          numColumns={2}
          renderItem={(itemData) => (
            <Card title={itemData.item.title} color={itemData.item.color} onPress={()=> onPressHandler(itemData)} />
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    cardsContainer: {
        flex: 1,
        marginTop: 10,
        width: '100%',
        padding:20,
    },
})

export default CategoriesScreen;