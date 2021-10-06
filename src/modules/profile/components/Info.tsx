import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import { EditScreenNavigationProps } from '../../../config/navigation/types';

const ProfileInfo = ({name, description, image}: {name: string, description: string, image: ImageSourcePropType }) => {
    const navigation = useNavigation<EditScreenNavigationProps>();

    return (
        <StyledView>
            <StyledImage source={image} />
            <View>
                <StyledName>{name}</StyledName>
                <StyledDescription>{description}</StyledDescription>
            </View>
            <Icon
                name='edit'
                size={24}
                color={'#808080'}
                onPress={() => navigation.navigate('EditProfile')}/>
        </StyledView>
    );
};

const StyledView = styled.View`
flexDirection: row;
alignItems: center;
justifyContent: space-between
`

const StyledImage = styled.Image`
width: 120px;
height: 120px;
borderRadius: 100px
`

const StyledName = styled.Text`
fontWeight: bold;
fontSize: 18px;
marginVertical: 5px;
color: ${props => props.theme.text}
`

const StyledDescription = styled.Text`
fontSize: 12px;
color: #808080;
marginVertical: 5px
`

export default ProfileInfo;