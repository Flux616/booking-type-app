import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';

type Props = { price: number }

const Footer: React.FC<Props> = ({price}) => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.details.footer'})

    return (
        <Wrapper>
            <TextArea>
                <Title>{t('title')}</Title>
                <Price>{price}{t('price')}</Price>
            </TextArea>
            <BookButton>
                <BookText>{t('booking')}</BookText>
            </BookButton>
        </Wrapper>
    );
}

const Wrapper = styled.View`
flexDirection: row;
height: 65px;
paddingTop: 10px;
paddingBottom: 10px
`

const TextArea = styled.View`
flex: 1;
justifyContent: space-between
`

const Title = styled.Text`
color: ${props => props.theme.lowerText}
`

const Price = styled.Text`
fontWeight: bold;
fontSize: 18px;
color: ${props => props.theme.text}
`

const BookButton = styled.TouchableOpacity`
flex: 1;
backgroundColor: ${props => props.theme.schemeColor};
justifyContent: center;
alignItems: center;
borderRadius: 5px
`

const BookText = styled.Text`
color: ${props => props.theme.text};
fontWeight: 800
`

export default Footer;
