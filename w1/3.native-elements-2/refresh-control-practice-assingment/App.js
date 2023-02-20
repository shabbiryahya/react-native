import React,{useState} from "react"
import {ScrollView,View,Text,StyleSheet,Image,SafeAreaView,TouchableOpacity,RefreshControl} from "react-native"

const App=()=>{

  const [data,setData]=useState([]);
  const[refreshing,setRefreshing]=useState(false);

const images=[{
image:'https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_960_720.jpg'
},{
  image:'https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_960_720.jpg'
},{
image:'https://cdn.pixabay.com/photo/2023/01/05/22/35/flower-7700011_960_720.jpg',
},{
image:'https://cdn.pixabay.com/photo/2023/02/06/01/14/superb-fairywren-7770904_960_720.jpg'
},{
image:'https://cdn.pixabay.com/photo/2023/02/04/09/20/castle-7766794_960_720.jpg'
}]

  // console.log(data);
  // console.log("hi");

  const onRefresh=()=>{
setRefreshing(true);
setData([...images])
setRefreshing(false);



  }

  const deleteData=(index)=>{
console.log(index);

data.splice(index,1);

console.log(data);
setData([...data]);

}

  const styles=StyleSheet.create({

    container:{

      marginTop:60,
      justifyContent:"center",
      alignItems:"center"

    },
  
    heading:{

  fontSize:30,
  fontWeight:"bold"
    },
 
    img:{

   width:200,
   height:200,
   marginVertical:10,
    }
  })

  return( <SafeAreaView  style={styles.container}>

   <ScrollView
       
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['red']} tintColor="green" title="refresing" />
        }  >
 
 

  

   <View >
   <Text style={styles.heading}>List of Items</Text>
   </View>

 {  data.length===0 && <View >
   <Text style={{textAlign:"center"}}> No Items</Text>
   </View>}

<ScrollView >
  
   {

     data.map((element,index)=>{
      //  console.log(element.image)
     
      return(
       <TouchableOpacity onPress={()=>{

         deleteData(index);
       }}>
        <Image style={styles.img} source={{
          uri: element.image,
        }}/> 
        </TouchableOpacity>
     )

     })
   }
   </ScrollView >
   </ScrollView>
  
  </SafeAreaView>)

 


}
export default App;