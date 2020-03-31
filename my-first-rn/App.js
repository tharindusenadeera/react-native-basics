import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const handleText = enteredText => {
    setEnteredGoal(enteredText);
  };

  const handleAdd = () => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  const handleRemove = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goals => goals.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <GoalInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={handleText}
          value={enteredGoal}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            value={itemData.item.value}
            onDelete={() => handleRemove(itemData.item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 60 },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});
