import {createAppContainer,} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Welcome from './Components/Welcome';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Maybe from './Components/Maybe'



const MainNavigator = createStackNavigator({
  Welcome:Welcome,
  page :SignUp,
  page2 :Login,
  page3 :Maybe,
});


export default createAppContainer(MainNavigator);
