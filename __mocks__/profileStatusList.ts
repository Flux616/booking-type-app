import { useTranslation } from "react-i18next";

export const getProfileStatusList = () => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.profile.status'})

    return [
        {
            title: '😴' + t('away'),
            style: {backgroundColor: '#000000'},
            key: 'away'
        },
        {
            title: '💼' + t('work'),
            style: {backgroundColor: '#228B22'},
            key: 'work'
        },
        {
            title: '🏖' + t('vacation'),
            style: {backgroundColor: '#FFA500'},
            key: 'vacation'
        },
        {
            title: '👋' + t('free'),
            style: {backgroundColor: '#4169e1'},
            key: 'free'
        }
    ];
}