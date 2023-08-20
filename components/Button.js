import { styles } from '../styles/styles'
import { View, Pressable, Text } from "react-native"
import { AntDesign } from '@expo/vector-icons'

export default function Button({label, theme, onPress}) {
  if (theme === "primary") {
  return (
    <View style={[styles.buttonContainer, {borderWidth: 3, borderColor: "#f19cbb", borderRadius: 15}]}>
      <Pressable
        style={[styles.button, {backgroundColor: "#ff8ab1"}]}
        onPress={onPress}
      >
      <AntDesign 
        name="addfile" 
        size={18} 
        color="25292e" 
        style={styles.buttonIcon}
      />
      <Text style={[styles.buttonLabel, {color: "#121013"}]}>{label}</Text>
      </Pressable>
    </View>
  )
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}
