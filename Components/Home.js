import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Card from "./card";


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
            source={{uri:"https://cdn.webshopapp.com/shops/66605/files/264153521/oracal-651-dark-blue.jpg"}}
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