import React, {Component} from 'react';
import { Text, View, TouchableOpacity, TextInput,StyleSheet} from 'react-native';


class Login extends Component{
  render(){
    return(
      <View style={styles.container}>         
        <Text style={styles.header}>Log In</Text>
        <Text style={styles.text}>Please fill this form to login</Text>

        <TextInput 
          style={styles.input1}
          type="text" 
          name="email" 
          placeholder ="  E-mail"               
        />  
           
        

                
        <TextInput 
          secureTextEntry
          style={styles.input1}
          type="password" 
          name= "password" 
          placeholder ="  Password" 
        />
         

        

        <TouchableOpacity style={styles.yellowButton}>
          <Text> Log in</Text>
        </TouchableOpacity>
      </View>
        )
    }
}
  const styles=StyleSheet.create({
    container:{
      top:150,
      width: '100%',
      flex:1,
      alignItems: "center",
      textAlign:"center",
      position: "relative",
    },
  
    signup: { 
      marginTop: '5em',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      color: 'white',
      paddingLeft: 50,
      paddingRight: 50,
          
    },
        
    header: {
      fontSize:40,
      textAlign: 'center',
      color:'#ffa801',
      margin: 10,
    },
        
    yellowButton:{
      backgroundColor: '#ffa801',
      padding: 10,
      margin:10,
      width: 330,
      fontSize: 14,
      borderRadius:10,
      alignItems: 'center',
    },

    input1:{
      width:330,
      margin:10,
      backgroundColor:'#fffde7',
      height: 40,
      color:'black',
      borderRadius:10,
    },

    please:{
      fontSize: 20,
      margin:20,
    },

    text1:{
      fontSize: 20,
      left:'30%',
    },

    text4:{
      left:'30%',
      fontSize: 20,
      padding: 15,
    },
    
    text:{
      fontSize: 20,
    },
      

  })

export default Login;