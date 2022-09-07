import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import { Provider } from 'react-redux';
// import i18n from './src/i18n';
// import { navigationRef, notificationRef } from './src/navigation/NavigationHelpers';
// import NavigationTheme from './src/navigation/NavigationTheme';
// import store from './src/redux/Store';
import NavigationRoot from './src/navigation/NavigationRoot'

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      {/* <I18nextProvider i18n={i18n}> */}
      {/* <Provider store={store}> */}
      <NavigationContainer>
        <NavigationRoot />
      </NavigationContainer>
      {/* </Provider> */}
      {/* </I18nextProvider> */}
    </SafeAreaProvider>
  )
}

export default App
