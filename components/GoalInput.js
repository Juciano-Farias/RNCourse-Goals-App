import { View, TextInput, Button, StyleSheet, Modal } from "react-native"

import { useState } from "react"

const GoalInput = ({onAddGoal, onCancelModal , visible}) => {
    const [enteredGoalText, setEnteredeGoalText] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredeGoalText(enteredText)
      }

    const addGoalHandler = () => {
        enteredGoalText && onAddGoal(enteredGoalText)
        setEnteredeGoalText('')
    }

    return (
    <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={goalInputHandler}
                style={styles.textInput}
                placeholder='Your course goal' 
                value={enteredGoalText}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button onPress={addGoalHandler} title='Add goal'/>
                </View>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={onCancelModal}/>
                </View>
            </View>
        </View>
    </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        padding: 8,
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: '30%',
        marginHorizontal: 8,
      },
})