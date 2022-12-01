import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleCard from '../components/cards/SimpleCard';
import SimpleButton from '../components/buttons/SimpleButton';

const GameScreen = ({route,navigation})=>{

    const {title} = route.params;

    useEffect(()=>{
        navigation.setOptions({ title: title })
    },[])

    return(
        <View style={styles.GameScreen}>

            <View>
                {route.params.game}
            </View>

            <View style={styles.SimpleButtonContainer}>
                <SimpleButton  color="#6C63FF" onPress={()=>navigation.navigate("Felicitari", { title: "Felicitari" })}>Verify</SimpleButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    SimpleButtonContainer:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
    }
});

export default GameScreen;