import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../Components/MealList/MealsList";
import { MEALS } from "../data/DummyData";
import { FavoritesCOntext } from "./Store/FavoriteContext";

function FavoriteScreen() {
  const favoriteMealCtx = useContext(FavoritesCOntext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList item={favoriteMeals} />;
}
export default FavoriteScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
