import React, { useRef } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { getProfileStatusList } from '../../../../__mocks__/profileStatusList';

type ButtonProps = {
    item: {
        title: string,
        key: string,
        color: string
    },
    index: number
}

type StyledButtonProps = { checked: boolean, color: string }

const ProfileStatus = ({ status, setStatus }: { status: string, setStatus: (status: string) => void }) => {
    const flatListRef = useRef<FlatList>(null);
    const statusList = getProfileStatusList();

    const onPress = (key: string, index: number): void => {
        setStatus(key);
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ viewPosition: 0.5, animated: true, index });
        }
    };

    const renderButton: React.FC<ButtonProps> = ({ item, index }) => (
        <ButtonContainer onPress={() => onPress(item.key, index)}>
            <ButtonBody
                color={item.color}
                checked={status === item.key}
                key={item.key}
            >
                <ButtonText>{item.title}</ButtonText>
            </ButtonBody>
        </ButtonContainer>
    );

    return (
        <ButtonRow<React.ElementType>
            data={statusList}
            renderItem={renderButton}
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
        />
    );
};

const ButtonContainer = styled.TouchableOpacity`
  shadowColor: ${props => props.theme.blackShadow};
  shadowOpacity: 0.3;
  shadowRadius: 15px;
`;

const ButtonRow = styled.FlatList`
  flexGrow: 0;
  marginTop: 15px;
  overflow: visible;
`;

const ButtonBody = styled.View<StyledButtonProps>`
  backgroundColor: ${props => props.color || '#fff'};
  borderRadius: 30px;
  marginRight: 10px;
  opacity: ${props => props.checked && '1' || '0.25'};
  padding: 11px;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.whiteText};
  fontSize: 18px;
`;

export default ProfileStatus;
