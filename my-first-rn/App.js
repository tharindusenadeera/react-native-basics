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
  };

  const handleRemove = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goals => goals.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
        <GoalInput
          placeholder="Course Goal"
          onChangeText={handleText}
          value={enteredGoal}
          buttonTitle="add"
          handleAdd={handleAdd}
          visible={isAddMode}
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
