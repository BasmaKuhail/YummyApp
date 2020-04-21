import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

class Card extends Component{

    state={
        meals:[],
        uid:"", 
        mealId:""
      }
  
      componentDidMount(){
          const db = firebase.firestore();
          const {meals} = this.state;
          let me = this;
      
          db.collection("meals").get().then(function(querySnapshot) {
              querySnapshot.forEach((doc)=> {
                  const fetchedMealData = {
                      id: doc.id,
                      ...doc.data()
                    };
                  meals.push(fetchedMealData);
                  me.setState(meals)
                  
              });
          });
          firebase.auth().onAuthStateChanged((user) => {
              if (user) {
                // User logged in already or has just logged in.
                console.log(user.uid);
                this.setState({uid:user.uid})
              } else {
                // User not logged in or has just logged out.
              };
            });
      }
  
      getMealId=(clickedMealId)=> {
          this.setState({mealId: clickedMealId})
          console.log(this.state.mealId)
  
          const db = firebase.firestore();
  
          const {uid} = this.state;
          console.log(this.state)
  
          db.collection("mealUserId").add({
              mealId: clickedMealId,
              currentUserUid:uid
          
          })
          .then( (docRef) =>{
            this.props.navigation.navigate('Saved')
  
          })
  
  
       }
       
       learnMore=(clickedMealId)=>{

          this.props.navigation.navigate('Meal', {id: clickedMealId})
       }
  
     
  render(){
    const {meals}= this.state;
        console.log(this.state.meals)

    return(
      
    
      <ScrollView> 
          
      <View style={{flex:1, alignItems:"center"}}>

      {meals.map((meal)=>
  
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
        style={styles.button}
        onPress={()=>this.learnMore(meal.id)}>
            <Text  style={styles.text}>SHOW MORE</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button2}
        onPress={()=>this.getMealId(meal.id)}>
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