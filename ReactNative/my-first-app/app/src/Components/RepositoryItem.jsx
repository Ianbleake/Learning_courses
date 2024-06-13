import React from 'react';
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText.jsx'

const RepositoryStats = props => {
  return(
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
      <View>
        <StyledText fontWeight='bold' >Stars:</StyledText>
        <StyledText >{props.stargazersCount}</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold' >Forks:</StyledText>
        <StyledText >{props.forksCount}</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold' >Reviews:</StyledText>
        <StyledText >{props.reviewCount}</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold' >Ratings:</StyledText>
        <StyledText>{props.ratingAverage}</StyledText>
      </View>
    </View>
  )
}

const RepositoryItem = (props)=>{
  return(  
  <View key={props.id} style={Styles.container} >
    <StyledText fontSize='subheading' fontWeight='bold'>{props.fullName}</StyledText>
    <StyledText >Description:<StyledText >{props.description}</StyledText> </StyledText>
    <StyledText >Languaje: <StyledText >{props.language}</StyledText> </StyledText>
    <RepositoryStats {...props} />
  </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  }
})

export default RepositoryItem