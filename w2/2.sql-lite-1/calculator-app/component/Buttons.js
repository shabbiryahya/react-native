import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import myContex from './myContex';
import { useContext } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Buttons = () => {
  const { value, setValue, bracketopen, setBracketOpen ,mstore, setmStore,upstore, setupStore} = useContext(myContex);

  const handlePress = (val) => {
    if (val == 'C') {
      setValue('0');
    } else if (val == 'CE') {
      setValue('0');
    } else if (val == '1/x') {
      setValue((value) => 1 / value);
    } else if (val == 'x2') {
      setValue((value) => value * value);
    } else if (val == '2rx') {
      setValue((val) => Math.sqrt(val));
    } else if (val == 'MC') {
      setmStore('0');
      setupStore('0');
      setValue('0');
    } else if (val == 'MR') {
    } else if (val == 'M+') {
      let m = parseInt(upstore) + parseInt(mstore);
      m = m.toString();
      setupStore(m);
      setValue(m);
    } else if (val == 'M-') {
      let m = parseInt(upstore) - parseInt(mstore);
      m = m.toString();
      setupStore(m);
      setValue(m);
    } else if (val == 'MS') {
      setmStore(value);
      setupStore(value);
    } else if (val == 'M') {
    } else if (val == '=') {
      try {
        if (
          (value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length
        ) {
          if (
            value.slice(-1) == '+' ||
            value.slice(-1) == '-' ||
            value.slice(-1) == '*' ||
            value.slice(-1) == '/'
          ) {
            setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`);
          } else {
            setValue(`${eval(value.replace('()', '(0)') + '*1')}`);
            //                   ((0)*1)

            1;
          }
        }
      } catch (e) {
        // 678+67()+78=(678+67)=== 4()=4*(0)*1
        setValue('Format Error');
      }
    } else if (val == 'back') {
      setValue(value.slice(0, -1));
    } else if (val == '()') {
      if (value == '0') {
        setValue('(');
        setBracketOpen(true);
      } else if (
        value.slice(-1) == '+' ||
        value.slice(-1) == '-' ||
        value.slice(-1) == '*' ||
        value.slice(-1) == '/'
      ) {
        setValue(value + '(');
        setBracketOpen(true); //678+()
      } else {
        if (bracketopen == true) {
          setValue(value + ')');
          setBracketOpen(false);
        } else {
          setValue(value + '(');
          setBracketOpen(true);
        }
      }
    } else {
      if (value == '0') {
        if (
          val == '+' ||
          val == '-' ||
          val == '*' ||
          val == '/' ||
          val == '.' ||
          val == '%'
        ) {
          setValue(value + val);
        } else {
          setValue(val);
        }
      }
      // console.log(val)
      else if (isNaN(val)) {
        console.log(value.slice(-1));
        if (
          value.slice(-1) == '+' ||
          value.slice(-1) == '-' ||
          value.slice(-1) == '*' ||
          value.slice(-1) == '/' ||
          value.slice(-1) == '.' ||
          value.slice(-1) == '%'
        ) {
          setValue(value.slice(0, -1) + val);
        } else {
          setValue(value + val);
        }
      } else if (!isNaN(val)) {
        setValue(value + val);
      }
    }
  };

  return (
    <SafeAreaView>

<View style={styles.container1} >
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

    <View style={styles.container}>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('%')}
      >
        <Text>%</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('CE')}
      >
        <Text>CE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('C')}
      >
        <Text>C</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('back')}
      >
        <Ionicons name="ios-backspace-outline" size={15} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('1/x')}
      >
        <Text>1/x</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('x2')}
      >
        <Text>x²</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('2rx')}
      >
        <Text>2√x</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('/')}
      >
        <Feather name="divide" size={15} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('7')}
      >
        <Text>7</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('8')}
      >
        <Text>8</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('9')}
      >
        <Text>9</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('*')}
      >
        <Text>X</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('4')}
      >
        <Text>4</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('5')}
      >
        <Text>5</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('6')}
      >
        <Text>6</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('-')}
      >
        <Text>-</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('1')}
      >
        <Text>1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('2')}
      >
        <Text>2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('3')}
      >
        <Text>3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('+')}
      >
        <Text>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('+-')}
      >
        <Text>+/-</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('0')}
      >
        <Text>0</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHover}
        onPress={() => handlePress('.')}
      >
        <Text>.</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonHover, { backgroundColor: 'skyblue' }]}
        onPress={() => handlePress('=')}
      >
        <Text>=</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
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
  container1: {
    // width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  btn: {
    fontSize: 20,
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