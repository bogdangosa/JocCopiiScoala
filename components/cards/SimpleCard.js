import { StyleSheet, Text, View } from 'react-native';

const SimpleCard = ({text,image,color})=>{

    return(
        <View style={[styles.SimpleCard,{borderColor:color}]}>
            <Text style={[styles.SimpleCardText,{color:color}]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    SimpleCard:{
        width:"100%",
        borderWidth:2,
        borderRadius:10,
        padding:20,
        marginBottom:20,
        backgroundColor:"#fff",
    },
    SimpleCardText:{
        fontSize:20,
    },
});

export default SimpleCard;