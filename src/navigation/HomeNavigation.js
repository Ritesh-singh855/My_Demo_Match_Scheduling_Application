import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/HomeScreen';
import Scheduling from '../screen/SchedulingScreen';
import Match from '../screen/MatchScreen/index';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Scheduling" component={Scheduling} />
      <Stack.Screen name="Match" component={Match} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
