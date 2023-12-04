import React from 'react';
import { TextInput, View, Button, StyleSheet } from 'react-native';

const TextInputComponent = ({ onChangeText, value, onPress }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder='Agregar nuevo libro'
        onChangeText={onChangeText}
        value={value}
      />
      <Button title='ADD' onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  TextInput: {
    width: 200,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default TextInputComponent;