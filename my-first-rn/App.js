import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 60}}>
      <View style={{ flexDirection: "row" , justifyContent: "space-between", alignItems: "center"}}>
      <TextInput placeholder="Course Goal" style={{ width: 200, borderBottomColor: 'black', borderBottomWidth: 1 }}/>
      <Button title="Add"/>
      </View>
    </View>
  );
}
