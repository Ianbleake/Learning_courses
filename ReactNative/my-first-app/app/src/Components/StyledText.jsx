import React from 'react'
import {Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: 'black'
  },
  Bold: {
    fontWeight: 'bold'
  },
  Normal: {
    fontWeight: 'normal'
  },
  Blue: {
    color: 'blue'
  },
  Big: {
    fontSize: 25
  },
  Small: {
    fontSize: 14
  }
})


export default function StyledText({Blue,Bold,children,Big,Small,Normal}){
  const textstyles = [
    styles.text,
    Blue && styles.Blue,
    Big && styles.Big,
    Normal && styles.Normal,
    Small && styles.Small,
    Bold && styles.Bold
  ]

  return(
    <Text style={textstyles}>
      {children}
    </Text>
  )
}
