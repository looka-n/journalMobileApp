// ExpandedCard.js

import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ExpandedCard = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} multiline placeholder="Enter text here..." />
      <Button title="Delete Card" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default ExpandedCard;
