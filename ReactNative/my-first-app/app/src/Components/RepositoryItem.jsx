import React from 'react';
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText.jsx'

const RepositoryItem = (props)=>{
  return(  
  <View key={props.id} style={Styles.container} >
    <StyledText Big Bold Blue >Id: {props.id}</StyledText>
    <StyledText Bold >Fullname: <StyledText Normal>{props.fullName}</StyledText></StyledText>
    <StyledText Bold >Description:<StyledText Normal >{props.description}</StyledText> </StyledText>
    <StyledText Bold >Languaje: <StyledText Normal >{props.language}</StyledText> </StyledText>
    <StyledText Small >Star Count:{props.stargazersCount}</StyledText>
    <StyledText Small >Forks: {props.forksCount}</StyledText>
    <StyledText Small >Review Count: {props.reviewCount}</StyledText>
    <StyledText Small >Rating Average: {props.ratingAverage}</StyledText>
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