import React, {Component} from 'react';
import { Text, View, TouchableOpacity, TextInput,StyleSheet, ImageBackground} from 'react-native';
import  {RadioButton, RadioButtonInput, RadioButtonLabel, RadioForm} from 'react-native-simple-radio-button'

class Login extends Component{
  state={
    email:"",
    username:"",
    password:"",
    

}

addUser = ()=>{
    const{email, username, type, password}= this.state; 

    const db = firebase.firestore();
    console.log(email,password ,"email,password")
    
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
        let user  =  firebase.auth().currentUser
        db.collection("users").doc(user.uid).set({
            Email:email,
            Username:username,
            userType: type

        })
            
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    })

    .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error)
            alert(errorCode)
            // ...
        })

}

handleChange = ( e)=>{

    let key = e.target.name;

    this.setState({
        [key]:e.target.value
    })
}


  render(){

    return(
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={require('../assets/back2.jpeg')}
      >
      
        <View style={styles.container}>
        <Text style={styles.header}>Log in</Text>
        <Text style={styles.line}>_____________________________</Text>
        <Text style={styles.text}>Please fill this form to log in</Text>

        <TextInput 
          style={styles.input1}
          type="text" 
          name="email" 
          placeholder ="  E-mail"
          defaultValue={this.state.email} 
          onChange={this.handleChange}               
        />  
           
         
        <TextInput 
          secureTextEntry
          style={styles.input3}
          type="password" 
          name= "password" 
          placeholder ="  Password"
          defaultValue={this.state.password} 
          onChange={this.handleChange} 
        />
         

      
        

        <TouchableOpacity style={styles.yellowButton} onClick={this.addUser}
        onPress={() => {
          this.props.navigation.navigate("User");
        }}>
          <Text> Login</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
        )
    }
}
  const styles=StyleSheet.create({
    container:{
      top:170,
      left:20,
      flex:1,
      maxWidth:370,
      maxHeight:430,
      alignItems: "center",
      textAlign:"center",
      position: "relative",
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius:10,

    },
  
    header: {
      fontSize:50,
      textAlign: 'center',
      right:90,
      color:'#fffde7',
      marginTop: 50,
    },

    line:{
      color:'#f9d03a',
      marginTop: -20,
      fontSize:20
    },

    text:{
      fontSize: 20,
      color:'#fffde7',
      marginTop: 20,
      right:45,
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
    input3:{
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