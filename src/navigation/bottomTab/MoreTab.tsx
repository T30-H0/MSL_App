import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import More from '../../screens/more/index'

const Stack = createNativeStackNavigator()

function MoreTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'More'}
        options={{ headerShown: false }}
        component={More}
      />
    </Stack.Navigator>
  )
}

export default MoreTab
