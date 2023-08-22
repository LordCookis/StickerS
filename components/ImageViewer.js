import { styles } from '../styles/styles'
import { Image } from 'react-native'
import EmojiSticker from '../components/EmojiSticker'

export default function ImageViewer({selectedImage, pickedEmoji, setThisPickedEmoji}) {
  const sourceImage = selectedImage !== require('../assets/images/Кагуинька~.png') ? {uri: selectedImage} : selectedImage
  return (
    <>
    <Image source={sourceImage} style={styles.image}
    />
    {pickedEmoji?.map((emoji, index)=><EmojiSticker imageSize={40} stickerSource={emoji} key={index} setThisPickedEmoji={setThisPickedEmoji}/>)}
    </>
  )
}
