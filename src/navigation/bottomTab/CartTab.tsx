import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Cart from '../../screens/cart/index'

const Stack = createNativeStackNavigator()

function CartTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Cart'}
        options={{ headerShown: false }}
        component={Cart}
      />
    </Stack.Navigator>
  )
}

export default CartTab
