import { styles } from '../styles/styles'
import { Image } from 'react-native'

export default function ImageViewer({placeholderImageSource, selectedImage}) {
  const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource

  return (
    <Image source={imageSource} style={styles.image}/>
  )
}
