import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Card from "./card";

class CheifHome extends Component{

    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };


  render(){
    const { search } = this.state;


    return(

        <ImageBackground 
        style={styles.container}
        source={{uri:"https://cdn.webshopapp.com/shops/66605/files/264153521/oracal-651-dark-blue.jpg"}}
        >
        <ScrollView>        
                            <View style={{flexDirection:"row"}}>
                            <TouchableOpacity style={styles.button}>
                                <Text>My meals</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text>Add meal</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text>My favourites</Text>
                            </TouchableOpacity>
                            </View>
                            <SearchBar
                            placeholder="Search for a meal"
                            onChangeText={this.updateSearch}
                            value={search}
                            platform="ios"
                            placeholderTextColor="#213764"
                            />



                   <Card/>
        </ScrollView>   
        </ImageBackground>
    )}}


export default CheifHome;


const styles=StyleSheet.create({
    container:{
      flex:1,
      alignItems: "center",
      textAlign:"center",
      padding:20
    },
    button:{
        backgroundColor: '#f9d03a',
        width: 120,
        height:50,
        borderRadius:5,
        alignItems: "center",
        textAlign:"center",
        justifyContent:"center",
        marginRight:5,
        marginBottom:5
    },
})