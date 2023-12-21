import React from 'react';
import { ScrollView } from 'react-native';
import Card from './Card'; // Import the Card component

const MultipleCards = () => {
  return (
    <ScrollView>
      <Card />
      <Card />
      {/* Add more Card components as needed */}
    </ScrollView>
  );
};

export default MultipleCards;
