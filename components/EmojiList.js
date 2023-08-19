import { useState } from 'react'
import { StyleSheet, FlatList, Image, Platform, Pressable, Dimensions } from 'react-native'

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
  const imageWidth = screenWidth / emoji.length

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
              style={[styles.image, {width: imageWidth, resizeMode: 'contain'}]}
            />
          </Pressable>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 100,
    marginRight: 20,
  },
})