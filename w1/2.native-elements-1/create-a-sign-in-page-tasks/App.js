import React,{useState} from "react";
import {View,ScrollView,Text,SafeAreaView,StyleSheet, TextInput,TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const App=()=>{

 const [email, setEmail] = useState('');
// const [emailValidError, setEmailValidError] = useState('');


   const [password,setPassword]=useState("");
  //  const [passwordValidError,setPasswordValidError]=useState("");

   const[isValidEmail,setIsValidEmail]=useState(false);
   const[isValidPassword,setIsValidPassword]=useState(false)

   console.log(isValidEmail,isValidPassword);

// const[valid,isValid]=useState(false);

// if(isValidEmail&&isValidPassword)
// {
//   isValid(true);
// }


  const styles=StyleSheet.create({

    container:{
      marginTop:50,
     

    } ,
    input:{
 
    
     borderWidth:1,
     marginHorizontal:15,
     marginVertical:10,
     padding:10,
     borderRadius:20

    },
    button1:{

         borderWidth:1,
     marginHorizontal:15,
     marginVertical:10,
     padding:10,
     borderRadius:20,
     justifyContent:"center",
     alignItems:"center"

    },
    error:{
     
      
marginHorizontal:15,
textAlign:"center"
      

    },
    

  })

const handleValidEmail = val => {
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

if (val.length === 0) {
  // setEmailValidError('email address must be enter');
  setIsValidEmail(false);
} else if (reg.test(val) === false) {
  // setEmailValidError('enter valid email address');
  setIsValidEmail(false);
} else if (reg.test(val) === true) {
  // setEmailValidError('');
  setIsValidEmail(true);
}

// console.log(emailValidError);
};

const handlePassword=val=>{


 const  re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
if (val.length === 0) {
 
  setIsValidPassword(false);
} else if (re.test(val) === false) {
 
  setIsValidPassword(false);
} else if (re.test(val) === true) {

  setIsValidPassword(true);
}


 

  
}


  return(

    <SafeAreaView style={styles.container}>

    <TextInput inputMode="email" keyboardType="email-address" placeholder="Enter Email" style={styles.input} value={email} autoCorrect={false}
    autoCapitalize="none"  onChangeText={value => {
      setEmail(value);
      handleValidEmail(value);
    }}/>

    <TextInput secureTextEntry={true} placeholder="Enter password" style={styles.input}  onChangeText={value=>{
      setPassword(value);
      handlePassword(value);
    }}
        value={password} />

     <LinearGradient colors={['#FD3D6E', 'pink','orange']}  start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} style={styles.button1}>
       <Text>Login</Text>
     </LinearGradient >


    <LinearGradient colors={['#FD3D6E', 'pink','orange']}  start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} style={styles.button1}>
    <Text>Login With Google</Text>
    </LinearGradient >

    <LinearGradient colors={['skyblue', 'white']}  start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} style={styles.button1}>
    <Text>Login With Facebook</Text>
   </LinearGradient >

   <View style={styles.error}>

    {!isValidEmail || !isValidPassword ?<Text style={{color:"red",textAlign:"center"}}>In-Active Login Button</Text>:null}
   </View>

  
<TouchableOpacity style={!isValidEmail || !isValidPassword? [styles.button1,styles.container,{backgroundColor:"grey"}] :[styles.button1,styles.container,{backgroundColor:"orangered"}]} disabled={!isValidEmail || !isValidPassword} >
<Text>Login</Text>
</TouchableOpacity>

    </SafeAreaView>
  )

}

export default App;