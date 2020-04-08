import React, {Component} from 'react';
import { Text, View, TouchableOpacity, TextInput,StyleSheet, ImageBackground} from 'react-native';
import  {RadioButton, RadioButtonInput, RadioButtonLabel, RadioForm} from 'react-native-simple-radio-button'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import auth from '@react-native-firebase/auth';

class Login extends Component{
  state={
    email:"",
    loggedType:"",
    password:""

}

signin = ()=>{
  console.log( this.state.email,
      this.state.password,)
      firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password,
      ).then((res)=>{
          console.log(res.user.uid);
          
          const db= firebase.firestore();
          db.collection("users").where("Email", "==",this.state.email)
          .get()
          .then((querySnapshot)=>{
              querySnapshot.forEach((doc)=> {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  console.log(doc.data().userType);
                  this.setState({loggedType:doc.data().userType});
          });
  
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          })

          .then( (docRef) =>{
              if(this.state.loggedType=='cheif'){
                this.props.navigation.navigate("CheifHome");
              }else{
                this.props.navigation.navigate("Reader");              }
          })

        

          
      }).catch( (error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error)
      alert(errorCode)
      // ...
  })
};


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
         

      
        

        <TouchableOpacity style={styles.yellowButton}
        onPress={this.signin}>
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
      right:90,
      color:'#fffde7',
      marginTop: 50,
      left:10
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
      textAlign:"center",
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

  })

export default Login;