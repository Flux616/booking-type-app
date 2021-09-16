import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useSelector } from 'react-redux'

const Info = () => {

    const {name, description} = useSelector((state) => state.profile)
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/avatar.jpg')} />
            <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userDescription}>{description}</Text>
            </View>
            <Icon
                name='edit'
                size={24}
                color={'#808080'}
                onPress={() => {navigation.navigate('Edit Profile')}}/>
        </View>
    )
}

export default Info

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
})
