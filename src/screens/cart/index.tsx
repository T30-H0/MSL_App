import React from 'react'
import { StyleSheet } from 'react-native'
import WView from '../../components/WView'
import { Colors } from '../../themes'

const Cart = () => {
  return (
    <WView style={styles.container}>
      <WView style={styles.footer} />
      <WView style={styles.body} />
    </WView>
  )
}

export default Cart
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    flex: 3,
    backgroundColor: Colors.superGreen,
    borderTopLeftRadius: 180,
  },
  footer: {
    flex: 1,
  },
})
