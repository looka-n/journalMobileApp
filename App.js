// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MultipleCards from './src/MultipleCards';
import ExpandedCard from './src/ExpandedCard'; // Create an ExpandedCard component for the expanded view

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cards" component={MultipleCards} />
        <Stack.Screen name="ExpandedCard" component={ExpandedCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
