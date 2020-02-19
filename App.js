import React from 'react';
import {	View} from "react-native";
import SignUp from './Components/signUp'
import Login from './Components/Login'
import Welcome from './Components/welcome';
// import {createAppContainer} from 'react-navigation'
// import {createDrawerkNavigator} from 'react-navigation-drawer'


// const MineNavigator = createDrawerkNavigator({
//   SignUp : {screen: SignUp},
//   Login: {screen: Login},
// });
// const App = createAppContainer(MineNavigator);

export default class App extends React.Component {
  render() {
		return (
        <SignUp/>
    )}
    }
 
