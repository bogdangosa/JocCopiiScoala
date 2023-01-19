import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View , Image} from "react-native";
import { useEffect } from "react";
import AccountInformation from "../components/cards/AccountInformation";

const AccountScreen =({route , navigation})=>{
return ( 
    <View style={styles.screen}>
        <View style={styles.cards}>
        <AccountInformation image={require("../assets/IconStreak.png")} text={"Zile in serie"}/>
        </View>
        
        <View style={styles.cards}>
        <AccountInformation image={require("../assets/IconXp.png")}  text={"XP total"}/>
        </View>
    </View> 
    );
};

const styles = StyleSheet.create({
    screen:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
    },
    cards:{
        padding:10,
        paddingTop:60,
    },
    
   });
   

export default AccountScreen;