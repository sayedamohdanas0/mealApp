import {View,Text,StyleSheet,Image} from 'react-native' 

function MealDetails({affordability, complexity,duration,textStyle,detailTextStyle}){
   

    return(
        <View style={[styles.details,detailTextStyle]} >
        <Text style={[styles.detailText,textStyle]}>{duration}--m</Text>
        
         <Text style={[styles.detailText,textStyle ]}>{affordability.toUpperCase()}</Text>
        <Text style={[styles.detailText,textStyle]}>{complexity.toUpperCase()} </Text> 
       </View>
    )
}

export default MealDetails;
const styles=StyleSheet.create({
    details:{
        flexDirection:'row',
        padding:8,
        justifyContent:'center',
        alignItems:'center'
      },
      detailText:{
        marginHorizontal:4,fontSize:12,
      }
})