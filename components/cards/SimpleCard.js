import { StyleSheet, Text, Touchable, View , Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const SimpleCard = ({text,image,color,onPress})=>{

    return(
        <Pressable style={[styles.SimpleCard,{borderColor:color, backgroundColor:color,}]} onPress={onPress}>
            <Text style={[styles.SimpleCardText,{color:"#fff"}]}>{text}</Text>
            <Image style={styles.SimpleCardImage } source={image}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    SimpleCard:{
        width:"100%",
        borderWidth:2,
        borderRadius:10,
        paddingLeft:25,
        marginBottom:20,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        overflow: "hidden",
    },
    SimpleCardText:{
        fontSize:25,
        marginBottom: 10,
    },
    SimpleCardImage:{
        height:80,
        width: 80,
        backgroundColor: '#fff',
    },
});

export default SimpleCard;