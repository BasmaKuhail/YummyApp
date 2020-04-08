import {createAppContainer,} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Welcome from './Components/Welcome';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Maybe from './Components/Maybe';

import * as firebase from 'firebase'; 



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
  

  if (!firebase.apps.length) {
    firebase.initializeApp({});
}


const MainNavigator = createStackNavigator({
  Welcome:Welcome,
  page :SignUp,
  page2 :Login,
  page3 :Maybe,
});


export default createAppContainer(MainNavigator);
