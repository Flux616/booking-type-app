import React from 'react';
import { StyleProp, TextStyle, View } from 'react-native';
import styled from 'styled-components/native';

type Props = {
    value: string;
    label?: string;
    onChangeText: (value: string) => void;
    style?: StyleProp<TextStyle>
}

const CustomTextInput: React.FC<Props> = ({value, label, onChangeText, style={}}) => (
    <View>
        {label && <Label>{label}</Label>}
        <Input
            value={value}
            style={style}
            onChangeText={onChangeText}
        />
    </View>
);

const Label = styled.Text`
  color: ${props => props.theme.lowerText};
  fontWeight: bold;
  marginBottom: 15px;
`;

const Input = styled.TextInput`
  color: ${props => props.theme.text};
`;

export default CustomTextInput;
