import React, {useRef} from 'react';
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

type StyledButtonProps = {
    checked: boolean,
    color: string
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
        <StyledContainer onPress={() => onPress(item.key, index)}>
            <StyledButtonBody
                color={item.color}
                checked={status === item.key}
                key={item.key}
            >
                <StyledButtonText>{item.title}</StyledButtonText>
            </StyledButtonBody>
        </StyledContainer>
    );

    return (
        <StyledButtonRow<React.ElementType>
            data={statusList}
            renderItem={renderButton}
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
        />
    );
};

const StyledContainer = styled.TouchableOpacity`
shadowColor: ${props => props.theme.blackShadow};
shadowOpacity: 0.3;
shadowRadius: 15px;
`

const StyledButtonRow = styled.FlatList`
flexGrow: 0;
marginTop: 15px;
overflow: visible
`

const StyledButtonBody = styled.View<StyledButtonProps>`
marginRight: 10px;
borderRadius: 30px;
padding: 11px;
opacity: ${props => props.checked && '1' || '0.25'};
backgroundColor: ${props => props.color || '#fff'}
`

const StyledButtonText = styled.Text`
color: ${props => props.theme.whiteText};
fontSize: 18px
`

export default ProfileStatus;
