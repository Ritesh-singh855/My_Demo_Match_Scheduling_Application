import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/HomeScreen';
import Scheduling from '../screen/SchedulingScreen';
import Match from '../screen/MatchScreen/index';

const Stack = createStackNavigator();

const HomeNavigation = () => {
    return (
            <Stack.Navigator >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    // options={{ headerShown: false }} // Hides the header for Home screen
                />
                <Stack.Screen
                    name="Scheduling"
                    component={Scheduling}
                    // options={{ headerShown: false }} // Hides the header for Scheduling screen
                />
                     <Stack.Screen
                    name="Match"
                    component={Match}
                    // options={{ headerShown: false }} // Hides the header for Scheduling screen
                />
            </Stack.Navigator>
    );
}

export default HomeNavigation;
