import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Description = () => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.details.description'})

    return (
        <View>
            <StyledTitleText>{t('description')}</StyledTitleText>
            <StyledDescriptionText>{t('contentText')}</StyledDescriptionText>
        </View>
    );
}

const StyledTitleText = styled.Text`
fontWeight: bold,
fontSize: 18px;
marginBottom: 10px;
color: ${props => props.theme.text}
`

const StyledDescriptionText = styled.Text`
color: ${props => props.theme.descriptionText}
`

export default Description;