import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'



import Config from '../../../config';


const BottomTabBarIcon = ({ state, navigation }) => {

    // console.log("state ===", state);
    //Search,Event,Favorite,Profile

    const getTabIcon = (label, isImg) => {
        // console.log("label", label);
        switch (label) {
            case 'Search':
                return isImg ? <Config.Images.SEARCH width={25} height={25} /> : 'SEARCH';
            case 'Event':
                return isImg ? <Config.Images.CALENDER width={25} height={25} /> : 'EVENT';
            case 'Favorite':
                return isImg ? <Config.Images.FAVTAB width={25} height={25} /> : 'FAVORITE';
            case 'Profile':
                return isImg ? <Config.Images.PROFILE width={25} height={25} /> : 'PROFILE';
            default:
                return isImg ? '' : '';
        }
    };

    const onPress = scrrenName => {
        navigation.reset({
            index: 0,
            routes: [{ name: scrrenName }],
        });
    };

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => onPress(route.name)}
                        style={{ justifyContent: 'center',alignItems:'center' }}
                    >
                        {getTabIcon(route.name, true)}
                        <Text>
                            {getTabIcon(route.name, false)}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Config.Theme.COLOR_FFF,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})


export default React.memo(BottomTabBarIcon)