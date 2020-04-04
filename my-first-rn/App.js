import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode]     = useState(false);

  const handleText = enteredText => {
    setEnteredGoal(enteredText);
  };

  const handleAdd = () => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
    setIsAddMode(false);
    setEnteredGoal("");
  };

  const handleRemove = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goals => goals.id !== goalId);
    });
  };

  const handleCancel = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
        <GoalInput
          placeholder="Course Goal"
          onChangeText={handleText}
          value={enteredGoal}
          buttonTitle="Add"
          handleAdd={handleAdd}
          visible={isAddMode}
          handleCancel={handleCancel}
        />
        
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
  screen: { padding: 60 }
});
