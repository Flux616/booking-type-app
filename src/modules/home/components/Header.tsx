import { observer } from 'mobx-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled, { useTheme } from 'styled-components/native';
import CurrentTheme from '../../../config/stores/theme';

const Header = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'screens.home.header'})
    const theme = useTheme()

    return (
        <StyledView>
            <StyledTouchableOpacity onPress={() => CurrentTheme.toggleTheme()}>
                <Icon
                    name={theme.isDark ? 'sunny-outline' : 'moon-outline'}
                    size={30}
                    color={theme.toggleIcon}
                />
            </StyledTouchableOpacity>
            <View>
                <UpperText>{t('welcome')}</UpperText>
                <LowerText>{t('intro')}</LowerText>
            </View>
            <View>
                <StyledImage source={require('../../../../assets/images/avatar.jpg')}/>
            </View>
        </StyledView>
    )
}

const StyledView = styled.View`
justifyContent: space-between;
flexDirection: row;
marginHorizontal: 10px
`

const UpperText = styled.Text`
color: ${props => props.theme.schemeColor};
fontSize: 20px;
fontWeight: bold
`

const LowerText = styled.Text`
marginTop: 10px;
color: ${props => props.theme.schemeColor}
`

const StyledImage = styled.Image`
width: 50px;
height: 50px;
borderRadius: 50px
`

const StyledTouchableOpacity = styled.TouchableOpacity`
justifyContent: center;
alignItems: center;
paddingLeft: 5px
`

export default observer(Header);
