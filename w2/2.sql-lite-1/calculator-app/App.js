import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navbar from './component/Navbar';
import Display from './component/Display';
import Functions from './component/Functions';
import Buttons from './component/Buttons';


export default function App() {
  return (
    <View style={styles.container}>
    <Navbar/>
    <Display/>
    <Functions/>
    <Buttons/>
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
