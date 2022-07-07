import { View, TextInput, Button, StyleSheet } from "react-native"

import { useState } from "react"

const GoalInput = ({onAddGoal}) => {
    const [enteredGoalText, setEnteredeGoalText] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredeGoalText(enteredText)
      }

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText)
        setEnteredeGoalText('')
    }

    return (
    <View style={styles.inputContainer}>
        <TextInput
            onChangeText={goalInputHandler}
            style={styles.textInput}
            placeholder='Your course goal' 
            value={enteredGoalText}/>
        <Button onPress={addGoalHandler} title='Add goal'/>
    </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
      },
})