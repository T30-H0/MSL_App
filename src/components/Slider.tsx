import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Colors, Images } from '../themes'
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
        <WText type="bold18" mTop={20}>
          Year End Sale
        </WText>
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
    backgroundColor: Colors.primary,
  },
})
