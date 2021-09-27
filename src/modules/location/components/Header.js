import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function MyBackButton() {
    const navigation = useNavigation();

    return (
        <View>
            <Ionicons
                style={styles.backButton}
                name={'ios-chevron-back-sharp'}
                onPress={() => {navigation.goBack();}}
                size={36}
                color={'#3F96EA'}
            />
        </View>
    );
}

const LocationHeader = () => (
    <View style={styles.container}>
        <MyBackButton/>
    </View>
);

export default LocationHeader;

const styles = StyleSheet.create({
    container: {
        marginTop: 60
    },
    backButton: {
        marginLeft: 10
    }
});
