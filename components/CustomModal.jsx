import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

const ModalComponent = ({ visible, item, onCancel, onDelete }) => {
  return (
    <Modal animationType='slide' visible={visible}>
      <View style={styles.modalMessageContainer}>
        <Text>Se eliminara:</Text>
        <Text>{item.value}</Text>
      </View>

      <View style={styles.modalButtonContainer}>
        <Button title='Cancelar' onPress={onCancel} />
        <Button style={styles.buttonEliminar} title='Eliminar' onPress={onDelete} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalMessageContainer: {
    paddingTop: 50,
    alignItems: 'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    color: 'red',
  },
  buttonEliminar: {
    color: 'red',
  },
});

export default ModalComponent;