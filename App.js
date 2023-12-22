import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const saveText = () => {
    console.log('Save')
  };
  const navigateBack = () => {
    console.log('Back')
  };

  return (
    <View style={styles.page}>
      <ScrollView>
        {/* Title */}
        <Text style={styles.title}>Placeholder title</Text>

        {/* Text entry */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputText}
          placeholder='Type here...'
          placeholderTextColor="#999999"
          multiline={true}
          textAlignVertical="top"/>
        </View>

        {/* Back button */}
        <Pressable style={styles.buttonBack} onPress={navigateBack}>
          <Text style={styles.buttonBackText}>
            Back
          </Text>
        </Pressable>

        {/* Save button */}
        <Pressable style={styles.buttonSave} onPress={saveText}>
          <Text style={styles.buttonSaveText}>
            Save
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#131516',
    paddingTop: 60,
  },
  title: {
    marginLeft: 20,

    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: .25,
  },
  inputContainer: {
    flex: 1,
    alignContent: 'center',

    margin: 20,
    height: 500,
    padding: 10,
    
    backgroundColor: '#1d2021',
    borderRadius: 10,
  },
  inputText: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  buttonBack: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    marginLeft: 20,
    width: 110,
    backgroundColor: '#1d2021',
  },
  buttonBackText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#FFFFFF',
  },
  buttonSave: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    marginLeft: 'auto',
    marginRight: 20,
    width: 110,
    backgroundColor: '#1d2021',
  },
  buttonSaveText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: .25,
    color: '#FFFFFF',
  }
});

export default App;
