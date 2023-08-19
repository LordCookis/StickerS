import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useEffect, useState } from 'react'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import * as ImagePicker from 'expo-image-picker'
import ImageViewer from './components/ImageViewer'
import Button from './components/Button'
import CircleButton from './components/CircleButton'
import IconButton from './components/IconButton'
import EmojiPicker from './components/EmojiPicker'
import EmojiList from './components/EmojiList'
import EmojiSticker from './components/EmojiSticker'

const PlaceholderImage = require('./assets/images/Кагуинька~.png')

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [pickedEmoji, setPickedEmoji] = useState(null)
  const [emojis, setEmojis] = useState([])

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
  }

  const onAddSticker = () => {
    const newEmoji = {
      id: Date.now(),
      source: pickedEmoji,
      imageSize: 40,
      positionX: 100,
      positionY: 100,
    }
    setEmojis([...emojis, newEmoji])
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  const onSaveImageAsync = async () => {

  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {emojis.map((emoji) => (
          <EmojiSticker
            key={emoji.id}
            imageSize={emoji.imageSize}
            stickerSource={emoji.source}
            positionX={emoji.positionX}
            positionY={emoji.positionY}
          />,
          alert(1)
        ))}
      </View>
      <View style={styles.footerContainer}>
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset}/>
              <CircleButton onPress={onAddSticker}/>
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
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
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
      </EmojiPicker>
      <StatusBar style="light"/>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121013',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})
