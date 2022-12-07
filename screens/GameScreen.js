import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SimpleCard from "../components/cards/SimpleCard";
import SimpleButton from "../components/buttons/SimpleButton";
import LitereMariMiciGame from "../games/LitereMariMiciGame";
import SelectareVocaleGame from "../games/SelectareVocaleGame";
import RecunoastereGame from "../games/RecunoastereGame";

const GameScreen = ({ route, navigation }) => {
  const [Verifica,setVerifica] = useState(0);
  const { title } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: title });
  }, []);

    const SetareJoc = ()=>{
        switch(route.params.game){
            case "Recunoastere":
                return <RecunoastereGame field="animal" onVerify={Verifica} />;
            case "LitereMariMici":
                return <LitereMariMiciGame onVerify={Verifica} onComplete={()=>rezultatCorect()}/>
            case "SelectareVocale":
                return <SelectareVocaleGame onVerify={Verifica} onComplete={()=>rezultatCorect()}/>   ///cand jocul e gata (onComplete) apeleaza functia rezultatCorect
        }

    }

    const rezultatCorect = () =>{
        navigation.navigate("Felicitari", { title: "Felicitari" })
    }

  return (
    <View style={styles.GameScreen}>
      <View>{SetareJoc()}</View>

      <View style={styles.SimpleButtonContainer}>
        <SimpleButton
          color="#6C63FF"
          onPress={() =>setVerifica(verifica=>verifica+1)
          }
        >
          Verify
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
    marginTop: 20,
  },
});

export default GameScreen;
