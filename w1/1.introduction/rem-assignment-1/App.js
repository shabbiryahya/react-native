import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useState} from "react";
import { LinearGradient } from 'expo-linear-gradient';


const interests = [
  'trying new things','Art Gallery','To go mad','cafe hopping','boxing','Cause','Fencing','gin Tonic','to cook','environmentalism','League of Legends','road trips','Hockey','reggaeton','DIY','virtual reality',
'mounted','Art','Tea', 'tarot','Theater','Proud','climbing','vr room',
'online shopping','indoor activities','social development','Astrology','pims','blogging','couchsurfing','online broker','the choir','road trips','Hockey','reggaeton','DIY','virtual reality',
'mounted','Art','Tea', 'tarot','Theater','Proud','climbing','vr room',
'online shopping','indoor activities','social development','Astrology','pims','blogging','couchsurfing','online broker','the choir'
];

const interest1=[{
  interest:"trying new things",
  isSelected:false,
},{
   interest:"Art Gallery",
  isSelected:false,
},{
   interest:"To go mad",
  isSelected:false,
},{
   interest:"cafe hopping",
  isSelected:false,
},
{
   interest:"boxing",
  isSelected:false,
},{
   interest:"Cause",
  isSelected:false,
}
,{
   interest:"Fencing",
  isSelected:false,
},
{
   interest:"gin Tonic",
  isSelected:false,
},
{
   interest:"to cook",
  isSelected:false,
},{
  interest:"environmentalism",
  isSelected:false,
},{
  interest:"to cook",
  isSelected:false,
},{
  interest:"League of Legends",
  isSelected:false,
},{
  interest:"road trips",
  isSelected:false,
},
{
  interest:"Hockey",
  isSelected:false,
},
{
  interest:"reggaeton",
  isSelected:false,
},
{
  interest:"DIY",
  isSelected:false,
},
{
  interest:"virtual reality",
  isSelected:false,
},
{
  interest:"mounted",
  isSelected:false,
},
{
  interest:"Art",
  isSelected:false,
},
{
  interest:"Tea",
  isSelected:false,
},
{
  interest:"tarot",
  isSelected:false,
},
{
  interest:"Theater",
  isSelected:false,
},
{
  interest:"Proud",
  isSelected:false,
},
{
  interest:"climbing",
  isSelected:false,
},
{
  interest:"vr room",
  isSelected:false,
},
{
  interest:"online shopping",
  isSelected:false,
},
{
  interest:"indoor activities",
  isSelected:false,
},
{
  interest:"social development",
  isSelected:false,
},
{
  interest:"Astrology",
  isSelected:false,
},
{
  interest:"pims",
  isSelected:false,
},
{
  interest:"blogging",
  isSelected:false,
},
{
  interest:"couchsurfing",
  isSelected:false,
},
{
  interest:"online broker",
  isSelected:false,
},
{
  interest:"the choir",
  isSelected:false,
},
]
const App = () => {

  const [count,setCount]=useState(0);
  const [data,setData]=useState(interest1);

  const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 25,
  },
  interest: {
    marginTop: 10,
  },

  interestText: {
    fontSize: 27,
  },
  scroll: {
    marginTop: 10,
    
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
    // height:450,

    
  },
  btn:{
    
     borderWidth:1,
     padding:7,
    
     marginVertical:5,
     marginHorizontal:5,
     borderRadius:50,

  },
  selectedBtn:{
      borderWidth:2,
     padding:7,
    
     marginVertical:5,
     marginHorizontal:5,
     borderRadius:50,
    borderColor:"blue",
  }
  ,cont:[{
    
   
padding:10,
width:170,
justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    backgroundColor:"grey",
    marginTop:10,
    marginBottom:10,
    marginLeft:"28%",
    
   

  },
//  if we are not using gradient
  count>=5&&{
    backgroundColor:"orange",

  }
  ],
    gradient:{
// width: 170,
//     height: 50,
padding:10,
width:170,
justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    backgroundColor:"grey",
    marginTop:10,
    marginBottom:10,
    marginLeft:"28%",
  },
  contText:[{
fontSize:20,
color:"white",
  },
//  if we are not using gradient

  count>=5&&{

color:"black",
  }
  ]
});


const changeData=(ind)=>{

  // console.log(index);
  const updatedData=data.map((element,index)=>{

       return index===ind?{...element,isSelected:!element.isSelected}:element
  })

  setData(updatedData);
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.interest}>
        <Text style={styles.interestText}>Interests</Text>
      </View>

      <View style={styles.interest}>
        <Text style={{ fontSize: 17 }}>
          Let everyone know what you're passionate about, by adding this to your
          profile
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={ styles.interest}>
        <View style={styles.scroll}>
        {data.map((element,index) => {
          return (
            <TouchableOpacity style= {element.isSelected?styles.selectedBtn:styles.btn} onPress={()=>{
              changeData(index);
              if(!element.isSelected)
              {
 setCount(prev=>prev+1);
              }
              else
              {
 setCount(prev=>prev-1);

              }
             
            }}>
              <Text style={{fontSize:22}}>{element.interest.charAt(0).toUpperCase() +element.interest.slice(1)}</Text>
            </TouchableOpacity>
          );
        })}
        </View>
      </ScrollView>

   
 {
   count>=5? <LinearGradient
       colors={[ '#FF69B4', '#FF7F50','#FFA07A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
      <Text style={styles.contText}>CONTINUE({count}/5)</Text>
      </LinearGradient>: <TouchableOpacity style={styles.cont} disabled={count<5?true:false}>
        <Text style={styles.contText} >CONTINUE({count}/5)</Text>
      </TouchableOpacity>
 }
     

      
     


    </SafeAreaView>
  );



  
};


export default App;
