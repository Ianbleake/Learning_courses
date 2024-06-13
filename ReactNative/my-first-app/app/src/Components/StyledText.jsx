import React from 'react'
import {Text, StyleSheet} from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  Bold: {
    fontWeight: theme.fontWeights.bold
  },
  Normal: {
    fontWeight: theme.fontWeights.normal
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,

  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  margin: {
    marginBottom: theme.marginBottoms.medium
  }
})


export default function StyledText({children, color, fontSize, fontWeight, style,marginBottom,...restOfProps}){
  const textstyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.Bold,
    marginBottom === 'medium' && styles.margin

  ]

  return(
    <Text style={textstyles} {...restOfProps}>
      {children}
    </Text>
  )
}
