import { StyleSheet, View, Text, Pressable } from "react-native"

const GoalItem = ({text, onDeleteItem, id}) => {
  return (
    <View style={styles.goalItem}>
      <Pressable 
        android_ripple={{color: '#210644'}} 
        onPress={onDeleteItem.bind(this, id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
          <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
      opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})