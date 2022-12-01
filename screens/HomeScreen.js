import { useEffect,useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SimpleCard from "../components/cards/SimpleCard";
import RecunoastereGame from "../games/RecunoastereGame";
import LitereMariMiciGame from "../games/LitereMariMiciGame";

const HomeScreen = ({ navigation }) => {
    const [GamesData,setGameData] = useState([]);

    useEffect(()=>{
        const gameData = [
            {
                title:"Recunoastere",
                color:"#6C63FF",
                image:require("../assets/Panda6.png"),
                games:[
                    {
                        name:"Animale",
                        color:"#EA9F2F",
                        game:<RecunoastereGame field="animal"/>,
                    },
                    {
                        name:"Fructe",
                        color:"#6C63FF",
                        game:<RecunoastereGame field="fruct"/>,
                    },
                    {
                        name:"Cifre",
                        color:"#FF5151",
                        game:<RecunoastereGame field="cifra"/>,
                    },
                ],
            },            
            {
                title:"Reordoneaza",
                color:"#2FEA63",
                image:require("../assets/Panda7.png"),
                games:[
                    {
                        name:"Litere",
                        color:"#EA9F2F",
                        game:<RecunoastereGame field="animal"/>,
                    },
                    {
                        name:"Cifre",
                        color:"#FF5151",
                        game:<RecunoastereGame field="animal"/>,
                    },
                ],
            },
            {
                title:"Selecteaza",
                color:"#EA9F2F",
                image:require("../assets/Panda3.png"),
                games:[
                    {
                        name:"Vocale",
                        color:"#6C63FF",
                        game:<RecunoastereGame field="animal"/>,
                    },
                    {
                        name:"Perechi de litere",
                        color:"#2FEA63",
                        game:<LitereMariMiciGame/>,
                    },
                    {
                        name:"Animalul",
                        color:"#EA9F2F",
                        game:<RecunoastereGame field="animal"/>,
                    },
                ],
            }
        ]
        setGameData(gameData);
    },[]);


  return (
    <View style={styles.HomeScreen}>
      <View style={styles.GameListContainer}>
        {GamesData.map((game_category,index)=>{
            return <SimpleCard
            text={game_category.title}
            color={game_category.color}
            image={game_category.image}
            key={index}
            onPress={() => {
              navigation.navigate("Games Menu", { title: game_category.title , games:game_category.games} );
            }}
          />
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  HomeScreen: {
    alignItems: "center",
  },
  GameListContainer: {
    width: "90%",
    paddingTop: 40,
  },
});

export default HomeScreen;
