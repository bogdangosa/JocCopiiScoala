import { useState,useEffect } from 'react';

const useSound =()=>{

    const [sound, setSound] = useState();
    const [sound_adress,setSoundAdress] = useState(null);

    useEffect(async()=>{                                                    ///de fiecare data cand se schimba al doilea parametru, se apeleaza functia (primul parametru)
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(sound_adress);
  
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync();
    },[sound_adress])
  
    useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);

    return setSoundAdress;
}

export default useSound;