import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { citiesArray } from '../../../../__mocks__/locationsCititesArray';

const LocationCities = () => (
    <View>
        {citiesArray.map( selected => {
            if (selected.country === 'Germany') {
                return selected.citiesArray.map( city => (
                    <StyledView key={city.id}>
                        <StyledImage source={city.image}/>
                        <StyledTextArea>
                            <StyledUpperText>{city.name}</StyledUpperText>
                            <StyledLowerText>{selected.country}</StyledLowerText>
                        </StyledTextArea>
                    </StyledView>
                ));
            }
        })}
    </View>
);

const StyledView = styled.View`
padding: 10px;
marginVertical: 10px;
marginHorizontal: 15px;
height: 220px;
borderRadius: 4px;
backgroundColor: ${props => props.theme.background}
`

const StyledImage = styled.Image`
width: 100%;
height: 130px;
borderRadius: 4px
`

const StyledTextArea = styled.View`
justifyContent: space-around
marginLeft: 15px;
marginBottom: 15px;
marginTop: 10px
`

const StyledUpperText = styled.Text`
marginTop: 8px;
fontWeight: bold
`

const StyledLowerText = styled.Text`
marginTop: 8px;
color: ${props => props.theme.lowerText}
`

export default LocationCities;