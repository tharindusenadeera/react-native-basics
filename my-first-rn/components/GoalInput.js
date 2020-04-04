import React from 'react';
import { TextInput, Modal, View, StyleSheet, Button } from "react-native";

const GoalInput = props => {
    return (
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.placeholder}
          style={styles.input}
          onChangeText={props.onChangeText}
          value={props.value}
        />
        <View style={styles.buttonContainer}>
        <Button title={props.buttonTitle} onPress={() => props.handleAdd()} />
        <Button title="Cancel" color="red" onPress={() => props.handleCancel()} />
        </View>

        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default GoalInput;