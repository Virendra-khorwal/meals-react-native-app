
import { MEALS, CATEGORIES } from "../data/dummy-data";

import { useLayoutEffect } from "react";
import MealList from "../components/MealList";

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
        <MealList items={displayMeal} />
    )
}



export default MealsOverviewScreen;