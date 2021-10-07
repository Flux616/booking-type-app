import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, { useTheme } from 'styled-components/native';

type Props = { color: string, name: string, label: string }

type StyledIconProps = { color: string }

const DashboardButton: React.FC<Props> = ({color, name, label}) => {
    const theme = useTheme();

    return (
        <TouchableOpacity>
            <Wrapper>
                <DashboardIcon color={color}>
                    <MaterialCommunityIcon name={name} size={28} color={theme.background}/>
                </DashboardIcon>
                <IconText>{label}</IconText>
                <ArrowIcon name='keyboard-arrow-right' size={22} color={theme.featIcon}/>
            </Wrapper>
        </TouchableOpacity>
    );
};

const Wrapper = styled.View`
  alignItems: center;
  flexDirection: row;
  marginTop: 20px;
`;

const DashboardIcon = styled.View<StyledIconProps>`
  alignItems: center;
  backgroundColor:  ${(props) => props.color || '#000'};
  borderRadius: 50px;
  height: 60px;
  justifyContent: center;
  width: 60px;
`;

const IconText = styled.Text`
  color: ${props => props.theme.text};
  fontWeight: bold;
  marginLeft: 20px;
`;

const ArrowIcon = styled(MaterialIcon)`
  position: absolute;
  right: 0px;
`;

export default DashboardButton;