import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View , Image, ScrollView} from "react-native";
import { useEffect } from "react";
import AccountCard from "../components/cards/AccountCard";
import AccountCard2 from "../components/cards/AccountCard2";
import { useMyUserContext } from "../contexts/UserContext";

const AccountScreen =({route , navigation})=>{
    
    const User = useMyUserContext();



    return ( 
        <View style={styles.screen}>
            <ScrollView>
                <View style={styles.container1}>
                    <View style={styles.cards}>
                        <AccountCard image={require("../assets/IconStreak.png")} text={"Zile in serie"} number="5"/>
                    </View>
                    <View style={styles.cards}>
                        <AccountCard image={require("../assets/IconXp.png")}  text={"XP total"} number={User.xp}/>
                    </View>    
                </View>
                <Text style={styles.Realizari}>Achievements</Text>
                <View style={styles.container2}>
                    <View style={styles.cards2}>
                        <AccountCard2  image={require("../assets/fire.png")} levelnumber="1" title={"In flacari"} text={"yes"} color="#FF5151"/>
                    </View>
                    <View style={styles.cards2}>
                        <AccountCard2 image={require("../assets/graduate.png")} title={"Intelept"} text={"yes"} color="#772096"/>
                    </View>
                    <View style={styles.cards2}>
                        <AccountCard2 image={require("../assets/timer.png")} title={"Gandeste rapid"} text={"yes"} color="#EAB62F"/>
                    </View>
                    <View style={styles.cards2}>
                        <AccountCard2 image={require("../assets/target.png")} title={"Fara greseala"} text={"yes"} color="#2FEA63"/>
                    </View> 
                </View>
            </ScrollView>
        </View> 
        );
};

const styles = StyleSheet.create({
    container1:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
    },
    cards:{
        padding:10,
        paddingTop:60,
    },
    Realizari:{
        padding:30,
        fontSize:30,    
    },
    
    container2:{
        paddingLeft:20,
        width:"100%",
        flexDirection:"column",
        justifyContent:"center",
    },

    cards2:{
        padding:10,
    },
});
   

export default AccountScreen;