import {
  StyleSheet,
  View,
  FlatList,
  Button,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

import { useState } from 'react';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  const startAddGoalHandler = () =>{
    setModalIsVisible(true)
  }
  
  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}
    ])
    endAddGoalHandler()
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => (currentCourseGoals.filter(goal => goal.key !== id)))
  }
 
  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="#a065ec" onPress={startAddGoalHandler}/>
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancelModal={endAddGoalHandler}/>
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
    </>
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
