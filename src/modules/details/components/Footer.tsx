import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';

type Props = {
    price: number
}

const Footer: React.FC<Props> = ({price}) => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.details.footer'})

    return (
        <StyledView>
            <StyledTextContainer>
                <StyledTitle>{t('title')}</StyledTitle>
                <StyledPrice>{price}{t('price')}</StyledPrice>
            </StyledTextContainer>
            <StyledButton>
                <StyledButtonText>{t('booking')}</StyledButtonText>
            </StyledButton>
        </StyledView>
    );
}

const StyledView = styled.View`
flexDirection: row;
height: 65px;
paddingTop: 10px;
paddingBottom: 10px
`

const StyledTextContainer = styled.View`
flex: 1;
justifyContent: space-between
`

const StyledTitle = styled.Text`
color: ${props => props.theme.lowerText}
`

const StyledPrice = styled.Text`
fontWeight: bold;
fontSize: 18px;
color: ${props => props.theme.text}
`

const StyledButton = styled.TouchableOpacity`
flex: 1;
backgroundColor: ${props => props.theme.schemeColor};
justifyContent: center;
alignItems: center;
borderRadius: 5px
`

const StyledButtonText = styled.Text`
color: ${props => props.theme.text};
fontWeight: 800
`

export default Footer;
