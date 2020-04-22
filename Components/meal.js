import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/firestore';



class Meal extends Component{
    state={
        meal:{},
      }
      componentDidMount(){

        const { state } = this.props.navigation
        console.log('mealId', state.params.id);
          const db = firebase.firestore();
          const {meal} = this.state;
          let me = this;

        
          db.collection('meals').doc(state.params.id)
                .get()
                .then((doc)=>{
                        console.log(doc.data());
                        
                        me.setState({meal:doc.data()})

                    });
      }
    render(){
        const {meal:item}= this.state;
        console.log(this.state.meal)
        console.log(this.props)

        return(
            <View >
                
                

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
              
            </View>
        );
    }

}

export default Meal;