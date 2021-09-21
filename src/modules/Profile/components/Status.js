import React, {useRef} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '../redux';

const ProfileStatus = () => {
    const status = useSelector(state => state.profile.status);
    const dispatch = useDispatch();
    const flatListRef = useRef();

    const statusList = [
        {
            title: '😴 Away',
            style: styles.away,
            id: 1
        },
        {
            title: '💼 At Work',
            style: styles.work,
            id: 2
        },
        {
            title: '🎮 Gaming',
            style: styles.gaming,
            id: 3
        },
        {
            title: '👋 Free',
            style: styles.free,
            id: 4
        }
    ];

    const onPress = (title, index) => {
        dispatch(setStatus(title));
        flatListRef.current.scrollToIndex({viewPosition: 0.5, animated: true, index});
    };

    const renderButton = ({ item, index }) => (
        <View style={status === item.title && styles.buttonContainer}>
            <Button
                buttonStyle={[status === item.title ? styles.checkedButton : styles.button, item.style]}
                title={item.title}
                onPress={() => onPress(item.title, index)}
                id={item.id}
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
        shadowOffset : { height: 3}
    },
    checkedButton: {
        marginRight: 10,
        borderRadius: 30,
        padding: 11
    },
    away: {
        backgroundColor: '#000000'
    },
    work: {
        backgroundColor: '#228B22'
    },
    gaming: {
        backgroundColor: '#FFA500'
    },
    free: {
        backgroundColor: '#4169e1'
    }
});
