import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import SelectableButton from "../components/buttons/SelectableButton";
import SelectableFieldButton from "../components/buttons/SelectableFieldButton";
import { colors } from "../themes/color";
import * as SQLite from 'expo-sqlite';
import useSound from "../hooks/useSound";
import * as Speech from 'expo-speech';
import RoundButton from "../components/buttons/RoundButton";


const SorteazaCategoriiGame = ({field, onVerify,onComplete}) => {
  const [SelectedField,setSelectedField] = useState(0);
  const [SelectableButtonsMatrix,setSelectableButtonsMatrix] = useState([]);
  const [StateButtonsMatrix,setStateButtonsMatrix] = useState([]);
  const [Fields,setFields] = useState([]);
  const colorsArray = [colors.purple,colors.orange,colors.brown,colors.red,colors.green];
  const DatabaseName = "MainDatabase";
  const tableName = "MainTable";
  const db = SQLite.openDatabase(DatabaseName);
  const playSound = useSound();


  useEffect(()=>{
    generateGame();
  },[])

  useEffect(()=>{//se apeleaza cand apesi butonul de verificare
    Verify();
  },[onVerify])

  const Verify = ()=>{
    if(StateButtonsMatrix==undefined || StateButtonsMatrix==[])
      return;
    let ok = true;
    let newStateMatrix = [...StateButtonsMatrix];
    if(newStateMatrix === [] || newStateMatrix.length == 0){
      console.log("e gol");
      return;
    }
    console.log(newStateMatrix);

    let emptystateMatrix = new Array();
    for(let i = 0 ;i<StateButtonsMatrix.length;i++){
        emptystateMatrix[i] = new Array(0,0);
        for(let j=0;j<=1;j++){
          if(StateButtonsMatrix[i][j]==0){
              ok = false;
              continue;
          }
          if(Fields[StateButtonsMatrix[i][j]-1] != SelectableButtonsMatrix[i][j].type){
              ok = false;
              newStateMatrix[i][j]=4;
          }
          else{
            newStateMatrix[i][j]=5;
          }
          /*console.log("varianta aleasa:"+Fields[StateButtonsMatrix[i][j]-1]);
          console.log("varianta corecta:"+SelectableButtonsMatrix[i][j].type);*/
        }

    }
    setStateButtonsMatrix(newStateMatrix);
    //console.log(newStateMatrix);
    if(ok){
      onComplete();
      playSound("corect");
    }
    else 
      playSound("wrong");
    setTimeout(()=>{
      setStateButtonsMatrix(emptystateMatrix);
      if(ok) generateGame();
    },500)
  }

  const getVarinte = (fields , field_index , limits , Matrix) =>{
    db.transaction(tx => {
      tx.executeSql(`SELECT * FROM ${tableName} WHERE type= "${fields[field_index]}" ORDER BY random() LIMIT ${limits[field_index]}`, null, 
      (txObj, ResultsSet) =>{setData(ResultsSet.rows._array,fields, field_index, limits , Matrix)},
      (txObj, error) => console.log('Error ', error)
      );
    }) // end transaction
  }

  const setData = (resultsArray,fields, field_index, limits, Matrix) =>{
    //console.log(resultsArray);
    let res_index = 0;
    for(let i=0;i<Matrix.length;i++){
        if(Matrix[i][0]==field_index)
          Matrix[i][0] = resultsArray[res_index++];
        if(Matrix[i][1]==field_index)
          Matrix[i][1] = resultsArray[res_index++];
    }
    //console.log(Matrix);
    if(field_index<2)
      getVarinte(fields, field_index+1,limits,Matrix);
    else setSelectableButtonsMatrix(Matrix);
  }


  const generateGame = () =>{
      ///Generate fields
      const FiledsArray = new Array("animal","fruct","leguma","vehicul","culoare","cifra");
      const SelectedFieldsArray = new Array(3).fill("");
      SelectedFieldsArray.forEach((field,index) => {
        const x = Math.floor(Math.random() * FiledsArray.length) 
        SelectedFieldsArray[index] = FiledsArray[x];
        FiledsArray.splice(x,1);
      });
      setFields(SelectedFieldsArray)


      /// Generate Matrix
      let Matrix = new Array();
      let stateMatrix = new Array();
      let Vf = new Array(3).fill(0);
      for(let i = 0;i<3;i++){
        Matrix[i] = new Array();
        stateMatrix[i] = new Array(0,0);
        let x = Math.floor(Math.random() * 3);
        Vf[x]++;
        Matrix[i][0] = x;
        x = Math.floor(Math.random() * 3);
        Matrix[i][1] = x;
        Vf[x]++;
      }
      setStateButtonsMatrix(stateMatrix);

      getVarinte(SelectedFieldsArray,0,Vf,Matrix);

      /*console.log(SelectedFieldsArray);
      console.log(Vf);*/
      //console.log(Matrix);
  }

  const ChangeState = (i,j) =>{
    let newMatrix = [...StateButtonsMatrix];

    if(newMatrix[i][j]==0)
      newMatrix[i][j] = SelectedField+1;
    else
      newMatrix[i][j] = 0;
    //console.log(Contor);
    //console.log(newMatrix);
    setStateButtonsMatrix(newMatrix);
  }

  if(SelectableButtonsMatrix==undefined || StateButtonsMatrix == undefined)
    return <Text> Loading</Text>

    const speak =()=>{
      Speech.speak("Sortează cuvintele pe categorii", {language:"ro"});
    };

  return (
    <View style={styles.SorteazaCategoriiGame} >
      
      <View style={styles.CerintaContainer}>
        <Text style={styles.cerinta}>Sortează cuvintele pe categori</Text>
        <RoundButton icon={require("../assets/sound_icon.png")} onPress={speak}></RoundButton>
      </View>
      <View style={styles.select_fields_container}>
        <SelectableFieldButton color={colorsArray[0]} button_state={SelectedField==0} onPress={()=>setSelectedField(0)}>{Fields[0]}</SelectableFieldButton>
        <SelectableFieldButton color={colorsArray[1]} button_state={SelectedField==1} onPress={()=>setSelectedField(1)}>{Fields[1]}</SelectableFieldButton>
        <SelectableFieldButton color={colorsArray[2]} button_state={SelectedField==2} onPress={()=>setSelectedField(2)}>{Fields[2]}</SelectableFieldButton>
      </View>

      {
        SelectableButtonsMatrix.map((row,indexR)=>{
          return( 
            <View style={styles.MatrixRow} key={indexR}>
              {row.map((button,indexC)=>{
                return <SelectableButton color={colorsArray[StateButtonsMatrix[indexR][indexC]-1]} button_state={StateButtonsMatrix[indexR][indexC]!=0} onPress={()=>ChangeState(indexR,indexC)} key={indexC} more_styles={styles.buton}>{button.name}</SelectableButton>
              })}
            </View>
            )
        })
      }

    </View>
  );
};

const styles = StyleSheet.create({
  SorteazaCategoriiGame: {
    alignItems: "center",
    justifyContent:"center",
    paddingTop: 20,
    marginBottom: 25,
  },
  cerinta: {
    fontSize: 25,
    flex:1,
    textAlign:"center",
    fontWeight: "bold",
    marginRight:20,
  },
  buton: {
    width: 125,
    height: 50,
    margin: 10,
  },
  select_fields_container:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:"90%",
  },
  MatrixRow:{
    flexDirection:"row",
    marginTop:10,
  },
  CerintaContainer:{
    width:"90%",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:40,
  }
});

export default SorteazaCategoriiGame;
