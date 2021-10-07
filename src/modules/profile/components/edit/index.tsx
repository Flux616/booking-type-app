import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import profile from '../../../../config/stores/profile';
import { observer } from 'mobx-react';
import CustomTextInput from './CustomTextInput';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/i18n';
import { EditScreenNavigationProps } from '../../../../config/navigation/types';
import styled, { useTheme } from 'styled-components/native';

const EditProfile = () => {
    const {name, description, email, username} = profile.user;
    const { t } = useTranslation('translation', {keyPrefix: 'screens.edit'});

    return (
        <Wrapper>
            <EditContainer>
                <ImageContainer>
                    <Avatar source={require('../../../../../assets/images/avatar.jpg')} />
                    <PencilIcon>
                        <Icon
                            name='ios-pencil-outline'
                            size={20}
                            color={'#FFFFFF'}
                        />
                    </PencilIcon>
                </ImageContainer>
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
            </EditContainer>
            <JoinedContainer>
                <JoinedText>{t('joined')}</JoinedText>
                <JoinedDate>2 Sep 2021</JoinedDate>
            </JoinedContainer>
        </Wrapper>
    );
};

export const getEditScreenNavigationOptions = ({navigation}: {navigation: EditScreenNavigationProps}) => {
    const theme = useTheme();

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
        )};
};

const Wrapper = styled.View`
  backgroundColor: ${props => props.theme.background};
  flex: 1;
  justifyContent: space-between;
`;

const EditContainer = styled.View`
  marginHorizontal: 30px
`;

const ImageContainer = styled.View`
  alignItems: center;
  marginTop: 30px
`;

const Avatar = styled.Image`
  borderRadius: 100px
  height: 120px;
  width: 120px;
`;

const PencilIcon = styled.View`
  alignItems: center;
  backgroundColor: ${props => props.theme.schemeColor};
  borderRadius: 50px;
  bottom: 30px;
  height: 30px;
  justifyContent: center;
  left: 40px
  position: relative;
  width: 30px;
`;

const NameInput = styled(CustomTextInput)`
  alignSelf: center;
  fontSize: 20px;
  fontWeight: bold;
  marginBottom: 15px
`;

const DescriptionInput = styled(CustomTextInput)`
  alignSelf: center;
  color: ${props => props.theme.lowerText};
  fontSize: 20px;
  fontWeight: bold;
  marginBottom: 40px
`;

const BottomLineInput = styled(CustomTextInput)`
  borderBottomColor: ${props => props.theme.lowerText};
  borderBottomWidth: 1px;
  fontSize: 16px;
  fontWeight: bold;
  marginBottom: 30px;
`;

const Label = styled.Text`
  color: ${props => props.theme.lowerText};
  fontWeight: bold;
  marginBottom: 15px;
`;

const InputWithIcon = styled.View`
  borderBottomColor: ${props => props.theme.lowerText};
  borderBottomWidth: 1px
  flexDirection: row;
`;

const InputIcon = styled(Icon)`
  alignSelf: flex-end
`;

const InputText = styled(CustomTextInput)`
  fontSize: 16px
  fontWeight: bold;
`;

const JoinedContainer = styled.View`
  flexDirection: row;
  margin: 30px
`;

const JoinedText = styled.Text`
  color: ${props => props.theme.text}
`;

const JoinedDate = styled.Text`
  color: ${props => props.theme.text};
  fontWeight: bold;
  marginLeft: 5px;
`;

export default observer(EditProfile);