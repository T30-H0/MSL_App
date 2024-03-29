import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, Text } from 'react-native'
import { Colors, Icon } from '../../themes'
import HomeTab from '../bottomTab/HomeTab'
import CartTab from './CartTab'
import ChatTab from './ChatTab'
import MoreTab from './MoreTab'

const Tab = createBottomTabNavigator()

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'HOME'}
        component={HomeTab}
        options={({ route }: { route: any }) => ({
          tabBarLabel: ({ color }: { color: string }) => (
            <>
              <Text>Home</Text>
            </>
          ),
          tabBarIcon: ({
            size,
            focused,
          }: {
            size: number
            focused: boolean
          }) => (
            <Image
              source={focused ? Icon.icHomeFill : Icon.icHouse}
              style={{
                width: size,
                height: size,
                tintColor: focused ? Colors.primary : Colors.greyL2,
              }}
            />
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name={'CHAT'}
        component={ChatTab}
        options={({ route }: { route: any }) => ({
          tabBarLabel: ({ color }: { color: string }) => (
            <>
              <Text>Chat</Text>
            </>
          ),
          tabBarIcon: ({
            size,
            focused,
          }: {
            size: number
            focused: boolean
          }) => (
            <Image
              source={focused ? Icon.icChatFill : Icon.icChatsCircle}
              style={{
                width: size,
                height: size,
                tintColor: focused ? Colors.primary : Colors.greyL2,
              }}
            />
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name={'CART'}
        component={CartTab}
        options={({ route }: { route: any }) => ({
          tabBarLabel: ({ color }: { color: string }) => (
            <>
              <Text>Cart</Text>
            </>
          ),
          tabBarIcon: ({
            size,
            focused,
          }: {
            size: number
            focused: boolean
          }) => (
            <Image
              source={Icon.icCart}
              style={{
                width: size,
                height: size,
                tintColor: focused ? Colors.primary : Colors.greyL2,
              }}
            />
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name={'MORE'}
        component={MoreTab}
        options={({ route }: { route: any }) => ({
          tabBarLabel: ({ color }: { color: string }) => (
            <>
              <Text>More</Text>
            </>
          ),
          tabBarIcon: ({
            size,
            focused,
          }: {
            size: number
            focused: boolean
          }) => (
            <Image
              source={focused ? Icon.icThreeDotFill : Icon.icMore}
              style={{
                width: size,
                height: size,
                tintColor: focused ? Colors.primary : Colors.greyL2,
              }}
            />
          ),
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  )
}
export default BottomTab
