import { StyleSheet } from "react-native"
import { View, Text } from "react-native"

const GoalItem = ({text}) => {
  return (
    <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
    }
})