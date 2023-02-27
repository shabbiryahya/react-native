import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

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

  return (
    <View style={styles.container}>

   

    
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
