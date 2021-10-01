import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import profile from '../../../../config/stores/profile'
import { observer } from 'mobx-react';
import CustomTextInput from './CustomTextInput';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/i18n';
import { EditScreenNavigationProps } from '../../../../config/navigation/types';

const EditProfile = () => {
    const {name, description, email, username} = profile.user;
    const { t } = useTranslation('translation', {keyPrefix: 'screens.edit'})

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../../../../assets/images/avatar.jpg')} />
                    <View style={styles.pencilIcon}>
                        <Icon
                            name='ios-pencil-outline'
                            size={20}
                            color={'#FFFFFF'}
                        />
                    </View>
                </View>
                <View>
                    <CustomTextInput
                        style={styles.nameInput}
                        value={name}
                        onChangeText={(value) => profile.setName(value)}
                    />
                    <CustomTextInput
                        value={description}
                        style={styles.descriptionInput}
                        onChangeText={(value) => profile.setDescription(value)}
                    />
                    <CustomTextInput
                        value={email}
                        label={t('email')}
                        style={styles.bottomLineInput}
                        onChangeText={(value) => profile.setEmail(value)}
                    />
                    <Text style={styles.label}>{t('username')}</Text>
                    <View style={styles.inputWithIcon}>
                        <Icon
                            name='at-outline'
                            size={16}
                            color='#808080'
                            style={styles.inputIcon}
                        />
                        <CustomTextInput
                            value={username}
                            style={styles.inputWithIconText}
                            onChangeText={(value) => profile.setUsername(value)}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.joinedContainer}>
                <Text>{t('joined')}</Text>
                <Text style={styles.joinedDate}>2 Sep 2021</Text>
            </View>
        </View>
    );
};

export const getEditScreenNavigationOptions = ({navigation}: {navigation: EditScreenNavigationProps}) => ({
    title: i18n.t('screens.edit.header'),
    headerShown: true,
    headerLeft: () => (
        <Icon
            name='chevron-back-outline'
            size={26}
            color='#808080'
            onPress={navigation.goBack}
        />
    )}
)

export default observer(EditProfile);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'
    },
    container: {
        marginHorizontal: 30
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    bottomLineInput: {
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
        fontWeight: 'bold',
        fontSize: 16
    },
    nameInput: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 15
    },
    descriptionInput: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#808080',
        alignSelf: 'center',
        marginBottom: 40
    },
    label: {
        marginBottom: 15,
        fontWeight: 'bold',
        color: '#808080'
    },
    inputWithIcon: {
        flexDirection: 'row',
        borderBottomColor: '#808080',
        borderBottomWidth: 1
    },
    inputWithIconText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    inputIcon: {
        alignSelf: 'flex-end'
    },
    joinedContainer: {
        flexDirection: 'row',
        margin: 30
    },
    joinedDate: {
        marginLeft: 5,
        fontWeight: 'bold'
    },
    pencilIcon: {
        position: 'relative',
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: '#3F96EA',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30,
        left: 40
    }
});
