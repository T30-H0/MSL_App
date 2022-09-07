import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import BottomTab from './bottomTab'
const RootStack = createStackNavigator()

const NavigationRoot = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
      }}
      initialRouteName={'MAIN'}
    >
      <RootStack.Group>
        <RootStack.Screen name={'MAIN'} component={BottomTab} />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default NavigationRoot
