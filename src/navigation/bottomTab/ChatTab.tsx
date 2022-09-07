import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Chat from '../../screens/chat'

const Stack = createNativeStackNavigator()

function ChatTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Chat'}
        options={{ headerShown: false }}
        component={Chat}
      />
    </Stack.Navigator>
  )
}

export default ChatTab
