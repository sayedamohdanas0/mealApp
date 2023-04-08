import { createContext, useState } from "react";

export const FavoritesCOntext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});
function FavoritesCOntextProvider({ children }) {
  const [favoriteMealId, setFavoriteMealId] = useState([]);
  function addFavorites(id) {
    setFavoriteMealId((currentFavId) => [...currentFavId, id]);
  }
  function removeFavorites(id) {
    setFavoriteMealId((currentFavId) =>
      currentFavId.filter((mealId) => mealId !== id)
    );
  }
  const value = {
    ids: favoriteMealId,
    addFavorites: addFavorites,
    removeFavorites: removeFavorites,
  };
  return (
    <FavoritesCOntext.Provider value={value}>
      {children}
    </FavoritesCOntext.Provider>
  );
}
export default FavoritesCOntextProvider;
