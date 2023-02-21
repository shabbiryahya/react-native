import React from "react";
import {Text,View,SafeAreaView,ScrollView,StyleSheet,Image,TextInput} from "react-native";
import { AntDesign } from '@expo/vector-icons';


const App=()=>{


  const styles=StyleSheet.create({

    container:{
     marginTop:50,
    }
  })

  return(
     <SafeAreaView style={styles.container}>
     <View>
     <Image source={{uri:"https://media.licdn.com/dms/image/D4D03AQHmMuOUUh0bTA/profile-displayphoto-shrink_800_800/0/1676873754104?e=1682553600&v=beta&t=iDeOGoQ02n-oXZK9yfa_IZpj4dDu1mYkjl1nMbZF-WE"}}/>
     <View>
<AntDesign name="search1" size={24} color="black" />
<TextInput placeholder="Search" />


     </View>
     </View>
    </SafeAreaView>
  )

}
export default App;