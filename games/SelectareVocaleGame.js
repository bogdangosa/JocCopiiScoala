import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SelectableButton from "../components/buttons/SelectableButton";

const SelectareVocaleGame = () => {
  const [ArrayButoane, setArrayButoane] = useState([]);
  const [ButtonState, setButtonState] = useState(false);

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
            </SelectableButton> //e o functie pentru fiecare element din vector care trebuie sareturneze cv
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
    color: "#333",
  },
  container: {
    flexDirection: "row",
    padding: 10,
  },
});

export default SelectareVocaleGame;
