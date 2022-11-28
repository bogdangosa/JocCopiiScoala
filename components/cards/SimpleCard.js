import { StyleSheet, Text, Touchable, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const SimpleCard = ({text,image,color,onPress})=>{

    return(
        <Pressable style={[styles.SimpleCard,{borderColor:color}]} onPress={onPress}>
            <Text style={[styles.SimpleCardText,{color:color}]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    SimpleCard:{
        width:"100%",
        borderWidth:2,
        borderRadius:10,
        padding:25,
        marginBottom:20,
        backgroundColor:"#fff",
    },
    SimpleCardText:{
        fontSize:20,
    },
});

export default SimpleCard;