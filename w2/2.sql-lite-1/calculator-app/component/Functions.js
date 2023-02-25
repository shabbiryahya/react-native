import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Function = () => {
  return (
    <View style={styles.container}>
     <TouchableOpacity>
        <Text>MC</Text>
     </TouchableOpacity>
     <TouchableOpacity>
        <Text>MR</Text>
     </TouchableOpacity>
     <TouchableOpacity>
        <Text>M+</Text>
     </TouchableOpacity>
     <TouchableOpacity>
        <Text>M-</Text>
     </TouchableOpacity>
     <TouchableOpacity>
        <Text>MS</Text>
     </TouchableOpacity>
     <TouchableOpacity>
        <Text>M</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Function

const styles = StyleSheet.create({

    container:{
  
        width:"90% ",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"

    }
})