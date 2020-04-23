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
            
      <ImageBackground
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      }}
      source={{uri:"https://images.pexels.com/photos/207253/pexels-photo-207253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}      >
  
                
                

                <ScrollView >
                <View style={styles.container}>

                    <Text style={styles.Name} >{item.mealName}</Text>

                    <Image style={styles.image} source={item.image}/>
  

                        
                            <Text style={styles.con}  >  CONTENTS:  </Text>
                            <Text  style={styles.cons} >{item.mealContents}</Text>
                     
                       
                            <Text style={styles.con} >  RECIPE:</Text>
                            <Text  style={styles.cons}>{item.recipe}</Text>
                        
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.con} >  TIME:</Text>
                            <Text  style={styles.conss} >{item.timeNeed}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.con} >  TYPE:</Text>
                            <Text  style={styles.conss}>{item.veg}</Text>
                        </View>
                        
                        
                    

               </View>
              </ScrollView>
            </ImageBackground>
        );
    }

}
const styles=StyleSheet.create({
    Name:{
        fontSize:40,
        color:'rgb(22,53,86)',
        alignItems: "center",
        textAlign:"center",
    },
    container:{
        margin:20,
        flex:1,
        backgroundColor: 'rgba(255,253,231,0.8)',
        borderRadius:10,
        top:10,
      },
      con:{
        fontSize:18,
        color:'rgb(22,53,86)',

    
      },
      image:{
        width: 300,
        height:300,
        margin:20,
        borderRadius:10,
        shadowColor:'black'
        
    },
    cons:{
        fontSize:18,
        paddingLeft:20,

    },
    conss:{
        fontSize:18,
        paddingLeft:5,

    }
  
})

export default Meal;