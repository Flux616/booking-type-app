import React from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, { useTheme } from 'styled-components/native';

type Props = {
    color: string,
    name: string,
    label: string
}

type StyledIconProps = {
    color: string
}

const DashboardButton: React.FC<Props> = ({color, name, label}) => {
    const theme = useTheme();

    return (
        <TouchableOpacity>
            <StyledView>
                <StyledIcon color={color}>
                    <MaterialCommunityIcon name={name} size={28} color={theme.background}/>
                </StyledIcon>
                <StyledIconText>{label}</StyledIconText>
                <StyledArrowIcon name='keyboard-arrow-right' size={22} color={theme.featIcon}/>
            </StyledView>
        </TouchableOpacity>
);
}

const StyledView = styled.View`
flexDirection: row;
marginTop: 20px;
alignItems: center
`

const StyledIcon = styled.View<StyledIconProps>`
width: 60px;
height: 60px;
borderRadius: 50px;
justifyContent: center;
alignItems: center;
backgroundColor: ${(props) => props.color || '#000'}
`

const StyledIconText = styled.Text`
marginLeft: 20px;
fontWeight: bold;
color: ${props => props.theme.text}
`

const StyledArrowIcon = styled(MaterialIcon)`
position: absolute;
right: 0px
`

export default DashboardButton