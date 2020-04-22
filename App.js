import {createAppContainer,} from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import Welcome from './Components/Welcome';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home'
import Meal from './Components/meal'
import Saved from './Components/saved'
import Add from './Components/addMeal'
import myMeals from './Components/myMeals'
import * as firebase from 'firebase/app';


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
firebase.initializeApp(firebaseConfig);


const mineNavigator = createDrawerNavigator({

  Welcome:{
    screen:Welcome,
  },
  SignUp :{
    screen:SignUp,
  },
  Login :{
    screen:Login,
  },
  meals :{
    screen:Home,
  },
  Meal :{
    screen:Meal,
  },
  
Saved:{
  screen:Saved
},
  
AddMeal:{
  screen:Add
},
myMeals:{
  screen:myMeals
}




})

export default createAppContainer(mineNavigator);
