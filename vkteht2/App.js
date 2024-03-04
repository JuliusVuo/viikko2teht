import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal 
        visible={modalVisible} 
        onRequestClose={() =>{
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                This is modal...
              </Text>
              <Pressable style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>
                  Close
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
        onPress={() => setModalVisible(true)}>
          <Text>
            Show Modal message
          </Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    margin: 0,
    backgroundColor: 'white',
    paddingTop: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width:'100%',
    padding: 10,
    elevation: 2,
    backgroundColor: '#fcfcfc',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});