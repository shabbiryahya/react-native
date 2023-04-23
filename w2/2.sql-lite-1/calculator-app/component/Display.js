import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import myContex from './myContex';
import { useContext } from 'react';

const Display = () => {
  const { value, setValue, bracketopen, setBracketOpen,mstore, setmStore,upstore, setupStore } = useContext(myContex);

  // console.log(value, setValue, bracketopen, setBracketOpen);
  return (
    <View style={styles.container}>
      <ScrollView
        ref={(ref) => {
          this.scrollView = ref;
        }}
        style={styles.main_screen__display}
        onContentSizeChange={() =>
          this.scrollView.scrollToEnd({ animated: true })
        }
      >
        <Text style={styles.main_screen__display_text}>
          {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    height: 100,
    elevation: 2,
    borderWidth: 2,
    borderColor: '#f0f0f0',
    marginBottom: 20,
  },
  main_screen__display: {
    // elevation: 10,
    // width: '95%',
    // // height: '25%',
    // backgroundColor: 'white',
    // borderRadius: 10,
    // display: 'flex',

    // // alignItems: 'flex-end',
    // // justifyContent: 'flex-end',
    // marginBottom: 10,
    // padding: 10,
},
main_screen__display_text: {
    fontSize: 50,
    textAlign: 'right',
},
});
