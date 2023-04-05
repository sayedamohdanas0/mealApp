 import {View,Text,StyleSheet} from 'react-native'
function Subtitle ({children}){
return(
    <View style={styles.subtitleContainer} ><Text style={styles.subtitle} >{children}</Text>
  </View>
)
}
export default Subtitle;
const styles=StyleSheet.create({
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
      } 

})