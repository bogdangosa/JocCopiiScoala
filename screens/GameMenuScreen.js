import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleCard from '../components/cards/SimpleCard';
import RecunoastereGame from '../games/RecunoastereGame';

const GameMenuScreen = ({route,navigation})=>{

    const {title} = route.params;

    useEffect(()=>{
        navigation.setOptions({ title: title })
    },[])

    return(
        <View style={styles.GameMenuScreen}>
            <View style={styles.GameListContainer}>
                <SimpleCard text="Animale"color="#6C63FF"  onPress={() =>{ navigation.navigate('Game',{title:"Animale",game:<RecunoastereGame field="animal"/>}) }}/>
                <SimpleCard text="Fructe"color="#2FEA63"   onPress={() =>{ navigation.navigate('Game',{title:"Animale",game:<RecunoastereGame field="fruct"/>}) }}/>
                <SimpleCard text="Cifre" color="#EA9F2F"   onPress={() =>{ navigation.navigate('Game',{title:"Animale",game:<RecunoastereGame field="cifra"/>}) }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    GameMenuScreen:{
        alignItems:"center",  
    },
    GameListContainer: {
        width:"90%",
        paddingTop:40,
    }
  });

export default GameMenuScreen;