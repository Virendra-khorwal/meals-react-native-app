import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/FavouriteContext";


const FavoriteScreen = () => {
    
    const favMealContext = useContext(FavouriteContext);

    const favMeals = MEALS.filter((meal) => favMealContext.ids.includes(meal.id));

    if(favMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Ionicons name='information-circle' size={40} />
                <Text style={styles.text}>
                    No Favourite meal found
                </Text>
            </View>
        )
    }

    return (
        <MealList items={favMeals} />
    )
}

const styles = StyleSheet.create({
    rootContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text :{
        fontSize: 20,
        marginTop: 10,
    }
})

export default FavoriteScreen;