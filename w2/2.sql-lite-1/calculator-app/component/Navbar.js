import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import  Octicons from "react-native-vector-icons/Octicons"

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.div1}>
      <Icon name="reorder-three-outline" size={30} color="black"/>
      <Text style={{fontSize:25}}>Standard</Text>
      <MaterialCommunityIcons name='picture-in-picture-top-right-outline' size={30} color="black"/>
      </View>
      

<View style={styles.div2} >
<Octicons name='history' size={25} color="black" />

</View>

    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  container:{
   
    flexDirection:"row",
    width:"90%" ,
    alignItems:"center",
    justifyContent:"space-between",
    
    
   
  
   

  },
  div1:{

    width:"80%" ,
    flexDirection:"row",
    justifyContent:"flex-start",
    gap:15,

  },
  div2:{

  }
})