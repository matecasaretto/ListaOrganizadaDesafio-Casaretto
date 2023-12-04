import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ListItem = ({ item, onSelectItemHandler }) => {
  return (
    <View style={styles.viewRender}>
      <Text>{item.value}</Text>
      <Button
        title='X'
        style={styles.buttonRedenerListen}
        onPress={() => onSelectItemHandler(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewRender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#179CC3',
  },
  buttonRedenerListen: {
    backgroundColor: '#FF0000',
  },
});

export default ListItem;