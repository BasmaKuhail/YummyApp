import React, {Component} from 'react';
import * as firebase from 'firebase';

import { Text, View,  ScrollView,TouchableOpacity,StyleSheet,ImageBackground, Image} from 'react-native';

class MyMeals extends Component{

    state={
        meals:[],
        uid:"",
    }


    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User logged in already or has just logged in.
              console.log(user.uid);
              this.setState({uid:user.uid});
              console.log(this.state.uid);
            } else {
              // User not logged in or has just logged out.
            };
            console.log("The user id is =>" + this.state.uid)
        
        const db= firebase.firestore();
        const {meals} = this.state;
        let me = this;
        console.log("The user id is =>" + this.state.uid)

                db.collection("meals").where("usid", "==",this.state.uid)
                .get()
                .then(function(querySnapshot){

                    querySnapshot.forEach((doc)=> {
                        console.log('id')
                        const fetchedMealData = {
                            id: doc.id,
                            ...doc.data()
                          };
                          console.log(fetchedMealData)
                        meals.push(fetchedMealData);
                        me.setState(meals)

                });
        
                });

            ;
    })}
    learnMore=(clickedMealId)=>{
        console.log(clickedMealId)
      this.props.navigation.navigate('Meal', {id: clickedMealId})
   }
   
    render(){
        const {meals}= this.state;
        console.log(this.state.meals)

        return(
            <ImageBackground
            style={{
                flex: 1,
            }}
            source={{uri:"https://images.pexels.com/photos/207253/pexels-photo-207253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
            >
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
      source={require('../assets/heart.png')}>
              
      </Image>
  
  </TouchableOpacity>
  </View>
  </View>
  
  
)}
          </View>
            </ScrollView>  
            </ImageBackground>
    )}}
    const styles=StyleSheet.create({
        container:{
          flex:1,
          maxWidth:600,
          maxHeight:450,
          alignItems: "center",
          textAlign:"center",
          backgroundColor: 'rgba(255,253,231,0.8)',
          borderRadius:10,
          top:10,
          margin:10
        },
        header:{
            fontSize:30,
            color:'rgb(22,53,86)',
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

export default MyMeals;
