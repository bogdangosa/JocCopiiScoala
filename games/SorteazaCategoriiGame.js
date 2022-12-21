import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import SelectableButton from "../components/buttons/SelectableButton";
import SelectableFieldButton from "../components/buttons/SelectableFieldButton";
import { colors } from "../themes/color";
import * as SQLite from 'expo-sqlite';

const SorteazaCategoriiGame = ({field, onVerify,onComplete}) => {
  const [SelectedField,setSelectedField] = useState(0);
  const [SelectableButtonsMatrix,setSelectableButtonsMatrix] = useState([]);
  const [StateButtonsMatrix,setStateButtonsMatrix] = useState([]);
  const [Fields,setFields] = useState([]);
  const colorsArray = [colors.purple,colors.orange,colors.brown];
  const DatabaseName = "MainDatabase";
  const tableName = "MainTable";
  const db = SQLite.openDatabase(DatabaseName);


  useEffect(()=>{

    generateGame();
  },[])

  useEffect(()=>{//se apeleaza cand apesi butonul de verificare
    Verify();
  },[onVerify])

  const Verify = ()=>{
    onComplete();
    generateGame();
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
    console.log(Matrix);
    setSelectableButtonsMatrix(Matrix);
    if(field_index<2)
      getVarinte(fields, field_index+1,limits,Matrix);
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
      setSelectableButtonsMatrix(Matrix);
      setStateButtonsMatrix(stateMatrix);

      getVarinte(SelectedFieldsArray,0,Vf,Matrix);

      /*console.log(SelectedFieldsArray);
      console.log(Vf);
      console.log(Matrix);*/
  }

  const ChangeState = (i,j) =>{
    let newMatrix = [...StateButtonsMatrix];

    if(newMatrix[i][j]==0)
      newMatrix[i][j] = SelectedField+1;
    else
      newMatrix[i][j] = 0;
    //console.log(Contor);
    console.log(newMatrix);
    setStateButtonsMatrix(newMatrix);
  }


  return (
    <View style={styles.SorteazaCategoriiGame} >
      <Text style={styles.cerinta}>Sorteaza cuvintele pe categorii</Text>

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
    fontSize: 30,
    width:"100%",
    textAlign:"center",
    fontWeight: "bold",
    marginBottom:20,
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
  }
});

export default SorteazaCategoriiGame;
