import { StyleSheet, Text, View, Image, TextInput, ScrollView, SafeAreaView } from "react-native";

//import { Switch } from "react-native-switch";
import { Switch } from "react-native-gesture-handler";

const SwitchCard =({text})=>{
   
    return (
        <View style={styles.card}> 
            
            <View style={styles.portiuni}>
                <Text style={styles.Texte}>Sound</Text>

                <Switch
                trackColor={{false: 'green', true: '#2FEA63'}}
                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                activeText={'On'}
                inActiveText={'Off'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
            </View>
        </View>
)};

    
const styles = StyleSheet.create({
   
});
    
export default SwitchCard;