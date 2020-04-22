import React, {Component} from 'react';
import * as firebase from 'firebase';

import { Text, View,  ScrollView,TextInput,StyleSheet,ImageBackground, Image} from 'react-native';

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
        let me = this;
        console.log("The user id is =>" + this.state.uid)

                db.collection("meals").where("usid", "==",this.state.uid)
                .get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach((doc)=> {
                        // doc.data() is never undefined for query doc snapshots
                        // console.log(doc.id, " => ", doc.data());
                        // this.state.meals.push(doc.data());
                        // me.setState(this.state.meals)
                        const fetchedMealData = {
                            id: doc.id,
                            ...doc.data()
                          };
                          console.log(fetchedMealData)
                        this.state.meals.push(fetchedMealData);
                        me.setState(this.state.meals)

                });
        
                });

            });
    }

    getMealId=(clickedMealId)=> {
        console.log(clickedMealId);
        this.setState({mealId:clickedMealId});
        console.log(this.state.mealId);

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

    learnMore=(clickedMealId)=>{
        console.log(clickedMealId);
       this.props.history.push('/meal', {id: clickedMealId})
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
    
          
            </View>
            </View>
            
            
          )}
          </View>
            </ScrollView>  
            </ImageBackground>
    )}}

export default MyMeals;
