
import React,{useState} from "react";
TouchableOpacity
import {Text,View,ScrollView,StyleSheet,Platform,TouchableOpacity} from "react-native";
import interests from "./components/interests";
import { LinearGradient } from 'expo-linear-gradient';
const App=()=>{



  const [count,setCount]=useState(0)
  const [disable,setdisable]=useState(true);




const styles=StyleSheet.create({

  container:{

    marginTop:Platform.select({
      android:50,ios:50,default:50
    }),
    marginLeft:15,
     
  },box:{

     flexDirection:"row",
     width:"90%",
     flexWrap: 'wrap', // imp
     justifyContent:"center",
     
     

  },
  text:{

    fontSize:40,
    fontWeight:"bold"

  },

  button:{
   
  borderWidth: 2,
   borderRadius: 100,
   borderColor: 'gray',
    marginHorizontal: 3, //imp
   marginVertical: 3,
    alignItems: 'center',  // imp

  },
  continueView:[{
borderWidth:0,width:"95%",height:40,marginTop:40,justifyContent:"center",alignItems:"center",borderRadius:40,
backgroundColor:"grey"

  }
  
 ,
count>=5 && {
// borderWidth:0,width:"95%",height:40,marginTop:40,justifyContent:"center",alignItems:"center",borderRadius:40,
backgroundColor: "green"


//  color={["rgba(255,255,255, 0)", "rgba(255,255,255, 1)"]}

  }],

 continueText:[{
    fontSize:20,
    color:"black",
    fontWeight:"500"
  },
  count>=5&& {
  

    color:"white",
  }],
 
 
  
})
  


return (

<View style={styles.container}>


<Text style={styles.text}>Interests</Text>
<View style={{width:"95%"}}>
<Text style={{marginTop:10,marginBottom:20,fontSize:15.15}}> Let everyone know what you're passionate about,by adding it to your profile. </Text>
</View>

<ScrollView style={{height:500}}>
<View style={styles.box}>
  
  {
    interests.map((element,index)=>{

      return  (
       <TouchableOpacity   onPress={()=>{

         setCount(prev=>prev+1);
         if(count>=4)
         {
           setdisable(false);
         }
         console.log(count);
       }} >

       
         <View  style={styles.button}>
            <Text style={{fontSize:20,padding:5}}>{element.interest}</Text>
          </View>
           </TouchableOpacity>
      ) 
    })
  }
         
</View>  


</ScrollView>



 <TouchableOpacity disabled={disable}  >

 {

   disable? 

<View style={styles.continueView}>
  <Text style={styles.continueText}> { count>=5?"continue" :`continue (${count}/5)`}</Text>
</View>

:  

      <LinearGradient colors={['pink', 'orange']}  start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} style={styles.continueView}>

           <Text style={styles.continueText}> { count>=5?"continue" :`continue (${count}/5)`}</Text>
          
        </LinearGradient>
        
 }

 </TouchableOpacity  >
 
 






  
        
        

    

     
       
</View>



)


}




export default App;

