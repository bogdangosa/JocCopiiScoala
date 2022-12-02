import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SelectableButton from "../components/buttons/SelectableButton";

const LitereMariMiciGame = () => {
    const [ButtonValueMatrix,setButtonValueMatrix] = useState([]);
    const [ButtonState,setButtonState] = useState(false);
    const [Contor,setContor] = useState(0);
    

    useEffect(()=>{
        createMatrix();
    },[])

    const createMatrix = () =>{
        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let Vf = new Array(26).fill(0);
        let n = 4;
        let Matrix = new Array();
        let StateMatrix = new Array();
        for(let i=0;i<n;i++){
            Matrix[i] = new Array();
            StateMatrix[i] = new Array();
            for(let j=0;j<n;j++){
                let x = Math.floor(Math.random() * 26);
                if((i)*4+j<8){
                    while(Vf[x]!=0)
                        x = Math.floor(Math.random() * 26);
                    Vf[x]++;
                }
                else{
                    for(let l=0;l<26;l++){
                        if(Vf[l]!=0){
                            x = l+26;
                            Vf[l]=0;
                            break;
                        }
                    }
                    //x=z+26;
                }
                Matrix[i][j] = {value:characters.charAt(x),state:false};
            }
        }
        setButtonValueMatrix(Matrix);
    }

    const ChangeState = (i,j) =>{
        if(Contor==2 && !ButtonValueMatrix[i][j].state)return;
        let newMatrix = [...ButtonValueMatrix];
        newMatrix[i][j].state=!newMatrix[i][j].state;
        if(newMatrix[i][j].state)
            setContor(Contor+1);
        else 
        setContor(Contor-1);
        console.log(Contor);
        setButtonValueMatrix(newMatrix);
    }

  return (
    <View style={styles.LitereMariMiciGame} >
      <Text style={styles.Cerinta}>Selecteaza perechile de litere mari si mici</Text>
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
    LitereMariMiciGame:{
        alignItems:"center",
        marginTop:30,
    },
    LitereContainer:{
        width:"60%"
    },
    LitereRowContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        marginBottom:5,
    },
    Cerinta:{
        width:"90%",
        color:"#333",
        fontSize:25,
        textAlign:"center",
        marginBottom:40,
    }
});

export default LitereMariMiciGame;
