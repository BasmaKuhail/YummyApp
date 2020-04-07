import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground,Image, TouchableOpacity} from 'react-native';

export default class Welcome extends Component {
  onPress = () => {
		this.props.navigation.navigate("SginUp");
  };
  onPress2 = () => {
		this.props.navigation.navigate("Login");
	};
  render(){  
    return (
   
      <ImageBackground
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1
        }}
        source={{uri:"https://images.pexels.com/photos/207253/pexels-photo-207253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}      >
    
      <Image 
        style={{
          width:300,
          height:130,
          top:-50
         
        }}
        source={require('../assets/wasfa6.png')}

      />    

      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          this.props.navigation.navigate("page");
        }}
        >
        <Text
        style={styles.text}>
          Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          this.props.navigation.navigate("page2");
        }}
        >

        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
      onPress={() => {
        this.props.navigation.navigate("page3");
      }}>

      <Text style={styles.text}>Maybe later</Text>
    </TouchableOpacity>

    </ImageBackground>

    
  );
}
}
const styles=StyleSheet.create({
  button:{
    alignItems: 'center',
    backgroundColor: '#232a4f',
    padding: 10,
    width:250,
    height:40,
    marginBottom:10,
    borderRadius:100,

  },
  text:{
    fontSize:18,
    color:'white'
  }
})
