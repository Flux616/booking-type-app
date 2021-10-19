import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import LocationsStore from '../../../config/stores/locations';

type Props = {description: string, cityKey: string}

const Description = ({description, cityKey} : Props) => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.details.description'});
    const [isFocused, setIsFocused] = useState(false);
    const [cityDescription, setCityDescription] = useState(description);
    const theme = useTheme();

    const editDescription = (cityDescription: string, cityKey: string) => {
        LocationsStore.editCityDescription(cityDescription, cityKey);
        setIsFocused(false);
    };

    return (
        <View>
            <Title>{t('description')}</Title>
            { !isFocused &&
                <View>
                    <Content onPress={() => setIsFocused(true)}>{cityDescription}</Content>
                </View>
            }
            { isFocused &&
                <View>
                    <ContentInput multiline onChangeText={(value) => setCityDescription(value)}>{cityDescription}</ContentInput>
                    <Checkmark
                        name='checkmark-circle-outline'
                        size={26}
                        color={theme.doneIcon}
                        onPress={() => editDescription(cityDescription, cityKey)}
                    />
                </View>
            }
        </View>
    );
};

const Title = styled.Text`
  color: ${props => props.theme.text}
  fontSize: 18px;
  fontWeight: bold;
  marginBottom: 10px;
`;

const Content = styled.Text`
  color: ${props => props.theme.descriptionText}
`;

const Checkmark = styled(Icon)`
  bottom: -26px;
  position: absolute;
  right: 0;
`;

const ContentInput = styled.TextInput`
  color: ${props => props.theme.descriptionText};
  padding-top: 0px
`;

export default Description;