import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import myContex from './myContex'
import { useContext } from 'react'

const Function = () => {

  const {value,setValue,bracketopen,setBracketOpen,mstore, setmStore,upstore, setupStore}=useContext(myContex);

  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={() => handlePress('MC')}>
        <Text style={styles.btn}>MC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('MR')}>
        <Text style={styles.btn}>MR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('M+')}>
        <Text style={styles.btn}>M+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('M-')}>
        <Text style={styles.btn}>M-</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('MS')}>
        <Text style={styles.btn}>MS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('M')}>
        <Text style={[styles.btn,{alignItems:"center"}]}>
          M<AntDesign  name="down" size={15} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Function;

const styles = StyleSheet.create({
  container1: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  btn: {
    fontSize: 20,
  },
});
