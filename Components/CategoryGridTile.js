import { Pressable,View ,Text,StyleSheet,Platform} from "react-native";


function CategoryGridTile({ color, title, onPress }) {
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
        <Pressable android_ripple={{ color: "#ccc" }} style={styles.buttonContainer} onPress={onPress}>
            <View style={styles.innerContainer}>
            <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
        </View>
    );
    }
  

export  default CategoryGridTile;
const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        borderRadius:8,
        height:150,
        elevation:4,
        marginTop:40,
        backgroundColor:'red',
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowRadius:8,
        shadowOffset:{width:0,height:2},
        overflow:Platform.OS==='android'? 'hidden':'visible '
    },buttonContainer:{
        flex:1,
    },
    innerContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    }
})