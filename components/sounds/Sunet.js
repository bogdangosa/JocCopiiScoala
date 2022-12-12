import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import { PressabilityDebugView } from 'react-native/Libraries/Pressability/PressabilityDebug';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import useSound from '../../hooks/useSound';

export default function Sunet (onPress) {
  const playSound = useSound();

  React.useEffect(()=>{
    //playSound(require('../sounds/corect_sound.mp3'));
  },[])

  return (
    <View>
      <Pressable  onPress={()=>playSound()}>
        <Text >Sunet</Text>
      </Pressable>
    </View>
  );
}

