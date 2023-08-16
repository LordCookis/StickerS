import { StyleSheet, Image } from 'react-native'

export default function ImageViewer({placeholderImageSource}) {
  return (
    <Image source={placeholderImageSource} style={styles.image}/>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#f19cbb",
  },
})