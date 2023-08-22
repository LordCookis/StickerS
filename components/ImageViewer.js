import { styles } from '../styles/styles'
import { Image } from 'react-native'
import EmojiSticker from '../components/EmojiSticker'

export default function ImageViewer({placeholderImageSource, selectedImage, pickedEmoji, setThisPickedEmoji}) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource

  return (
    <>
    <Image source={imageSource} style={styles.image}
    />
    {pickedEmoji?.map((emoji, index)=><EmojiSticker imageSize={40} stickerSource={emoji} key={index} setThisPickedEmoji={setThisPickedEmoji}/>)}
    </>
  )
}
