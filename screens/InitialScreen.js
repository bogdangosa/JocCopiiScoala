import { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import SimpleButton from "../components/buttons/SimpleButton";
import CircleAvatar from "../components/cards/CircleAvatar";
import {colors} from "../themes/color";

const InitialScreen = ({navigation}) => {
  const [SliderState,setSliderState] = useState(0);
  


  const nextSlider = ()=>{
    if(SliderState==2)
      navigation.pop();

    setSliderState(SliderState+1);
    console.log(SliderState);
  }

  return (
    <View style={styles.container}>

        {SliderState==0?

        <View style={styles.data_container}>{/** Prima pagina **/}
          <Text style={styles.Title}>Bine ai venit in <Text style={styles.accent}>EduPlay</Text></Text>
          <View style={styles.FirstPageContent}>
            <Image style={styles.FirstImage}  source={require("../assets/panda_se_uita.png")}></Image>
            <Text style={styles.Text}>O aplicatia <Text style={styles.accent}>interactiva</Text> si <Text style={styles.accent}>educativa</Text> care ajuta copii sa isi dezvolte abilitatile de vorbire, scriere si vocabularul.</Text>
          </View>
        </View>

        :(SliderState==1?
        <View style={styles.data_container}>{/** A doua pagina **/}
          <Text style={[styles.Title,styles.Title2]}>Pentru a incepe alegeti un <Text style={styles.accent}>avatar</Text> si un <Text style={styles.accent}>nume</Text></Text>
          <CircleAvatar image={require("../assets/4.png")} style={styles.CircleAvatar}/>
        </View>
        :
        <View style={styles.data_container}>{/** A treia pagina **/}
          <Text style={[styles.Title,styles.Title2]}> Panda iti ureaza <Text style={styles.accent}>succes</Text> in calatoria ta spre cunoastere</Text>
          <Image
            style={styles.BaftaPandaImage}
            source={require("../assets/PozaPandaFelicitari.png")}/>

        </View>)}


        <SimpleButton onPress={()=>nextSlider()} color={colors.blue}>{SliderState==2?"Incepe":"Continua"}</SimpleButton>

        <View style={styles.slider_container}>
            <View style={SliderState==0?[styles.slider_indicator,styles.slider_selected]: styles.slider_indicator}/>
            <View style={SliderState==1?[styles.slider_indicator,styles.slider_selected]: styles.slider_indicator}/>
            <View style={SliderState==2?[styles.slider_indicator,styles.slider_selected]: styles.slider_indicator}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems:"center",
    height:"100%",
    backgroundColor:colors.white,
  },
  data_container:{
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    width:"100%",
  },
  Title:{
    fontSize:40,
    textAlign:"center",
    width:"80%",
    fontWeight:"bold",
    marginBottom:30,
  },
  Title2:{
    fontSize:30,
  },
  accent:{
    color:colors.blue,
  },
  slider_container:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
  },
  slider_indicator:{
      width:40,
      height:10,
      marginHorizontal:10,
      borderRadius:50,
      marginBottom:40,
      backgroundColor:colors.gray,

  },
  slider_selected:{
    backgroundColor:colors.blue,
  },

  FirstPageContent:{
    flexDirection:"row",
    width:"90%",
  },

  Text:{
    fontSize:15,
    textAlign:"center",
    color:colors.gray,
    flex:1,
  },
  FirstImage:{
    marginTop:30,
    height:"300%",
    resizeMode:"contain",
    flex:1,
  },

  CircleAvatar:{
      width:140,
      height:140,
  },

  BaftaPandaImage:{
    height:"50%",
    resizeMode:"contain",
  }

});

export default InitialScreen;
