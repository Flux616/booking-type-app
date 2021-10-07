import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import { EditScreenNavigationProps } from '../../../config/navigation/types';

const ProfileInfo = ({name, description, image}: {name: string, description: string, image: ImageSourcePropType }) => {
    const navigation = useNavigation<EditScreenNavigationProps>();

    return (
        <Wrapper>
            <Avatar source={image} />
            <View>
                <Name>{name}</Name>
                <Description>{description}</Description>
            </View>
            <Icon
                name='edit'
                size={24}
                color={'#808080'}
                onPress={() => navigation.navigate('EditProfile')}/>
        </Wrapper>
    );
};

const Wrapper = styled.View`
  alignItems: center;
  flexDirection: row;
  justifyContent: space-between
`;

const Avatar = styled.Image`
  borderRadius: 100px
  height: 120px;
  width: 120px;
`;

const Name = styled.Text`
  color: ${props => props.theme.text};
  fontSize: 18px;
  fontWeight: bold;
  marginVertical: 5px;
`;

const Description = styled.Text`
  color: ${props => props.theme.lowerText};
  fontSize: 12px;
  marginVertical: 5px
`;

export default ProfileInfo;