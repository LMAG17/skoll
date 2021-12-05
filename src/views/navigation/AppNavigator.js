import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import StackNavigator from './Screens';

const Stack = createStackNavigator();

export default AppNAvigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="Testscreen"
      >
        {
          StackNavigator.map(navigator => (
            <Stack.Screen
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