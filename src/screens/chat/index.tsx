import React from 'react'
import { StyleSheet } from 'react-native'
import WView from '../../components/WView'
import { Colors } from '../../themes'

const Chat = () => {
  return (
    <WView style={styles.container}>
      <WView style={styles.body} />
      <WView style={styles.footer} />
    </WView>
  )
}

export default Chat
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.superGreen,
  },
  body: {
    flex: 3,
    backgroundColor: Colors.white,
    borderBottomRightRadius: 180,
  },
  footer: {
    flex: 1,
  },
})
