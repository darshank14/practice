import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import PrivateNavigator from './PrivateNavigator';
import PublicNavigator from './PublicNavigator';

const Routes = () => {
  const token = useSelector(s => s.AuthSlice.token);

  return token ? <PrivateNavigator /> : <PublicNavigator />;
};

export default Routes;
