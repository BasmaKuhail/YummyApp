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
import firebase from 'firebase';
import { firebaseConfig } from './Components/config';
import add from './Components/add'
firebase.initializeApp(firebaseConfig)


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
},
// add:{
//   screen:add
// }




})

export default createAppContainer(mineNavigator);
