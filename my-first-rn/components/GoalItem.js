import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from "react-native";

const GoalItem = props => {
    return (
<View style={styles.listItems}><Text>{props.value}</Text></View>
    )
}

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#24A2D1',
        borderColor: 'black',
        borderWidth: 1
      }
})

export default GoalItem;