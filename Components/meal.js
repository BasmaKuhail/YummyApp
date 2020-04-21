import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/firestore';



class Meal extends Component{
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
              this.props.history.push('/favourite')
  
          })
        }
    render(){
        const {meal}= this.state;
        console.log(this.state.meal)

        return(
            <View >
                
                {meal.map((item)=>

                <View>
                    <Text >{item.mealName}</Text>
                
                    <View style={{flexDirection:"row"}}>
                        <View style={{flexDirection:"row"}}>
                            <Text > CONTENTS:  </Text>
                            <Text >{item.mealContents}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text >RECIPE:</Text>
                            <Text>{item.recipe}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text >TIME:</Text>
                            <Text  >{item.timeNeed}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text  >TYPE:</Text>
                            <Text >{item.type}</Text>
                        </View>
                        
                    </View>
                    <Image className='mealImg'  src={item.image}/>

               </View>
                )}
            </View>
        );
    }

}

export default Meal;