import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const AppHeader = ({
   userName
    
}) => {
    return (
        <View style={styles.container}>
           
            <Text style={styles.title}>Hello{userName} !</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: 'row',
        backgroundColor: '#ff00ff',
        alignItems: 'center'
    },
    menuIcon: {
        marginStart: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: '#000',
        marginStart: 10,
       // alignItems: 'center',

    }
})

export default React.memo(AppHeader)