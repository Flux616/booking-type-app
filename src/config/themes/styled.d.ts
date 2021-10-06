import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        isDark: boolean
        background: string
        locationContainer: string
        text: string
        searchBar: string
        featContainer: string
        featIcon: string
        shadowColor: string,
        toggleIcon: string,
        descriptionText: string,
        schemeColor: string,
        lowerText: string,
        ratingText: string,
        switchAccountText: string,
        logoutText: string,
        blackShadow: string,
        whiteText: string,
        dashboard: {
            payments: string,
            achievements: string,
            privacy: string,
        }
    }
}