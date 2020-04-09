import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

class Card extends Component{
    state={
        list:[]
      }
    
      componentDidMount(){
        const db = firebase.firestore();
        const {list} = this.state;
        let me = this;
    
        db.collection("meals").get().then(function(querySnapshot) {
            querySnapshot.forEach((doc)=> {
                console.log(doc.id, " => ", doc.data());
                list.push(doc.data())
                me.setState(list)
                
            });
        });
    }
    
  render(){
    const {list}= this.state;

    return(
      
    
      <ScrollView> 
      <View style={{flex:1, alignItems:"center"}}>

      {list.map((meal)=>
  
        <View style={styles.container}>
            
            <Text style={styles.header}>{meal.mealName}</Text>
            <Image 
            style={styles.image}
            source={{uri:meal.image}}    
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
        
        
      )}
      </View>
        </ScrollView>  
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
          top:10,
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
        },
        myfav:{
            width:50,
            height:50,
            right:160,
            top:35
        }
    })


export default Card;