import { FlatList } from "react-native";
import { CATEGORIES } from "../data/DummyData";
import CategoryGridTile from "../Components/CategoryGridTile";
function CategoriesScreen({navigation}){
    function renderCategoryItem(itemData){
        function onPressHandler (){
          navigation.navigate("MealOverView",{
            categoryId:itemData.item.id,
          })
        }
        return <CategoryGridTile Tile title={itemData.item.title} color={itemData.item.color}  onPress={onPressHandler}/>
    }
return(
    <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderCategoryItem} numColumns={2} />
)

}
export default CategoriesScreen;