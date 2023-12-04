import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TextInputComponent from './components/TexInput';
import ListItem from './components/ListItem';
import ModalComponent from './components/CustomModal';

export default function App() {
  const [texItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeTextHandler = (text) => {
    setTextItem(text);
  };

  const addItemToList = () => {
    setItemList((prevState) => [
      ...prevState,
      { id: Math.random().toString(), value: texItem },
    ]);
    setTextItem('');
  };

  const renderListItem = ({ item }) => {
    return <ListItem item={item} onSelectItemHandler={onSelectItemHandler} />;
  };

  const onSelectItemHandler = (id) => {
    setModalVisible(true);
    setItemSelectedToDelete(itemList.find((item) => item.id === id));
  };

  const onSelectButtonCancel = () => {
    setModalVisible(false);
  };

  const deleteItem = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelectedToDelete.id));
    setItemSelectedToDelete({});
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <TextInputComponent
          onChangeText={onChangeTextHandler}
          value={texItem}
          onPress={addItemToList}
        />
        <FlatList
          data={itemList}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <ModalComponent
        visible={modalVisible}
        item={itemSelectedToDelete}
        onCancel={onSelectButtonCancel}
        onDelete={deleteItem}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
});
