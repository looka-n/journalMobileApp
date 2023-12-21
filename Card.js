import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

const Card = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [image, setImage] = useState(null); // State to store the image URI

  const handleTextChange = (text) => {
    setTextInputValue(text);
  };

  const handleImageUpload = () => {
    // Implement image upload logic using Expo's ImagePicker or other libraries
    // Update the 'image' state with the selected image URI
  };

  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        value={textInputValue}
        placeholder="Enter text here..."
      />
      <Button title="Upload Image" onPress={handleImageUpload} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginTop: 10,
  },
});

export default Card;
