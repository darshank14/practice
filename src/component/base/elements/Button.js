import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = (props) => {
  const { btnTitle,containerStyle,txtStyle,onPress } = props
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={txtStyle}>{btnTitle}</Text>
    </TouchableOpacity>
  )
}

export default React.memo(Button)