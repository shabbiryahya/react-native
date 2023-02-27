import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Function = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.btn}>MC</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btn}>MR</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btn}>M+</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btn}>M-</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btn}>MS</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[styles.btn,{alignItems:"center"}]}>
          M<AntDesign  name="down" size={15} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Function;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  btn: {
    fontSize: 20,
  },
});
