// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardViewEdit from './components/CardViewEdit';
import CardViewFull from './components/CardViewFull';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CardViewFull" component={CardViewFull} />
        <Stack.Screen name="CardViewEdit" component={CardViewEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;