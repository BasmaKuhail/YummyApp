import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Card from "./Card";


class Home extends Component{

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
            style={{
                flex: 1,
            }}
            source={{uri:"https://images.pexels.com/photos/207253/pexels-photo-207253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
            >   
        <ScrollView>   
                            <View style={{padding:20}}>
                            <SearchBar
                            placeholder="Search for a meal"
                            onChangeText={this.updateSearch}
                            value={search}
                            platform="ios"
                            placeholderTextColor="#213764"
                            />
                            </View>
        <Card/>
        </ScrollView>   
        </ImageBackground>

    )}}


export default Home;