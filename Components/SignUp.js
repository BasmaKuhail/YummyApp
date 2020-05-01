import React, {Component} from 'react';
import {Alert, ActivityIndicator, Text, View, TouchableOpacity, TextInput,StyleSheet, ImageBackground} from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

class SignUp extends Component{
  constructor(props) {
    super(props);
  this.state = { 
    displayName: '',
    email: '', 
    password: '',
    loading: false,
    error:'',
    username:"",
  }}
 
  onSignUpPress(){
    const{email, username, type, password}= this.state; 

    const db = firebase.firestore();
    console.log(email,password ,"email,password")
    this.setState({error:'', loading:true});
    if(email === '' && password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        loading: true,
      })
  }
  firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            let user  =  firebase.auth().currentUser
            db.collection("users").doc(user.uid).set({
                Email:email,
                Username:username,
    
    
            }).then( (docRef) =>{
              this.props.navigation.navigate('meals')
    
            })
          })
 }
  renderButtonOrLoading(){
    if(this.state.loading){
      return<Text> Loading </Text>
    }
    return <View>
      
      <TouchableOpacity
      style={styles.yellowButton}
      onPress={this.onSignUpPress.bind(this)}
      title='SignUp'><Text>Sign Up</Text></TouchableOpacity>  
    </View>
}
  render(){
    
    return(
      
      <ImageBackground
      style={{
        flex: 1,
    }}
    source={{uri:"https://images.pexels.com/photos/207253/pexels-photo-207253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
    >
        <View style={{alignItems:"center"}}>
        <View style={styles.container}>
        <Text style={styles.header}>Sign Up</Text>
        <Text style={styles.line}>_____________________________</Text>
        <Text style={styles.text}>Please fill this form to create an account</Text>
        
        <TextInput 
          style={styles.input1}
          name="email" 
          placeholder ="  E-mail"
          defaultValue={this.state.email} 
          onChangeText={email=> this.setState({email})}
                        
        />  
        <TextInput 
          style={styles.input3}
          name= "userName" 
          placeholder ="  userName"
          defaultValue={this.state.username} 

          onChangeText={username => this.setState({username})}
         
        />
                
        <TextInput 
          secureTextEntry
          style={styles.input3}
          name= "password" 
          placeholder ="  Password"
          defaultValue={this.state.password} 

          onChangeText={password => this.setState({password})}
         
        />
         
        {this.renderButtonOrLoading()}
        </View>
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