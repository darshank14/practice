import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { persistor, store } from './src/redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Authenication from './src/navigation/Authenication'
const App = () => {

  useEffect(()=>{
    
  },[])
  return (

    <NavigationContainer>
      <AppNav />
    </NavigationContainer>

  )
}


const AppNav = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <Authenication />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;