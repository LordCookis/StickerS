import { View, Image } from 'react-native'
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, useAnimatedGestureHandler, withSpring, } from 'react-native-reanimated'

export default function EmojiSticker({imageSize, stickerSource, setThisPickedEmoji}) {
  const AnimatedView = Animated.createAnimatedComponent(View)
  const AnimatedImage = Animated.createAnimatedComponent(Image)
  const scaleImage = useSharedValue(imageSize)
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const onDrag = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value
      context.translateY = translateY.value
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX
      translateY.value = event.translationY + context.translateY
    },
  })

  const thisEmoji = () => {setThisPickedEmoji(stickerSource)}

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    }
  })

  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value !== imageSize * 2.5) {
        scaleImage.value = scaleImage.value * 2.5
      } else {
        scaleImage.value = scaleImage.value / 2.5
      }
    },
  })

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    }
  })

  return (
    <PanGestureHandler onGestureEvent={onDrag} onTouchEnd={thisEmoji}>
      <AnimatedView style={[containerStyle, {top: -350}]}>
        <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
          <AnimatedImage
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, {width: imageSize, height: imageSize}]}
          />
        </TapGestureHandler>
      </AnimatedView>
    </PanGestureHandler>
  )
}