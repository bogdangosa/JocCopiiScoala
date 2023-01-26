import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../themes/color";

const AccountCard2 =({image, levelnumber, title, text, color})=>{
    return (
        <View style={styles.card}> 
            <View style={styles.icon} backgroundColor={color}>
                <Image source={image}/>
                <Text style={styles.nivelText}>Nivel {levelnumber}</Text>
            </View>
            <View>
                <Text style={styles.titlu}>{title}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};

    
const styles = StyleSheet.create({
    card:{
        flexDirection:"row",
    },
    
    icon:{
        width:120,
        height:120,
        alignItems:"center",
        justifyContent:"center",
        paddingTop:10,
        borderRadius:15,
        },

    nivelText:{
        padding:10,
        color:"white",
    },

    titlu:{
        fontSize:20,
        fontStyle:"bold",
    },
});
    
export default AccountCard2;