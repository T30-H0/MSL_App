import React from 'react'
import { StyleSheet } from 'react-native'
import Slider from '../../components/Slider'
import WText from '../../components/WText'
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
    backgroundColor: Colors.primaryBackground,
  },
  body: {
    flex: 1,
    marginTop: 80,
    marginHorizontal: 20,
    backgroundColor: Colors.blurBackground,
  },
})
