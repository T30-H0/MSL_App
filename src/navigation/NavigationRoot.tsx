import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import IntroScreen from '../screens/start/IntroScreen'
import BottomTab from './bottomTab'
const RootStack = createStackNavigator()
const Stack = createNativeStackNavigator()

const NavigationRoot = () => {
  const firstOpen: boolean = true
  const initialScreen = firstOpen ? IntroScreen : BottomTab
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
      }}
      initialRouteName={'MAIN'}
    >
      <RootStack.Group>
        <RootStack.Screen name={'MAIN'} component={initialScreen} />
      </RootStack.Group>
      <Stack.Screen name="Intro" component={IntroScreen} />
    </RootStack.Navigator>
  )
}

export default NavigationRoot
