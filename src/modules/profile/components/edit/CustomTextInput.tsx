import React from 'react'
import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View } from 'react-native'

type Props = {
    value: string;
    label?: string;
    onChangeText: (value: string) => void;
    style: StyleProp<TextStyle>
}


const CustomTextInput: React.FC<Props> = ({value, label, onChangeText, style}) => (
    <View>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
            value={value}
            style={style}
            onChangeText={onChangeText}
        />
    </View>
);

export default CustomTextInput

const styles = StyleSheet.create({
    label: {
        marginBottom: 15,
        fontWeight: 'bold',
        color: '#808080'
    }
})
