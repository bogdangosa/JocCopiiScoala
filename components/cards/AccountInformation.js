import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../themes/color";

const AccountInformation =({image, number, text})=>{
return (
    <View style={styles.container}>
        <Image style={styles.imagine} source={image}/>
        <Text style={styles.textul}>{text}</Text>
    </View>
);
};

const styles = StyleSheet.create({
 container:{
    borderColor:"blue",
    borderRadius:10,
    width:150,
    height:80,
    borderWidth:2,
    justifyContent:"flex-start",
    paddingLeft:10,

 },
 imagine:{
    marginTop:10,
    marginLeft:5,
 },
 
 textul:{
    color:"blue",
    fontSize:20,
    paddingTop:10,
 },
});

export default AccountInformation;