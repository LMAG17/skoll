import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import StackNavigator from './Screens';

const Stack = createStackNavigator();

export default AppNAvigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Terms"
      >
        {
          StackNavigator.map(navigator => (
            <Stack.Screen
              options={{
                backgroundColor: '#282828',
              }}
              key={navigator.path}
              name={navigator.path}
              component={navigator.component}
            />
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};