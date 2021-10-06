import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native';

type Props = {
    value: string;
    label?: string;
    onChangeText: (value: string) => void;
    style?: {}
}

const CustomTextInput: React.FC<Props> = ({value, label, onChangeText, style}) => (
    <View>
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledTextInput
            value={value}
            style={style}
            onChangeText={onChangeText}
        />
    </View>
);

const StyledLabel = styled.Text`
marginBottom: 15px;
fontWeight: bold;
color: ${props => props.theme.lowerText}
`

const StyledTextInput = styled.TextInput`
color: ${props => props.theme.text}
`

export default CustomTextInput
