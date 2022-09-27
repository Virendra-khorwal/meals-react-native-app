import { StyleSheet, View, Text, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const MealsOverviewScreen = ({route,navigation}) => {

    const catId = route.params.categoryId

    const displayMeal = MEALS.filter((item) => (
        item.categoryIds.indexOf(catId) >=0 
    ))

    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((category)=> category.id === catId).title;

        navigation.setOptions({
            title: catTitle,
        })
    },[catId, navigation])

    // Here we use use Layout Hook becuase when we using useEffect it changes title when the content loaded but use layout change the title as the layout change.

    return(
        <View style={styles.container}>
            <FlatList data={displayMeal} renderItem={(itemData) => (
                <MealItem itemData={itemData.item} />
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 16,
    }
})

export default MealsOverviewScreen;