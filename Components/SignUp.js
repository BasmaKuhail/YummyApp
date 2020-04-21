import React, {Component} from 'react';
import {Alert, ActivityIndicator, Text, View, TouchableOpacity, TextInput,StyleSheet, ImageBackground} from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



class SignUp extends Component{
  constructor() {
    super();
 
  this.state = { 
    displayName: '',
    email: '', 
    password: '',
    isLoading: false
  } }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
addUser = ()=>{
    const{email, username, type, password}= this.state; 

    const db = firebase.firestore();   
    if(email === '' && password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      fireba
     
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((res)=>{
      res.user.updateProfile({
        displayName: this.state.displayName
      })
      console.log('User registered successfully!')
      this.setState({
        isLoading: false,
        displayName: '',
        email: '', 
        password: ''
      })
        db.collection("users").doc(user.uid).set({
            Email:email,
            Username:username,
            userType: type

        }).then( (docRef) =>{
          if(type =='Cheif'){
            this.props.navigation.navigate("CheifHome");

          }else{
            this.props.navigation.navigate("ReaderHome");
          }
      })
    })

    .catch(error => this.setState({ errorMessage: error.message })) 


}}

handleChange = ( e)=>{

    let key = e.target.name;

    this.setState({
        [key]:e.target.value
       
    });
}


  render(){
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }  


    return(
      
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={require('../assets/back2.jpeg')}
      >
      
        <View style={styles.container}>
        <Text style={styles.header}>Sign Up</Text>
        <Text style={styles.line}>_____________________________</Text>
        <Text style={styles.text}>Please fill this form to create an account</Text>

        <TextInput 
          style={styles.input1}
          type="text" 
          name="email" 
          placeholder ="  E-mail"
          defaultValue={this.state.email} 
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
                        
        />  
           
        <TextInput 
          style={styles.input2}
          type="text" 
          name= "username" 
          placeholder ="  Username"
          defaultValue={this.state.username} 
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />

                
        <TextInput 
          secureTextEntry
          style={styles.input3}
          type="password" 
          name= "password" 
          placeholder ="  Password"
          defaultValue={this.state.password} 
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
         

        

        <TouchableOpacity style={styles.yellowButton} 
        onPress={()=>this.addUser}>
          <Text> Sign up</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
        )
    }
}
  const styles=StyleSheet.create({
    container:{
      top:90,
      left:20,
      flex:1,
      maxWidth:370,
      maxHeight:575,
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
      color:'#fffde7',
      marginBottom:7
        },

    RadioText:{
      fontSize: 20,
      color:'#4479EB',
      marginBottom:17,
      marginRight:17
        },

  })

export default SignUp;
