import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SimpleCard from "../components/cards/SimpleCard";
import SimpleButton from "../components/buttons/SimpleButton";
import LitereMariMiciGame from "../games/LitereMariMiciGame";
import SelectareVocaleGame from "../games/SelectareVocaleGame";
import RecunoastereGame from "../games/RecunoastereGame";
import {colors} from "../themes/color";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import SorteazaCategoriiGame from "../games/SorteazaCategoriiGame";

const GameScreen = ({ route, navigation }) => {
  const [Verifica,setVerifica] = useState(0);
  const [GameProgressPercentage,setGameProgressPercentage] = useState(0);
  const [ProgressRate,setProgressRate] = useState(20);
  const { title } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: title });
    //console.log(route.params.progress_rate);
    setProgressRate(route.params.progress_rate);
  }, []);

    const SetareJoc = ()=>{
        switch(route.params.game){
            case "Recunoastere":
                return <RecunoastereGame field={route.params.field} onVerify={Verifica} onComplete={()=>rezultatCorect()}/>;
            case "LitereMariMici":
                return <LitereMariMiciGame onVerify={Verifica} onComplete={()=>rezultatCorect()}/>
            case "SorteazaCategorii":
              return <SorteazaCategoriiGame onVerify={Verifica} onComplete={()=>rezultatCorect()}/>
            case "SelectareVocale":
                return <SelectareVocaleGame onVerify={Verifica} onComplete={()=>rezultatCorect()}/>   ///cand jocul e gata (onComplete) apeleaza functia rezultatCorect
        }

    }

    const rezultatCorect = () =>{
        if(GameProgressPercentage+ProgressRate==100)
          navigation.navigate("Felicitari", { title: "Felicitari" })
        else{
          setGameProgressPercentage(current=>current+ProgressRate);
        }

    }

  return (
    <View style={styles.GameScreen}>
      <View style={styles.TopProgressContainer}>
        <ProgressBar percentage={GameProgressPercentage}></ProgressBar>
      </View>

      <View>{SetareJoc()}</View>

      <View style={styles.SimpleButtonContainer}>
        <SimpleButton
          color={colors.blue}
          onPress={() =>setVerifica(verifica=>verifica+1)
          }
        >
          Verifica
        </SimpleButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SimpleButtonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  TopProgressContainer:{
    width: "100%",
    alignItems:"center",
    marginTop: 20,
  }
});

export default GameScreen;
