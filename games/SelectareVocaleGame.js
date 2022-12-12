import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getInspectorDataForInstance } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-dev";
import SelectableButton from "../components/buttons/SelectableButton";
import {colors} from "../themes/color";


const SelectareVocaleGame = ({ onVerify ,onComplete}) => {
  const [ArrayButoane, setArrayButoane] = useState([]);
  const [ButtonState, setButtonState] = useState(false);

  useEffect(() => {
    //se apeleaza cand apesi butonul de verificare
    Verify();
  }, [onVerify]);

 

  function isVowel(x) {
    var result;

    result =
      x == "A" ||
      x == "E" ||
      x == "I" ||
      x == "O" ||
      x == "U" ||
      x == "a" ||
      x == "e" ||
      x == "i" ||
      x == "o" ||
      x == "u";
    return result;
  }

  const Verify = () => {
    let c=null;
    
    console.log(c);

    const ArrayButoaneCopie = [...ArrayButoane];

    for (let i = 0; i < ArrayButoaneCopie.length; i++) {
      if(c == null)c=0;
      if (isVowel(ArrayButoaneCopie[i].litera) && ArrayButoaneCopie[i].state == 1) ///ArrayButoane[i].state inseamna ca e apasat butonul
          ArrayButoaneCopie[i].state = 2;
      if (isVowel(ArrayButoaneCopie[i].litera) == false && ArrayButoaneCopie[i].state == 1){
        ArrayButoaneCopie[i].state = 3;
        c++;
      }
      if (ArrayButoaneCopie[i].state==0 && isVowel(ArrayButoaneCopie[i].litera)==true )
        c++;
      if (ArrayButoaneCopie[i].state==3 && isVowel(ArrayButoaneCopie[i].litera)==false )
        c++;

      console.log(c);
    }

    setArrayButoane(ArrayButoaneCopie);


    if(c==0)
    {
      onComplete();                      ///daca jocul e gata apeleaza onComplete din GameScreen
    }
  };

  useEffect(() => {
    creareCuvant();
  }, []); ///se apeleaza functia asta de fiecare data cand se schimba o variabila din []

  const creareCuvant = () => {
    const cuvant = "bravo";
    const array = new Array(cuvant.length);
    for (let i = 0; i < cuvant.length; i++) {
      array[i] = { litera: cuvant[i], state: false };
    }
    setArrayButoane(array);
  };

  const ApasareButon = (index) => {
    let newVector = [...ArrayButoane]; ///ia toate valorile din vectorul ArrayButoane
    newVector[index].state = !newVector[index].state;
    setArrayButoane(newVector);
  };

  if (ArrayButoane == undefined) return <View></View>;

  return (
    <View style={styles.RecunoastereGame}>
      <Text style={styles.text}>Selecteaza</Text>
      <Text style={styles.text}>Vocalele</Text>
      <View style={styles.container}>
        {ArrayButoane.map((button, index) => {
          return (
            <SelectableButton
              button_state={button.state}
              more_styles={{ margin: 10 }}
              onPress={() => ApasareButon(index)}
            >
              {button.litera}
            </SelectableButton> //e o functie pentru fiecare element din vector care trebuie sa returneze cv
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RecunoastereGame: {
    width: "100%",
    alignItems: "center",
    paddingTop: 200,
  },
  text: {
    fontSize: 40,
    color: colors.black,
  },
  container: {
    flexDirection: "row",
    padding: 10,
  },
});

export default SelectareVocaleGame;
