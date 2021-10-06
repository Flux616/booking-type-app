import { DefaultTheme } from 'styled-components/native';

const dark: DefaultTheme = {
    key: 'dark',
    background: '#3D4043',
    locationContainer: '#202124',
    text: '#DCDEE1',
    searchBar: '#202124',
    featContainer: '#202124',
    featIcon: '#bbb',
    shadowColor: '#202124',
    toggleIcon: '#808080',
    descriptionText: '#BFBFBF',
    schemeColor: '#3F96EA',
    lowerText: '#808080',
    ratingText: '#ffcd00',
    switchAccountText: '#4169e1',
    logoutText: '#990000',
    blackShadow: '#000000',
    whiteText: '#fff',
    dashboard: {
        payments: '#32CD32',
        achievements: '#FFD700',
        privacy: '#808080',
    }
} as const;

export default dark;