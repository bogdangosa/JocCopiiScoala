import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GameMenuScreen from "./screens/GameMenuScreen";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import FelicitariPanda from "./screens/FelicitariPanda";

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
          options={styles.header}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    headerStyle: { backgroundColor: "#6C63FF" },
    headerTintColor: "#fff",
    headerTitleAlign: "center",
    headerTitleStyle: { fontSize: 30 },
  },
});
