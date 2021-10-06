import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Description = () => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.details.description'})

    return (
        <View>
            <Title>{t('description')}</Title>
            <Content>{t('contentText')}</Content>
        </View>
    );
}

const Title = styled.Text`
fontWeight: bold,
fontSize: 18px;
marginBottom: 10px;
color: ${props => props.theme.text}
`

const Content = styled.Text`
color: ${props => props.theme.descriptionText}
`

export default Description;