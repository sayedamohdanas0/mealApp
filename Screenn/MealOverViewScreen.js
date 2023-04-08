import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/DummyData";
import MealsList from "../Components/MealList/MealsList";
function MealOverViewScreen({ route, navigation }) {
  console.log(Array.isArray(MEALS));
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  return <MealsList item={displayMeals} />;

  // function renderMealItem(itemData) {
  //   const item = itemData.item;
  //   const mealItemProps = {
  //     id: item.id,
  //     title: item.title,
  //     imageUrl: item.imageUrl,
  //     affordability: item.affordability,
  //     complexity: item.complexity,
  //     duration: item.duration,
  //   };
  //   return <MealItem {...mealItemProps} />;
  // }
  // return (
  //   <View style={styles.conatiner}>
  //     <FlatList
  //       data={displayMeals}
  //       keyExtractor={(item) => item.id}
  //       renderItem={renderMealItem}
  //     />
  //   </View>
  // );
}
export default MealOverViewScreen;
