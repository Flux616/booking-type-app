import { DefaultTheme } from 'styled-components/native';

const light: DefaultTheme = {
    key: 'light',
    background: '#fff',
    locationContainer: '#fff',
    text: '#000',
    searchBar: '#F5F5F5',
    featContainer: '#F8F8F8',
    featIcon: '#555',
    doneIcon: '#00b300',
    shadowColor: '#808080',
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

export default light;