import { observer } from 'mobx-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled, { useTheme } from 'styled-components/native';
import profile from '../../../config/stores/profile';
import ThemeStore from '../../../config/stores/theme';
import CitiesStore from '../../../config/stores/cities';

const Header = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'screens.home.header'});
    const theme = useTheme();

    return (
        <Wrapper>
            <ThemeToggler onPress={() => ThemeStore.toggleTheme()}>
                <Icon
                    name={theme.key == 'light' ? 'sunny-outline' : 'moon-outline'}
                    size={30}
                    color={theme.toggleIcon}
                />
            </ThemeToggler>
            <CityAdder onPress={() => CitiesStore.addNewCity()}>
                <Icon
                    name='add-circle-outline'
                    size={30}
                    color={theme.toggleIcon}
                />
            </CityAdder>
            <View>
                <WelcomeText>{t('welcome')}</WelcomeText>
                <IntroText>{t('intro')}</IntroText>
            </View>
            <View>
                <Avatar source={{uri: profile.user.image}}/>
            </View>
        </Wrapper>
    );
};

const Wrapper = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  marginHorizontal: 10px;
`;

const WelcomeText = styled.Text`
  color: ${props => props.theme.schemeColor};
  fontSize: 20px;
  fontWeight: bold;
`;

const IntroText = styled.Text`
  color: ${props => props.theme.schemeColor};
  marginTop: 10px;
`;

const Avatar = styled.Image`
  borderRadius: 50px;
  height: 50px;
  width: 50px;
`;

const ThemeToggler = styled.TouchableOpacity`
  alignItems: center;
  justifyContent: center;
  paddingLeft: 5px;
`;

const CityAdder = styled.TouchableOpacity`
  alignItems: center;
  justifyContent: center;
  paddingLeft: 5px;
`;

export default observer(Header);
