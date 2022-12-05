import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import SimpleButton from "../components/buttons/SimpleButton";

const FelicitariPanda = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.containerInterior}
        source={require("../assets/PozaBackgroundFelicitariVerde.png")}
      >
        <Text style={styles.PrimaLinieText}>Felicitari</Text>
        <Text style={styles.ADouaLinieText}>Ai reusit !</Text>
        <Image
          style={styles.image}
          source={require("../assets/PozaPandaFelicitari.png")}
        />

        <SimpleButton onPress={() => navigation.pop(2)} color="#15B942">
          Continua!
        </SimpleButton>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2FEA63",
    justifyContent: "center",
  },

  containerInterior: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  PrimaLinieText: {
    fontSize: 40,
    color: "#fff",
  },

  ADouaLinieText: {
    fontSize: 40,
    color: "#fff",
  },

  image: {},
});

export default FelicitariPanda;
