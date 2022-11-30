import { StyleSheet, Text, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const RecunoastereGame = ({field}) => {
  return (
    <View style={styles.RecunoastereGame} >
      <Text>Ce {field} este ?</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default RecunoastereGame;
