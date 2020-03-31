import React from 'react';
import { TextInput } from "react-native";

const GoalInput = props => {
    return (
        <TextInput
          placeholder={props.placeholder}
          style={props.style}
          onChangeText={props.onChangeText}
          value={props.value}
        />
    )
}

export default GoalInput;