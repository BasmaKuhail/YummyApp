import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';


class Home extends Component{
  render(){
    return(
      <ImageBackground
        style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          
        }}
        source={{uri:"https://images.pexels.com/photos/207253/pexels-photo-207253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}

      >   
      <ScrollView>   
        <View style={styles.container}>
            
            <Text style={styles.heder} >Card</Text>
            <Image 
            style={styles.image}
            source={{uri:"https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
            />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
                        
        }}>

        <TouchableOpacity
        style={styles.button}>
            <Text style={styles.text}>SHOW MORE</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button2}>
            <Image
                style={styles.fav}
                source={require('../assets/heart.png')}
                    >
            </Image>
        
        </TouchableOpacity>
        </View>
        </View>
        
        

        </ScrollView>   
        </ImageBackground>
    )}}
    const styles=StyleSheet.create({
        container:{
          margin:20,
          flex:1,
          maxWidth:600,
          maxHeight:450,
          alignItems: "center",
          textAlign:"center",
          backgroundColor: 'rgba(255,253,231,0.8)',
          borderRadius:10,
          top:20,
        },
        heder:{
            fontSize:30,
            color:'rgb(22,53,86)',
            padding:10,
        },
        image:{
            width: 300,
            height:300,
            margin:20,
            borderRadius:10,
            shadowColor:'black'
            
        },
        button:{
            top:-10,
            backgroundColor: '#fffde7',
            padding: 10,
            width: 106,
            height:40,
            fontSize: 14,
            borderRadius:10,
            left:109,
        },
        text:{
            color:'rgb(22,53,86)',
            fontSize:14
        },
        button2:{
            top:-10,
            padding: 1,
            fontSize: 14,
            borderRadius:10,
            right:180,
        },
        fav:{
            height:30,
            width:30,
        }
    })


export default Home;