import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button,Image, TouchableOpacity} from 'react-native';

export default class Welcome extends Component {
  render(){  
    return (
   
      <ImageBackground
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1
        }}
        source={require('../assets/background.png')}
      >
    
      <Image 
        style={{
          width:400, 
          height:400,
          top:-100
        }}

        source={{uri:"https://images.squarespace-cdn.com/content/v1/58a2fdcebebafb516ada1fe8/1540290099613-3ROW0HJZE2XYX6V0X88E/ke17ZwdGBToddI8pDm48kHAe7tJsq_QjUiQiP46BuYd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UW40zwkR4L7HOs8xw3xsyz7UeCy_bEEXkaPS43zxyZdvP7cJNZlDXbgJNE9ef52e8w/Logo+Yummy.png?format=750w"}}
      />    

      <TouchableOpacity style={styles.button}>
        <Text>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>

        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>

      <Text>Maybe later</Text>
    </TouchableOpacity>

    </ImageBackground>

    
  );
}
}
const styles=StyleSheet.create({
  button:{
    alignItems: 'center',
    backgroundColor: '#ffa801',
    padding: 10,
    width:'60%',  
    marginBottom:10,
    top:-50,
    borderRadius:10,
    fontSize:60,

  }
})
