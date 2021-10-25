import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/core';
import styled from 'styled-components/native';
import CitiesStore from '../../../config/stores/cities';

type Props = { image: string, cityKey: string }

const Preview: React.FC<Props> = ({image, cityKey}) => {
    const navigation = useNavigation();

    const removeCity = () => {
        CitiesStore.deleteCity(cityKey);
        navigation.goBack();
    };

    return (
        <Wrapper>
            <CityImage source={{uri: image}}/>
            <BackIcon blurType='light'>
                <Icon name='chevron-back' size={28} color={'white'} onPress={navigation.goBack}/>
            </BackIcon>
            <TrashIcon blurType='light'>
                <Icon name='trash-outline' size={28} color={'white'} onPress={removeCity}/>
            </TrashIcon>
        </Wrapper>
    );
};

const Wrapper = styled.View`
  alignItems: center;
  justifyContent: center;
`;

const CityImage = styled.Image`
  borderRadius: 10px;
  height: 300px;
  width: 100%;
`;

const BackIcon = styled(BlurView)`
  alignItems: center;
  borderRadius: 5px;
  height: 40px;
  justifyContent: center;
  left: 15px;
  opacity: 0.75;
  position: absolute;
  top: 15px;
  width: 40px;
`;

const TrashIcon = styled(BlurView)`
  alignItems: center;
  borderRadius: 5px;
  height: 40px;
  justifyContent: center;
  opacity: 0.75;
  position: absolute;
  right: 15px;
  top: 15px;
  width: 40px;
`;

export default Preview;