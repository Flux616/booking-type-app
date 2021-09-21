import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';

const Preview = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/countries/denmark/copenhagen.jpeg')}/>
            <BlurView style={[styles.iconContainer, styles.backIcon]} blurType='light'>
                <Icon name='chevron-back' size={28} color={'white'}/>
            </BlurView>
            <BlurView style={[styles.iconContainer, styles.bookmarkIcon]} blurType='light'>
                <Icon name='bookmark-outline' size={28} color={'white'}/>
            </BlurView>
        </View>
    );
};

export default Preview;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10
    },
    iconContainer: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 15,
        opacity: 0.75,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backIcon: {
        left: 15
    },
    bookmarkIcon: {
        right: 15
    }
});