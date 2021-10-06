import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

const ProfileFooter = () => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.profile.footer'});

    return (
        <View>
            <Header>{t('title')}</Header>
            <TouchableOpacity>
                <SwitchText>{t('switch')}</SwitchText>
            </TouchableOpacity>
            <TouchableOpacity>
                <LogoutText>{t('logout')}</LogoutText>
            </TouchableOpacity>
        </View>
    );
};

const Header = styled.Text`
  color: ${props => props.theme.text}
`;

const SwitchText = styled.Text`
  color: ${props => props.theme.switchAccountText};
  fontWeight: bold;
  marginTop: 10px;
`;

const LogoutText = styled.Text`
  color: ${props => props.theme.logoutText};
  fontWeight: bold;
  marginTop: 10px;
`;

export default ProfileFooter;