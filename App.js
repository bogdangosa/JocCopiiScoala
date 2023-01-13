import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GameMenuScreen from "./screens/GameMenuScreen";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import FelicitariPanda from "./screens/FelicitariPanda";
import LearnMenuScreen from "./screens/LearnMenuScreen";
import {colors} from "./themes/color";
import LearnScreen from "./screens/LearnScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Smart Games"
          component={HomeScreen}
          options={styles.header}
        />
        <Stack.Screen
          name="Games Menu"
          component={GameMenuScreen}
          options={styles.header}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={styles.header}
        />
        <Stack.Screen
          name="Felicitari"
          component={FelicitariPanda}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Learn Menu"
          component={LearnMenuScreen}
          options={{...styles.header, ...{title: 'Învață'}}}
        />
        <Stack.Screen
          name="Learn"
          component={LearnScreen}
          options={styles.header}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    headerStyle: { backgroundColor: colors.blue },
    headerTintColor: colors.white,
    headerTitleAlign: "center",
    headerTitleStyle: { fontSize: 30 },
  },
});
