import React from 'react'
import { StyleSheet } from 'react-native'
import Slider from '../../components/Slider'
import WView from '../../components/WView'
import { Colors } from '../../themes'

const Home = () => {
  return (
    <WView style={styles.container}>
      <Slider />
    </WView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blurBackground,
  },
  body: {
    flex: 3,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 180,
  },
  footer: {
    flex: 1,
  },
})
