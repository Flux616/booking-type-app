import { useTranslation } from "react-i18next";

export const getProfileStatusList = () => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.profile.status'})

    return [
        {
            title: '😴' + t('away'),
            color: '#000000',
            key: 'away'
        },
        {
            title: '💼' + t('work'),
            color: '#228B22',
            key: 'work'
        },
        {
            title: '🏖' + t('vacation'),
            color: '#FFA500',
            key: 'vacation'
        },
        {
            title: '👋' + t('free'),
            color: '#4169e1',
            key: 'free'
        }
    ];
}