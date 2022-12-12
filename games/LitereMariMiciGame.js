import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SelectableButton from "../components/buttons/SelectableButton";
import {colors} from "../themes/color";
import useSound from "../hooks/useSound";

const LitereMariMiciGame = ({onVerify,onComplete}) => {
    const [ButtonValueMatrix,setButtonValueMatrix] = useState([]);
    const [ButtonState,setButtonState] = useState(false);
    const [Contor,setContor] = useState(0);
    const [ContorRaspunsuriCorecte,setContorRaspunsuriCorecte] = useState(1);
    
    const playSound = useSound();

    useEffect(()=>{//se apeleaza cand se creeaza jocul
        createMatrix();
    },[])

    useEffect(()=>{//se apeleaza cand apesi butonul de verificare
        Verify();
    },[onVerify])

    
    const ResetWrongAnswers = (i1,j1,i2,j2) =>{
        const newMatrix = [...ButtonValueMatrix];
        newMatrix[i1][j1].state=false;
        newMatrix[i2][j2].state=false;
        setButtonValueMatrix(newMatrix);
    }

    const Verify = () =>{
        let litera1=null,litera2=null;
        let i1,i2,j1,j2;
        ButtonValueMatrix.forEach((row,i) => {
            row.forEach((button,j) => {
                if(button.state==1){
                    if(litera1==null){
                        litera1=button.value;
                        i1=i;
                        j1=j;
                    }
                    else{
                        litera2=button.value;
                        i2=i;
                        j2=j;
                    }
                }

            });
        });
        if(litera1!=null && litera2!=null){
            //console.log(litera1.toLowerCase() + litera2.toLowerCase());
            if(litera1.toLowerCase()==litera2.toLowerCase()){
                const newMatrix = [...ButtonValueMatrix];
                newMatrix[i1][j1].state=2;
                newMatrix[i2][j2].state=2;
                setButtonValueMatrix(newMatrix);
                setContorRaspunsuriCorecte(contor=>contor+1);
                setContor(0);
                playSound();
                
            }
            else{
                const newMatrix = [...ButtonValueMatrix];
                newMatrix[i1][j1].state=3;
                newMatrix[i2][j2].state=3;
                setButtonValueMatrix(newMatrix);
                setContor(0);
                setTimeout(()=>ResetWrongAnswers(i1,j1,i2,j2),700);
            }

        }
        console.log(ContorRaspunsuriCorecte);
        if(ContorRaspunsuriCorecte==8)
            onComplete();
    }


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
        if(ButtonValueMatrix[i][j].state==2)return;
        if(Contor==2 && !ButtonValueMatrix[i][j].state)return;
        let newMatrix = [...ButtonValueMatrix];
        newMatrix[i][j].state=!newMatrix[i][j].state;
        if(newMatrix[i][j].state)
            setContor(Contor+1);
        else 
        setContor(Contor-1);
        //console.log(Contor);
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
        color:colors.black,
        fontSize:25,
        textAlign:"center",
        marginBottom:40,
    }
});

export default LitereMariMiciGame;
