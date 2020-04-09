import React, { Component } from 'react';
import { StyleSheet, ScrollView,Text, View, ImageBackground, Button,Image, TouchableOpacity, TextInput} from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/firestore';


class Card extends Component {

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

    
  return (

  <ScrollView>

    <View style={{flex:1, alignItems:"center"}}>
            {list.map((meal)=>
              <View style={styles.container}>
                    <TouchableOpacity>
                    <Text style={styles.header}>{meal.mealName}</Text>
                    <Image 
                        style={styles.image}
                        source={{uri:meal.image}}                    
                    />
                    
                    <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={styles.button}>
                        <Text >details</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text >Add to fav</Text> 
                    </TouchableOpacity>
                    </View>
                                  
                    </TouchableOpacity>
            </View>


                    
                )}
    </View>
      
    </ScrollView>   
  );
}
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingBottom:30,
    paddingRight:10,
    paddingLeft:7,
    maxWidth:375,
    maxHeight:307,
    backgroundColor: '#5770A4',
    borderRadius:10,
    top:8,
    marginBottom:20

  },
  header:{
      fontSize:25,
      fontWeight:"bold",
      color:'#040404',
      padding:10,
      alignItems:"center",
      textAlign:"center",
      justifyContent:"center"
  },
  image:{
      width: 360,
      height: 180,
      borderRadius:10,
      shadowColor:'black'
      
  },
  button:{
      top:10,
      backgroundColor: '#f9d03a',
      padding: 10,
      width: 179,
      height:50,
      borderRadius:5,
      left:0,
      alignItems: "center",
      textAlign:"center",
      marginRight:5
  },
  text:{
      fontSize:20,
      color:'#38383F',
      alignItems: "center",
      justifyContent:"center"
      },
});

export default Card;
