import React, {useRef} from 'react';
import { StyleSheet, View, FlatList, StyleProp, ViewStyle } from 'react-native';
import { Button } from 'react-native-elements';
import { getProfileStatusList } from '../../../../__mocks__/profileStatusList';

type ButtonProps = {
    item: {
        title: string,
        key: string,
        style: StyleProp<ViewStyle>
    },
    index: number
}

const ProfileStatus = ({status, setStatus}: {status: string, setStatus: (status: string) => void}) => {
    const flatListRef = useRef<FlatList>(null);
    const statusList = getProfileStatusList();

    const onPress = (key: string, index: number): void => {
        setStatus(key);
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({viewPosition: 0.5, animated: true, index})
        };
    };

    const renderButton: React.FC<ButtonProps> = ({ item, index }) => (
        <View style={status === item.key && styles.buttonContainer}>
            <Button
                buttonStyle={[status === item.key ? styles.checkedButton : styles.button, item.style]}
                title={item.title}
                onPress={() => onPress(item.key, index)}
                key={item.key}
            />
        </View>
    );

    return (
        <FlatList
            style={styles.buttonsRow}
            data={statusList}
            renderItem={renderButton}
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
        />
    );
};

export default ProfileStatus;

const styles = StyleSheet.create({
    header: {
        color: '#808080'
    },
    buttonsRow: {
        flexGrow: 0,
        marginTop: 15,
        overflow: 'visible'
    },
    button: {
        marginRight: 10,
        borderRadius: 30,
        padding: 11,
        opacity: 0.25
    },
    buttonContainer: {
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 15,
        shadowOffset: {width: 0, height: 3}
    },
    checkedButton: {
        marginRight: 10,
        borderRadius: 30,
        padding: 11
    }
});
