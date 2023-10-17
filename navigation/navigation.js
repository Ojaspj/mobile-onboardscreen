// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import OnBoardScreen from '../screens/OnBoardScreen';
import { getItem } from '../utils/asyncStorage';
import { useEffect, useState } from 'react';



const Stack = createNativeStackNavigator();

function Navigation() {

const [showOnBoarded, setshowOnBoarded] = useState(null);
    useEffect(() => {
      checkIfAlreadyOnboarded ();
    }, [])

    const checkIfAlreadyOnboarded = async () =>{
        let onboarded = await getItem('onboarded');
        if(onboarded == 1){
            setshowOnBoarded(false);
        }else{
            setshowOnBoarded(true);
        }
    }
    if(showOnBoarded == null){
        return null;
    }
    if(showOnBoarded){
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Onboarding'>
              <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnBoardScreen} />
              <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        );
    }else{
        return (
            <NavigationContainer>
              <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnBoardScreen} />
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          );  
    }
    
}

export default Navigation;