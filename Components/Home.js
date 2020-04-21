import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import Card from "./Card";


class Home extends Component{

  render(){

    return(
        <ImageBackground
            style={{
                flex: 1,
            }}
            source={{uri:"https://images.pexels.com/photos/207253/pexels-photo-207253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
            >   

                <Card/>
        </ImageBackground>

    )}}


export default Home;