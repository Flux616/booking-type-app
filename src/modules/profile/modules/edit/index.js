import React from 'react'
import { StyleSheet, TextInput, View, Image, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setDescription, setName, setEmail, setUsername } from '../../slice'
import Icon from 'react-native-vector-icons/Ionicons'


const CustomTextInput = ({value, label, onChangeText, style}) => (
    <View>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
            value={value}
            style={style}
            onChangeText={onChangeText}
        />
    </View>
)

const EditProfile = () => {
    const {name, description, email, username} = useSelector(state => state.profile)
    const dispatch = useDispatch();

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
                        onChangeText={(value) => {
                            dispatch(setName(value))
                        }}
                    />
                    <CustomTextInput
                        value={description}
                        style={styles.descriptionInput}
                        onChangeText={(value) => {
                            dispatch(setDescription(value))
                        }}
                    />
                    <CustomTextInput
                        value={email}
                        label='Email Adress'
                        style={styles.bottomLineInput}
                        onChangeText={(value) => {
                            dispatch(setEmail(value))
                        }}
                    />
                    <Text style={styles.label}>Username</Text>
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
                            onChangeText={(value) => {
                                dispatch(setUsername(value))
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.joinedContainer}>
                <Text style={styles.joinedText}>Joined</Text>
                <Text style={styles.joinedDate}>2 Sep 2021</Text>
            </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#f8f8ff'
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
        backgroundColor: '#00bfff',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30,
        left: 40
    }
})
