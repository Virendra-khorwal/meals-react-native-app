import { 
  // useContext, 
  useLayoutEffect 
} from "react";
import { StyleSheet, Text, View,Image, ScrollView} from "react-native"
import { useDispatch, useSelector } from "react-redux";

import IconButton from "../components/IconButton";
import { MEALS } from "../data/dummy-data";
// import { FavouriteContext } from "../store/context/FavouriteContext";
import { addFav, removeFav } from "../store/redux/favouriteSlice";

const MealDetailScreen = ({route, navigation}) => {

    const mealId = route.params.mealId;
    const mealData = MEALS.find((meal) => (
        meal.id === mealId
    ))

    // const mealFavContext = useContext(FavouriteContext)
    const favMealIds = useSelector((state) => state.favouriteMeal.ids);
    const dispatch = useDispatch();



    // const isMealFav = mealFavContext.ids.includes(mealId);
    const isMealFav = favMealIds.includes(mealId);

    const onPressHandler = () => {
      if (isMealFav) {
        // mealFavContext.removeFav(mealId);
        dispatch(removeFav({id: mealId}));
        
      } else {
        // mealFavContext.addFav(mealId);
        dispatch(addFav({id: mealId}));
      }
    };

    useLayoutEffect(()=> {
        const title = mealData.title

        
        navigation.setOptions({
            title:title,
            headerRight: () => (
                <IconButton icon={isMealFav ? 'heart' : 'heart-outline'} color='black' onPress={onPressHandler} />
            )
        })
    },[navigation, mealData, onPressHandler])

    return (
      <ScrollView>
        <View>
          <Image source={{ uri: mealData.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{mealData.title}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>{mealData.duration} M</Text>
          <Text>{mealData.complexity.toUpperCase()}</Text>
          <Text>{mealData.affordability.toUpperCase()}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.subTitle}>Ingredients</Text>
          <View>
            {mealData.ingredients.map((item, index) => (
              <Text style={styles.listItem} key={index}>
                {item}
              </Text>
            ))}
          </View>
          <Text style={styles.subTitle}>Steps</Text>
          <View>
            {mealData.steps.map((item, index) => (
              <Text style={styles.listItem} key={index}>
                {item}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 2,
    justifyContent: "space-between",
    padding: 8,
  },
  subTitle: {
    fontWeight: '700',
    fontSize: 18,
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  detailContainer:{
    padding: 8,
    paddingHorizontal:20,
    marginBottom: 20,
  },
  listItem: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 8,
    marginVertical: 4,
    textAlign: 'center',
  }
});

export default MealDetailScreen;