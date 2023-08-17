import { StyleSheet, Image } from 'react-native'

export default function ImageViewer({placeholderImageSource, selectedImage}) {
  const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource

  return (
    <Image source={imageSource} style={styles.image}/>
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