import { StyleSheet, Text, View } from "react-native";

const FelicitariPanda = ({route,navigation}) => {
    
  return (
    <View style={styles.Text}>
      <Text >Felicitari!</Text>
      <Text>Ai reusit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Text:{
    alignItems:"center",
  },
});

export default FelicitariPanda;
