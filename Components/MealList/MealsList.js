import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../MealList/MealItem";

function MealsList({ item }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.conatiner}>
      <FlatList
        data={item}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsList;
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 16,
  },
});
