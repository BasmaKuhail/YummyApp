import {createAppContainer,} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator} from 'react-navigation-stack'
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import Home from './Components/Home'
import User from './Components/user'
import Maybe from './Components/Maybe'

// import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCXX8hp81_yiptvIDyKch-i_F39nBe4FcM",
  authDomain: "yammy-c473e.firebaseapp.com",
  databaseURL: "https://yammy-c473e.firebaseio.com",
  projectId: "yammy-c473e",
  storageBucket: "yammy-c473e.appspot.com",
  messagingSenderId: "635335262399",
  appId: "1:635335262399:web:84214970715909beb2460a",
  measurementId: "G-Q1J13KHJYY"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();



const Tab = createBottomTabNavigator({
  Welcome: Welcome,
  Home:Home,
  User:User,
  

});

const Stack = createStackNavigator({

    SignUp :{
    screen:SignUp,
  },
  Login :{
    screen:Login,
  },
  Login :{
    screen:Maybe,
  }

})
export default createAppContainer(Tab);
