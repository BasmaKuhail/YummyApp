import React, {Component} from 'react';
import { Text, View, TouchableOpacity, TextInput,StyleSheet, ImageBackground} from 'react-native';


class Login extends Component{
  render(){
    return(
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={require('../assets/back2.jpeg')}
      >
      <View style={styles.container}>         
        <Text style={styles.header}>Log In</Text>
        <Text style={styles.line}>________________________________</Text>
        <Text style={styles.text}>Please fill this form to login</Text>

        <TextInput 
          style={styles.input1}
          type="text" 
          name="email" 
          placeholder ="  E-mail"               
        />  
                
        <TextInput 
          secureTextEntry
          style={styles.input2}
          type="password" 
          name= "password" 
          placeholder ="  Password" 
        />
         

        

        <TouchableOpacity style={styles.yellowButton}>
          <Text> Log in</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
        )
    }
}
  const styles=StyleSheet.create({
    container:{
      top:150,
      left:20,
      flex:1,
      maxWidth:370,
      maxHeight:400,
      alignItems: "center",
      textAlign:"center",
      position: "relative",
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius:10,
    },
    header: {
      fontSize:50,
      textAlign: 'center',
      right:105,
      color:'#fffde7',
      marginTop: 50,
    },

    line:{
      color:'#f9d03a',
      marginTop: -20,
      fontSize:20,
    },

    text:{
      fontSize: 20,
      color:'#fffde7',
      marginTop: 20,
      right:50,
    },
   
    input1:{
      width:330,
      margin:10,
      backgroundColor:'#fffde7',
      height: 40,
      color:'black',
      borderRadius:5,
      marginTop: 30,
    },

    input2:{
      width:330,
      margin:10,
      backgroundColor:'#fffde7',
      height: 40,
      color:'black',
      borderRadius:5,
      marginTop: 10,
    },
       
    yellowButton:{
      backgroundColor: '#f9d03a',
      padding: 10,
      margin:10,
      width: 330,
      fontSize: 14,
      borderRadius:5,
      alignItems: 'center',
    },
    text1:{
      fontSize: 20,
      left:'30%',
      color:'#fffde7',
    },

    
      

  })

export default Login;