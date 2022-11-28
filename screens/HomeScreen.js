import { StyleSheet, Text, View } from 'react-native';
import SimpleCard from '../components/cards/SimpleCard';

const HomeScreen = ()=>{

    return(
        <View style={styles.HomeScreen}>
            <View style={styles.GameListContainer}>
                <SimpleCard text="Recunoastere"color="#6C63FF"/>
                <SimpleCard text="Reordoneaza"color="#2FEA63"/>
                <SimpleCard text="Selecteaza" color="#EA9F2F"/>
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