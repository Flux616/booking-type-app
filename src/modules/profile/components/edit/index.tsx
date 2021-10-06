import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import profile from '../../../../config/stores/profile'
import { observer } from 'mobx-react';
import CustomTextInput from './CustomTextInput';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/i18n';
import { EditScreenNavigationProps } from '../../../../config/navigation/types';
import styled, { useTheme } from 'styled-components/native';

const EditProfile = () => {
    const {name, description, email, username} = profile.user;
    const { t } = useTranslation('translation', {keyPrefix: 'screens.edit'})

    return (
        <Wrapper>
            <StyledView>
                <StyledImageContainer>
                    <StyledImage source={require('../../../../../assets/images/avatar.jpg')} />
                    <StyledPencilIcon>
                        <Icon
                            name='ios-pencil-outline'
                            size={20}
                            color={'#FFFFFF'}
                        />
                    </StyledPencilIcon>
                </StyledImageContainer>
                <View>
                    <NameInput
                        value={name}
                        onChangeText={(value) => profile.setName(value)}
                    />
                    <DescriptionInput
                        value={description}
                        onChangeText={(value) => profile.setDescription(value)}
                    />
                    <BottomLineInput
                        value={email}
                        label={t('email')}
                        onChangeText={(value) => profile.setEmail(value)}
                    />
                    <Label>{t('username')}</Label>
                    <InputWithIcon>
                        <InputIcon
                            name='at-outline'
                            size={16}
                            color='#808080'
                        />
                        <InputText
                            value={username}
                            onChangeText={(value) => profile.setUsername(value)}
                        />
                    </InputWithIcon>
                </View>
            </StyledView>
            <JoinedContainer>
                <JoinedText>{t('joined')}</JoinedText>
                <JoinedDate>2 Sep 2021</JoinedDate>
            </JoinedContainer>
        </Wrapper>
    );
};

export const getEditScreenNavigationOptions = ({navigation}: {navigation: EditScreenNavigationProps}) => {
    const theme = useTheme()

    return {
    title: i18n.t('screens.edit.header'),
    headerTitleStyle: {color: theme.text},
    headerShown: true,
    headerStyle: {backgroundColor: theme.background},
    headerLeft: () => (
        <Icon
            name='chevron-back-outline'
            size={26}
            color={theme.lowerText}
            onPress={navigation.goBack}
        />
    )}
}

const Wrapper = styled.View`
flex: 1;
justifyContent: space-between;
backgroundColor: ${props => props.theme.background}
`

const StyledView = styled.View`
marginHorizontal: 30px
`

const StyledImageContainer = styled.View`
alignItems: center;
marginTop: 30px
`

const StyledImage = styled.Image`
width: 120px;
height: 120px;
borderRadius: 100px
`

const StyledPencilIcon = styled.View`
position: relative;
width: 30px;
height: 30px;
borderRadius: 50px;
backgroundColor: ${props => props.theme.schemeColor};
justifyContent: center;
alignItems: center;
bottom: 30px;
left: 40px
`

const NameInput = styled(CustomTextInput)`
fontWeight: bold;
fontSize: 20px;
alignSelf: center;
marginBottom: 15px
`

const DescriptionInput = styled(CustomTextInput)`
fontWeight: bold;
fontSize: 20px;
color: ${props => props.theme.lowerText};
alignSelf: center;
marginBottom: 40px
`

const BottomLineInput = styled(CustomTextInput)`
marginBottom: 30px;
borderBottomWidth: 1px;
borderBottomColor: ${props => props.theme.lowerText};
fontWeight: bold;
fontSize: 16px
`

const Label = styled.Text`
marginBottom: 15px;
fontWeight: bold;
color: ${props => props.theme.lowerText}
`

const InputWithIcon = styled.View`
flexDirection: row;
borderBottomColor: ${props => props.theme.lowerText};
borderBottomWidth: 1px
`

const InputIcon = styled(Icon)`
alignSelf: flex-end
`

const InputText = styled(CustomTextInput)`
fontWeight: bold;
fontSize: 16px
`

const JoinedContainer = styled.View`
flexDirection: row;
margin: 30px
`

const JoinedText = styled.Text`
color: ${props => props.theme.text}
`

const JoinedDate = styled.Text`
marginLeft: 5px;
fontWeight: bold;
color: ${props => props.theme.text}
`

export default observer(EditProfile);