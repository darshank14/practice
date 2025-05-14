import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import config from '../config';
import Login from '../screen/auth-screen/login-screen/Index'
import Register from '../screen/auth-screen/register-screen/Index'


const PublicNaviagtion = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name={config.Route.LOGIN} component={Login} />
       <Stack.Screen name={config.Route.REGISTER} component={Register} />

    </Stack.Navigator>
  );
};

export default PublicNaviagtion;
