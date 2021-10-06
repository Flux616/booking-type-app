import React from 'react';
import { ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/core';
import styled from 'styled-components/native';

type Props = {
    image: ImageSourcePropType
}

const Preview: React.FC<Props> = ({image}) => {
    const navigation = useNavigation();

    return (
        <StyledView>
            <StyledImage source={image}/>
            <StyledBackIconContainer blurType='light'>
                <Icon name='chevron-back' size={28} color={'white'} onPress={navigation.goBack}/>
            </StyledBackIconContainer>
            <StyledBookmarkIcon blurType='light'>
                <Icon name='bookmark-outline' size={28} color={'white'}/>
            </StyledBookmarkIcon>
        </StyledView>
    );
};

const StyledView = styled.View`
justifyContent: center;
alignItems: center
`

const StyledImage = styled.Image`
width: 100%;
height: 300px;
borderRadius: 10px
`

const StyledBackIconContainer = styled(BlurView)`
left: 15px;
width: 40px;
height: 40px;
position: absolute;
top: 15px;
opacity: 0.75;
borderRadius: 5px;
justifyContent: center;
alignItems: center
`

const StyledBookmarkIcon = styled(BlurView)`
right: 15px;
width: 40px;
height: 40px;
position: absolute;
top: 15px;
opacity: 0.75;
borderRadius: 5px;
justifyContent: center;
alignItems: center
`

export default Preview;