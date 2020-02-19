import React, {Component} from 'react';
import { Text, View, TouchableOpacity, TextInput,StyleSheet, ImageBackground} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'

class SignUp extends Component{
  render(){

    return(
      <ImageBackground
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
        source={require('../assets/background.png')}
      >
        <Text style={styles.header}>Sign Up</Text>
        <Text style={styles.text}>Please fill this form to create an account</Text>

        <TextInput 
          style={styles.input1}
          type="text" 
          name="email" 
          placeholder ="  E-mail"               
        />  
           
        <TextInput 
          style={styles.input1}
          type="text" 
          name= "username" 
          placeholder ="  Username" 
        />

                
        <TextInput 
          secureTextEntry
          style={styles.input1}
          type="password" 
          name= "password" 
          placeholder ="  Password" 
        />
         

        <Text style={styles.text1}>SignUp as:</Text>
        <View style={styles.radio}>
          <RadioButton
            type='radio'            
          >
           <Text>cheif</Text> 
            </RadioButton>
         
        </View>
        

        <TouchableOpacity style={styles.yellowButton}>
          <Text> Sign up</Text>
        </TouchableOpacity>
        </ImageBackground>
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
      fontSize:60,
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
    
    radio:{
      left:'30%',
      flexDirection:'column-reverse'

    }

  })

export default SignUp;