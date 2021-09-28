import React, {useRef} from 'react';
import { StyleSheet, View, FlatList, StyleProp, ViewStyle } from 'react-native';
import { Button } from 'react-native-elements';

type ButtonProps = {
    item: {
        title: string,
        key: number,
        style: StyleProp<ViewStyle>
    },
    index: number
}

const ProfileStatus = ({status, setStatus}: {status: string, setStatus: (status: string) => void}) => {
    const flatListRef = useRef<FlatList>(null);

    const statusList = [
        {
            title: '😴 Away',
            style: styles.away,
            key: 1
        },
        {
            title: '💼 At Work',
            style: styles.work,
            key: 2
        },
        {
            title: '🎮 Gaming',
            style: styles.gaming,
            key: 3
        },
        {
            title: '👋 Free',
            style: styles.free,
            key: 4
        }
    ];

    const onPress = (title: string, index: number): void => {
        setStatus(title);
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({viewPosition: 0.5, animated: true, index})
        };
    };

    const renderButton: React.FC<ButtonProps> = ({ item, index }) => (
        <View style={status === item.title && styles.buttonContainer}>
            <Button
                buttonStyle={[status === item.title ? styles.checkedButton : styles.button, item.style]}
                title={item.title}
                onPress={() => onPress(item.title, index)}
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
