import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from './search-screen/Index'
import Event from './event-screen/Index'
import Favorite from './favorite-screen/Index'
import config from '../../config';
import Profile from './profile-screen/Index'
import { useLinkBuilder, useTheme } from '@react-navigation/native'
import BottomTabBarIcon from '../../component/base/BottomTabBarIcon'

const Index = () => {
    const Tab = createBottomTabNavigator();
    //search, events, favorite, profile
  return (
   <>
   <Tab.Navigator screenOptions={{headerShown:false}} tabBar={
    
      props => <BottomTabBarIcon {...props} />}
     >
    <Tab.Screen name={config.Route.SEARCH} component={Search}/>
    <Tab.Screen name={config.Route.EVENT} component={Event}/>
    <Tab.Screen name={config.Route.FAVORITE} component={Favorite}/>
    <Tab.Screen name={config.Route.PROFILE} component={Profile}/>
   </Tab.Navigator>
   </>
  )
  
}

// function MyTabBar({ state, descriptors, navigation }) {
//     const { colors } = useTheme();
//     const { buildHref } = useLinkBuilder();
  
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         {state.routes.map((route, index) => {
//           const { options } = descriptors[route.key];
//           const label =
//             options.tabBarLabel !== undefined
//               ? options.tabBarLabel
//               : options.title !== undefined
//                 ? options.title
//                 : route.name;
  
//           const isFocused = state.index === index;
  
//           const onPress = () => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: route.key,
//               canPreventDefault: true,
//             });
  
//             if (!isFocused && !event.defaultPrevented) {
//               navigation.navigate(route.name, route.params);
//             }
//           };
  
//           const onLongPress = () => {
//             navigation.emit({
//               type: 'tabLongPress',
//               target: route.key,
//             });
//           };
  
//           return (
//             <PlatformPressable
//               href={buildHref(route.name, route.params)}
//               accessibilityState={isFocused ? { selected: true } : {}}
//               accessibilityLabel={options.tabBarAccessibilityLabel}
//               testID={options.tabBarButtonTestID}
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={{ flex: 1 }}
//             >
//               <Text style={{ color: isFocused ? colors.primary : colors.text }}>
//                 {label}
//               </Text>
//             </PlatformPressable>
//           );
//         })}
//       </View>
//     );
//   }
export default Index

const styles = StyleSheet.create({})