import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { EditScreenNavigationProps } from '../../../config/navigation/types';

const ProfileInfo = ({name, description, image}: {name: string, description: string, image: ImageSourcePropType }) => {
    const navigation = useNavigation<EditScreenNavigationProps>();

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userDescription}>{description}</Text>
            </View>
            <Icon
                name='edit'
                size={24}
                color={'#808080'}
                onPress={() => navigation.navigate('EditProfile')}/>
        </View>
    );
};

export default ProfileInfo;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 5
    },
    userDescription: {
        fontSize: 12,
        color: '#808080',
        marginVertical: 5
    }
});