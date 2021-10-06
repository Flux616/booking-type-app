import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { citiesArray } from '../../../../__mocks__/locationsCititesArray';

const LocationCities = () => (
    <View>
        {citiesArray.map( selected => {
            if (selected.country === 'Germany') {
                return selected.citiesArray.map( city => (
                    <Wrapper key={city.id}>
                        <CityImage source={city.image}/>
                        <TextArea>
                            <CityName>{city.name}</CityName>
                            <CountryName>{selected.country}</CountryName>
                        </TextArea>
                    </Wrapper>
                ));
            }
        })}
    </View>
);

const Wrapper = styled.View`
  backgroundColor: ${props => props.theme.background};
  borderRadius: 4px;
  height: 220px;
  marginHorizontal: 15px;
  marginVertical: 10px;
  padding: 10px;
`;

const CityImage = styled.Image`
  borderRadius: 4px
  height: 130px;
  width: 100%;
`;

const TextArea = styled.View`
  justifyContent: space-around
  marginLeft: 15px;
  marginBottom: 15px;
  marginTop: 10px
`;

const CityName = styled.Text`
  fontWeight: bold
  marginTop: 8px;
`;

const CountryName = styled.Text`
  color: ${props => props.theme.lowerText};
  marginTop: 8px;
`;

export default LocationCities;