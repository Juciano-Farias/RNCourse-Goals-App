import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

import { useState } from 'react';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}
    ])
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => (currentCourseGoals.filter(goal => goal.key !== id)))
  }
 
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
         data={courseGoals} 
         renderItem={itemData => {
          return <GoalItem
            onDeleteItem={deleteGoalHandler}
            text={itemData.item.text}
            id={itemData.item.key}/>
         }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
