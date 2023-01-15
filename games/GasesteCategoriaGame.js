import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import SelectableButton from "../components/buttons/SelectableButton";
import SelectableFieldButton from "../components/buttons/SelectableFieldButton";
import { colors } from "../themes/color";
import * as SQLite from 'expo-sqlite';
import useSound from "../hooks/useSound";

const GasesteCategoriaGame = ({field, onVerify,onComplete}) => {
  const [ButtonValueMatrix,setButtonValueMatrix] = useState([]);
  const [Cuvinte,setCuvinte] = useState([]);
  const [SolutionAdress,setSolutionAdress] = useState();
  const DatabaseName = "MainDatabase";
  const tableName = "MainTable";
  const db = SQLite.openDatabase(DatabaseName);
  const playSound = useSound();

 
  useEffect(()=>{//se apeleaza cand se creeaza jocul
    getCuvinte();
  },[])

  useEffect(()=>{//se apeleaza cand apesi butonul de verificare
      Verify();
  },[onVerify])

  const Verify = () =>{
    if(Cuvinte.length == 0)
      return;
    const Matrix = [...ButtonValueMatrix];
    let ok = true;
    let solution = SolutionAdress;
    console.log(SolutionAdress);
    for(let i=0;i<Cuvinte[0].name.length;i++){
      let x,y;
      if(solution.direction){
        x = solution.x;
        y = i+solution.y;
      }
      else{
        x = i+solution.y;
        y = solution.x;
      }
      if(!Matrix[y][x].state)
        ok=false;
      //console.log(Matrix[i+solution.y][solution.x]);
    }

    if(ok){
      playSound("corect");
      onComplete();
      getCuvinte();
    }
  }

  const getCuvinte = () =>{
    db.transaction(tx => {
      tx.executeSql(`SELECT * FROM ${tableName} WHERE type= "${field}" AND LENGTH(name) <= 5 ORDER BY random() LIMIT 3`, null, 
      (txObj, ResultsSet) => createMatrix(ResultsSet.rows._array),  ///declar variabila setCuvant care ia valoarea primului element din vectorul care e sortat random 
      (txObj, error) => console.log('Error ', error)
      );
    }) 
  }

  const createMatrix = (cuvinte_array) =>{
    setCuvinte(cuvinte_array)

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZĂÎȘȚÂ";
    let n = 5;
    let Matrix = new Array();
    for(let i=0;i<n;i++){
      Matrix[i] = new Array();
      for(let j=0;j<n;j++){
        let x = Math.floor(Math.random() * 31);
        Matrix[i][j] = {value:characters.charAt(x),state:false};
      }
    }


    let direction = Math.floor(Math.random() * 2);
    let x = Math.floor(Math.random() * 5);
    console.log(cuvinte_array[0].name);
    let y = Math.floor(Math.random() * (5-cuvinte_array[0].name.length));
    console.log(y);

    for(let i=0;i<cuvinte_array[0].name.length;i++){
      if(direction)
        Matrix[i+y][x]={value:cuvinte_array[0].name[i],state:false};
      else
        Matrix[x][i+y]={value:cuvinte_array[0].name[i],state:false};

      //console.log(cuvinte_array[0].name[i]);
    }
    setButtonValueMatrix(Matrix);
    setCuvinte(cuvinte_array)
    setSolutionAdress({x:x,y:y,direction:direction});
  }

  const ChangeState = (i,j) =>{
    let newMatrix = [...ButtonValueMatrix];
    newMatrix[i][j].state = !newMatrix[i][j].state;
    setButtonValueMatrix(newMatrix);
}

  return (
    <View style={styles.GasesteCategoriaGame} >
      <Text style={styles.cerinta}>Gaseste ce {field} este ascuns</Text>

      <View style={styles.LitereContainer}>
        {ButtonValueMatrix.map((button_row,indexR)=>{
              return(
                  <View style={styles.LitereRowContainer} key={indexR}>
                      {button_row.map((button,indexC)=>{
                          return <SelectableButton button_state={button.state} onPress={()=>ChangeState(indexR,indexC)} key={indexC}>{button.value}</SelectableButton>
                      })}
                  </View>
              )
          })}
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    GasesteCategoriaGame: {
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
  LitereContainer:{
      width:"75%"
  },
  LitereRowContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      width:"100%",
      marginBottom:5,
  },

});

export default GasesteCategoriaGame;
