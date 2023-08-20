import { styles } from '../styles/styles'
import { useState } from 'react'
import { FlatList, Image, Platform, Pressable, Dimensions } from 'react-native'

export default function EmojiList({onSelect, onCloseModal}) {
  const [emoji] = useState([
    require('../assets/images/sticker1.png'),
    require('../assets/images/sticker2.png'),
    require('../assets/images/sticker3.png'),
    require('../assets/images/sticker4.png'),
    require('../assets/images/sticker5.png'),
    require('../assets/images/sticker6.png'),
  ])

  const screenWidth = Dimensions.get('window').width
  const imageWidth = screenWidth / emoji.length * 2

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({item, index}) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item)
              onCloseModal()
            }}>
            <Image
              source={item}
              key={index}
              style={[styles.listImage, {width: imageWidth, resizeMode: 'contain'}]}
            />
          </Pressable>
        )
      }}
    />
  )
}
