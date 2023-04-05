import { useLayoutEffect } from "react";
import {View,Text,Image,StyleSheet,ScrollView,Button} from "react-native"
import Meal from "../Model/Meal";
import MealDetails from "../Screenn/MealDetail";
import IconButton from "../Components/IconButton";
import {MEALS }from '../data/DummyData'
import Subtitle from "../Components/MealDetails/Subtitle";
import List from "../Components/MealDetails/List";
function MealDetailScreen ({route,navigation}){ 
  const MealId=route.params.mealid;
  const selectMeal=MEALS.find((meal)=>meal.id===MealId)
  function headerButtonPressHandler(){
    console.log('prsd')

  }
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:()=>{
            return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>         
          }
    })
  },[navigation, headerButtonPressHandler])
    return(
        <ScrollView style={{backgroundColor:'red', flex:1}} contentContainerStyle={{flex:1}}> 
        <View style={{flex:1}}> 
           <Image source={{uri:selectMeal.imageUrl}} style={{width:'100%',height:200}} />
           <Text style={styles.text} >
             {selectMeal.title}
           </Text>
                <View>
                    <MealDetails duration={selectMeal.duration} complexity={selectMeal.complexity} c={styles.detailTextStyle} textStyle={styles.textStyle}
                       affordability={selectMeal.affordability}/>
                </View>
                <View style={styles.listOuterContainer} >
                <View style={styles.listContainer} > 
                <Subtitle>Ingredients</Subtitle>
                <List data={selectMeal.ingredients} />
  <Subtitle>Step</Subtitle>
  <List data={selectMeal.steps} />

</View>
</View>
</View>
</ScrollView>
    )

    

}
export default MealDetailScreen;
const styles=StyleSheet.create({
    detailTextStyle:{
        flexDirection:'row',
        padding:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
        // color:'white',
      },
      textStyle:{
        marginHorizontal:4,fontSize:12,
        color:'white'
        
      }, text:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8,
        color:'red'
      },
      subtitle:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        margin:8,
        textAlign:'center',
        // borderBottomColor:'white',
        // borderBottomWidth:2,
      },subtitleContainer:{
        padding:6,
        marginHorizontal:24,
        marginVertical:4,
        borderBottomColor:'#e2b4497',
        borderBottomWidth:2,
      },
      listContainer:{
     width:'80%',
     height:350,
      },listOuterContainer:{
       alignItems:'center'
         }
})