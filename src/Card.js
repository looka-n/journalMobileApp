import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = () => {
  const navigation = useNavigation();

  const handleToggle = () => {
    navigation.navigate('ExpandedCard');
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handleToggle}>
        <Text style={styles.compactViewText}>Tap to expand and edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
  compactViewText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default Card;