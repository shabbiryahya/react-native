import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"

const Buttons = () => {
  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.buttonHover} >
        <Text>%</Text>
     </TouchableOpacity  >
     <TouchableOpacity style={styles.buttonHover}>
        <Text>CE</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.buttonHover}>
        <Text>C</Text>
     </TouchableOpacity >
     <TouchableOpacity style={styles.buttonHover}>
     <Ionicons name='ios-backspace-outline' size={25} color="black" />
     </TouchableOpacity>

     <TouchableOpacity style={styles.buttonHover} >
        <Text>%</Text>
     </TouchableOpacity  >
     <TouchableOpacity style={styles.buttonHover}>
        <Text>CE</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.buttonHover}>
        <Text>C</Text>
     </TouchableOpacity >
     <TouchableOpacity style={styles.buttonHover}>
     <Ionicons name='ios-backspace-outline' size={25} color="black" />
     </TouchableOpacity>

    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
    // style={{borderWidth:1,padding:5,width:30,alignItems:"center"}}
    container:{

        marginTop:20,
        width:"95%" ,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        flexWrap:'wrap',

    }
    ,

    buttonHover: {
        marginTop: 10,
        borderRadius:25,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 50,
        paddingRight: 50,
        shadowColor: 'grey',
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 20 ,
        shadowOffset : { width: 1, height: 5},
        backgroundColor: 'white',
        color: '#FFFFFF'
      }
})