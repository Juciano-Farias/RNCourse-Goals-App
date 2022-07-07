import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"

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
            <Image style={styles.image} source={require('../assets/images/goal.png')} />
            <TextInput
                onChangeText={goalInputHandler}
                style={styles.textInput}
                placeholder='Your course goal' 
                value={enteredGoalText}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={onCancelModal} color="#f31282"/>
                </View>
                <View style={styles.button}>
                    <Button onPress={addGoalHandler} title='Add goal' color="#b180f0"/>
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
        padding: 16,
        backgroundColor: '#311b6b',
      },
      image: {
        width: 100,
        height: 100,
        margin: 20,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
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