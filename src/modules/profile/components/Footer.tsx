import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

const ProfileFooter = () => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.profile.footer'})

    return (
        <View>
            <StyledHeader>{t('title')}</StyledHeader>
            <TouchableOpacity>
                <StyledSwitchText>{t('switch')}</StyledSwitchText>
            </TouchableOpacity>
            <TouchableOpacity>
                <StyledLogoutText>{t('logout')}</StyledLogoutText>
            </TouchableOpacity>
        </View>
    );
}

const StyledHeader = styled.Text`
color: ${props => props.theme.text}
`

const StyledSwitchText = styled.Text`
marginTop: 10px;
fontWeight: bold;
color: ${props => props.theme.switchAccountText}
`

const StyledLogoutText = styled.Text`
marginTop: 10px;
fontWeight: bold;
color: ${props => props.theme.logoutText}
`

export default ProfileFooter;