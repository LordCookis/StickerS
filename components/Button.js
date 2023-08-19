import { StyleSheet, View, Pressable, Text } from "react-native"
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

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },  
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'monospace'
  },
})