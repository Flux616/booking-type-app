import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';

type Props = { price: string }

const Footer: React.FC<Props> = ({price}) => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.details.footer'});

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
};

const Wrapper = styled.View`
  flexDirection: row;
  height: 65px;
  paddingBottom: 10px
  paddingTop: 10px;
`;

const TextArea = styled.View`
  flex: 1;
  justifyContent: space-between
`;

const Title = styled.Text`
  color: ${props => props.theme.lowerText}
`;

const Price = styled.Text`
  color: ${props => props.theme.text};
  fontSize: 18px;
  fontWeight: bold;
`;

const BookButton = styled.TouchableOpacity`
  alignItems: center;
  backgroundColor: ${props => props.theme.schemeColor};
  borderRadius: 5px
  flex: 1;
  justifyContent: center;
`;

const BookText = styled.Text`
  color: ${props => props.theme.whiteText};
  fontWeight: 800
`;

export default Footer;
