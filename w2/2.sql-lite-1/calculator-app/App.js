import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import Navbar from './component/Navbar';
import Display from './component/Display';
import Functions from './component/Functions';
import Buttons from './component/Buttons';
import myContex from "./component/myContex";



export default function App() {

  const [value, setValue] = useState('0')
const [bracketopen, setBracketOpen] = useState(false)

const [mstore, setmStore]=useState('0');
  const [upstore, setupStore]=useState('0');

  const [isLoading,setLoading]=useState(false);

  useEffect(()=>{

    setLoading(true);
    setTimeout(() => {

      setLoading(false)
      
    }, 2000);

  },[])

  return (

   
   isLoading?<SafeAreaView style={styles.container}>

    <View>
     <Text>Calculator By Shabbir</Text> 
    </View>
   </SafeAreaView>
   
   :<View style={styles.container}>

   

    
    <Navbar/>

    <myContex.Provider value={{value,setValue,bracketopen,setBracketOpen,mstore, setmStore,upstore, setupStore}}>
    <Display/>
    {/* <Functions/> */}
    <Buttons/>

    </myContex.Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    marginTop :60,
  },
});
