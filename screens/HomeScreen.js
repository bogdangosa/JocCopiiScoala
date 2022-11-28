import { StyleSheet, Text, View } from 'react-native';
import SimpleCard from '../components/cards/SimpleCard';

const HomeScreen = ({navigation})=>{

    return(
        <View style={styles.HomeScreen}>
            <View style={styles.GameListContainer}>
                <SimpleCard text="Recunoastere"color="#6C63FF" onPress={() =>{ navigation.navigate('Games Menu',{title:"Recunoastere"}) }}/>
                <SimpleCard text="Reordoneaza"color="#2FEA63" onPress={() =>{ navigation.navigate('Games Menu',{title:"Reordoneaza"})}}/>
                <SimpleCard text="Selecteaza" color="#EA9F2F" onPress={() =>{ navigation.navigate('Games Menu',{title:"Selecteaza"})}}/>
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
    HomeScreen:{
        alignItems:"center",  
    },
    GameListContainer: {
        width:"90%",
        paddingTop:40,
    }
  });

export default HomeScreen;