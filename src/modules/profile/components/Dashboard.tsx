import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import DashboardButton from './DashboardButton';
import styled, { useTheme } from 'styled-components/native';

const ProfileDashboard = () => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.profile.dashboard'});
    const theme = useTheme();

    return (
        <View>
            <Header>{t('title')}</Header>
            <View>
                <DashboardButton color={theme.dashboard.payments} name='wallet-outline' label={t('payments')}/>
                <DashboardButton color={theme.dashboard.achievements} name='medal' label={t('achievements')}/>
                <DashboardButton color={theme.dashboard.privacy} name='shield-lock-outline' label={t('privacy')}/>
            </View>
        </View>
    );
};

const Header = styled.Text`
  color: ${props => props.theme.text};
`;

export default ProfileDashboard;