import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import * as firebase from 'firebase';




class Saved extends Component{

    state={
        favMeals:[],
        uid:"",
        currentUserMealId:[]
    }


    componentDidMount(){

        const db= firebase.firestore();
        let me = this;
        const {currentUserMealId, favMeals}= this.state; 

        this.list(); 

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User logged in already or has just logged in.
              console.log(user.uid);
              this.setState({uid:user.uid});
              console.log(this.state.uid);
            } else {
              // User not logged in or has just logged out.
            };




        db.collection("mealUserId").where("currentUserUid", "==",this.state.uid)
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=> {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                currentUserMealId.push(doc.data().mealId);
                me.setState(currentUserMealId)
        });
        }).then(()=>{
            console.log(currentUserMealId);
            currentUserMealId.forEach((id)=>{
                console.log(id);
                db.collection('meals').doc(id)
            .get()
            .then((doc)=>{
                    console.log(doc.data());
                    favMeals.push(doc.data());
                    me.setState(favMeals)

                });
            })
        });

        console.log(currentUserMealId);
        });      
    }


        list=()=>{

            const db= firebase.firestore();
            let me = this;
            const {currentUserMealId, favMeals}= this.state; 

            currentUserMealId.forEach(id => {
                console.log(id);
                db.collection('meals').doc(id)
                .get()
                .then((doc)=>{
                        console.log(doc.data());
                        favMeals.push(doc.data());
                        me.setState(favMeals)
    
                    });
                });
        }
        learnMore=(clickedMealId)=>{
            this.props.navigation.navigate('/meal', {id: clickedMealId})
         }
    render(){
        const {favMeals}= this.state;
        console.log(this.state.favMeals); 


        return(

            <View className='contaner'>
                
                
               
                
                   
            
                    {favMeals.map((meal)=>

                       
                        <View style={{padding:14}}>
                       
                            <Image
                                className='media'
                                source={{uri:meal.image}}
                                onClick={()=>this.learnMore(meal.id)}/>
                            <Text
                                className='title'
                                title= {meal.mealName}
                                onClick={()=>this.learnMore(meal.id)}/>
                        

                        </View>

                    )}
               
            </View>
                

        )
    }
}

export default Saved;