import {Platform, StatusBar, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import config from '../config';
import Search from '../screen/main-screen/search-screen/Index'
import Event from '../screen/main-screen/event-screen/Index'
import Favorite from '../screen/main-screen/favorite-screen/Index'
import Profile from '../screen/main-screen/profile-screen/Index'
import { ScreenStatusBar } from '../component/base/staus-bar';
import Main from '../screen/main-screen/Index'


const PrivateNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <ScreenStatusBar backgroundColor={'white'} barStyle="dark-content" />
       <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={config.Route.MAIN} component={Main} />
          <Stack.Screen name={config.Route.SEARCH} component={Search} />
          <Stack.Screen name={config.Route.EVENT} component={Event} />
          <Stack.Screen name={config.Route.FAVORITE} component={Favorite} />
          <Stack.Screen name={config.Route.PROFILE} component={Profile} />
       
      </Stack.Navigator>
    </>
  );
};

export default PrivateNavigator;

const styles = StyleSheet.create({});
