import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, useAnimatedGestureHandler, withSpring, } from 'react-native-reanimated'

export default function EmojiSticker({imageSize, stickerSource, setThisPickedEmoji}) {
  const scaleImage = useSharedValue(imageSize)
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const onDrag = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.translateX = translateX.value
      context.translateY = translateY.value
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX
      translateY.value = event.translationY + context.translateY
    },
  });

  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value !== imageSize * 2.5) {
        scaleImage.value = withSpring(imageSize * 2.5)
      } else {
        scaleImage.value = withSpring(imageSize)
      }
    },
  })

  const thisEmoji = () => {
    setThisPickedEmoji(stickerSource)
  }

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
      position: 'absolute',
    }
  })

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    }
  })

  return (
    <PanGestureHandler onGestureEvent={onDrag} onTouchEnd={thisEmoji}>
      <Animated.View style={containerStyle}>
        <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, {width: imageSize, height: imageSize}]}
          />
        </TapGestureHandler>
      </Animated.View>
    </PanGestureHandler>
  )
}