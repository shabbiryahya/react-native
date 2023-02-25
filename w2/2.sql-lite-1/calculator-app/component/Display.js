import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Display = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  )
}

export default Display

const styles = StyleSheet.create({

    container:{
        marginTop:20,
        width:"100%" ,
        height:100 ,
        elevation:2,
        borderWidth:2,
        borderColor:'#f0f0f0',
        marginBottom:20,


    }
})