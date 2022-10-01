import { createContext, useState } from "react";


export const FavouriteContext = createContext({
    ids: [],
    addFav : (id) => {},
    removeFav: (id) => {},
})

const FavouritesContextProvider = ({children}) => {
    const [favouriteIds, setFavouriteIds] = useState([]);

    const addFav = (id) => {
        setFavouriteIds((currentIds) => [...currentIds, id]);
    }

    const removeFav = (id) => {
        setFavouriteIds((currentIds) => currentIds.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: favouriteIds,
        addFav: addFav,
        removeFav: removeFav,
    }
    
    return (
        <FavouriteContext.Provider value={value}>
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouritesContextProvider;

