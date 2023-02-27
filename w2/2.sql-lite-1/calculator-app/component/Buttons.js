import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Buttons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonHover}>
        <Text>%</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>CE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>C</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Ionicons name="ios-backspace-outline" size={15} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>1/x</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>x²</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>2√x</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Feather name="divide" size={15} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>7</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>8</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>9</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>X</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>5</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>6</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>-</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>+/-</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>0</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHover}>
        <Text>=</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  // style={{borderWidth:1,padding:5,width:30,alignItems:"center"}}
  container: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  buttonHover: {
    marginTop: 10,
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: 'grey',
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 20,
    shadowOffset: { width: 5, height: 5 },
    backgroundColor: 'white',
    color: '#FFFFFF',
    marginHorizontal: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
