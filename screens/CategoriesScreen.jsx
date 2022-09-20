import { StyleSheet, View, Text, FlatList } from "react-native"
import Card from "../components/Card";
import {CATEGORIES} from '../data/dummy-data'

const CategoriesScreen = () => {

    return (
      <View style={styles.cardsContainer}>
        <Text style={styles.textContainer}>Categories</Text>
        <FlatList
          data={CATEGORIES}
          numColumns={2}
          renderItem={(itemData) => (
            <Card title={itemData.item.title} color={itemData.item.color} />
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    cardsContainer: {
        flex: 1,
        marginTop: 40,
        width: '100%',
        padding:20,
    },
    textContainer : {
        textAlign: 'center',
        fontSize: 20,
        marginBottom:20,
    }
})

export default CategoriesScreen;