import {View,StyleSheet,Text,Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetail from '../Screenn/MealDetail';

function MealItem({title,affordability, complexity, imageUrl,duration,id}){
  const navigation=useNavigation()
  function selectHandler(){
    navigation.navigate("MealDetail",{
      mealid:id,
    })
  }



  console.log('from-meal-item',{complexity,affordability,duration})
    
    return(
        <View style={styles.rootContainer} >
           
            <Pressable android_ripple={{color:'red'}}  onPress={selectHandler}>
            <View>
            <Image source={{uri:imageUrl}} style={styles.image}/>
            <Text style={styles.text} >{title}</Text>

            </View>
            <MealDetail affordability={affordability} complexity={complexity} duration={duration} />
            
            </Pressable>
            </View>
    )
}
export default MealItem;
const styles=StyleSheet.create({
  rootContainer:{
    flex:1,
    margin:26,
    backgroundColor:'white',
    borderRadius:8,
    elevation:4,
    overflow:'hidden'


  },
  image:{
  width:'100%',
  height:200
  },
  text:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:18,
    margin:8,
    color:'red'
  },
  details:{
    flexDirection:'row',
    padding:8,
    alignItems:'center',
    color:'white',
  },
  detailTextStyle:{
    marginHorizontal:4,fontSize:12,
    
  }
  
})