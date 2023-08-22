import { StatusBar } from 'expo-status-bar'
import { styles } from './styles/styles'
import { View } from 'react-native'
import { useState, useRef } from 'react'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import { captureRef } from 'react-native-view-shot'
import ImageViewer from './components/ImageViewer'
import Button from './components/Button'
import CircleButton from './components/CircleButton'
import IconButton from './components/IconButton'
import EmojiPicker from './components/EmojiPicker'
import EmojiList from './components/EmojiList'

const PlaceholderImage = require('./assets/images/Кагуинька~.png')

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [pickedEmoji, setPickedEmoji] = useState([])
  const [thisPickedEmoji, setThisPickedEmoji] = useState(null)
  const [status, requestPermission] = MediaLibrary.usePermissions()
  const imageRef = useRef()

  if (status === null) {
    requestPermission()
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert('Вы не выбрали ни одного изображения')
    }
  }

  const onReset = () => {
    setShowAppOptions(false)
    setPickedEmoji([])
    setThisPickedEmoji(null)
  }

  const onAddSticker = () => {
    setIsModalVisible(true)
  }

  const addSticker = (sticker) => {
    setPickedEmoji([...pickedEmoji, sticker])
    setThisPickedEmoji(sticker)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      })
      await MediaLibrary.saveToLibraryAsync(localUri)
      if (localUri) {
        alert("Сохранено!")
      }
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageView}>
          <View ref={imageRef} collapsable={false}>
            <ImageViewer
              placeholderImageSource={PlaceholderImage}
              selectedImage={selectedImage}
              pickedEmoji={pickedEmoji}
              setThisPickedEmoji={setThisPickedEmoji}
            />
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Сбросить" onPress={onReset}/>
              <CircleButton onPress={onAddSticker}/>
              <IconButton icon="save-alt" label="Сохранить" onPress={onSaveImageAsync}/>
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button theme="primary" label="Выбрать фотографию" onPress={pickImageAsync}/>
            <Button label="Оставить фотографию" onPress={()=>setShowAppOptions(true)}/>
          </View>
        )}
      </View>
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={addSticker} onCloseModal={onModalClose}/>
      </EmojiPicker>
      <StatusBar style="light"/>
    </GestureHandlerRootView>
  )
}
