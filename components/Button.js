import { StyleSheet, View, Pressable, Text } from "react-native"

export default function Button({label, theme}) {
  if (theme === "primary") {
  return (
    <View style={[styles.buttonContainer, {borderWidth: 3, borderColor: "#f19cbb", borderRadius: 15}]}>
      <Pressable
        style={[styles.button, {backgroundColor: "#ff8ab1"}]}
        onPress={() => alert('КНОПКА НАЖАТА')}
      >
      <Text style={[styles.buttonLabel, {color: "#25292e"}]}>{label}</Text>
      </Pressable>
    </View>
  )
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('КНОПКА НАЖАТА')}>
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
  buttonLabel: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'monospace'
  },
})