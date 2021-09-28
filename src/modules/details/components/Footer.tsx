import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type Props = {
    price: string
}

const Footer: React.FC<Props> = ({price}) => (
    <View style={styles.container}>
        <View style={styles.textWrapper}>
            <Text style={styles.title}>Price</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Booking</Text>
        </TouchableOpacity>
    </View>
);

export default Footer;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 65,
        paddingTop: 10,
        paddingBottom: 10
    },
    title: {
        color: '#808080'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18
    },
    textWrapper: {
        flex: 1,
        justifyContent: 'space-between'
    },
    button: {
        flex: 1,
        backgroundColor: '#3F96EA',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '800'
    }
});