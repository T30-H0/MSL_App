import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Images } from '../themes'
import { SCREEN_WIDTH } from '../themes/Constants'
import WText from './WText'

const Slider = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.imgDefault}
        style={styles.imageBackground}
      />
      <View>
        <WText>Year End Sale</WText>
      </View>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
  container: { padding: 20 },
  imageBackground: {
    top: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH / 2,
    position: 'absolute',
  },
})
