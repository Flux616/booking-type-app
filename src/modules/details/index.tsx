import React from 'react';
import { ScrollView } from 'react-native';
import Info from './components/Info';
import Description from './components/Description';
import Preview from './components/Preview';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { DetailsScreenRouteProp } from '../../config/navigation/types';
import styled from 'styled-components/native';

type Props = {
    route: DetailsScreenRouteProp
}

const Details: React.FC<Props> = ({ route }) => {
    const {rating, city, country, image, price} = route.params;

    return (
        <StyledWrapper>
            <StyledSafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Preview image={image}/>
                    <Info rating={rating} city={city} country={country}/>
                    <Description/>
                    <Gallery/>
                </ScrollView>
                <Footer price={price}/>
            </StyledSafeAreaView>
        </StyledWrapper>
    );
};

const StyledSafeAreaView = styled.SafeAreaView`
flex: 1;
justifyContent: space-between;
marginHorizontal: 20px
`

const StyledWrapper = styled.View`
backgroundColor: ${props => props.theme.background};
flex: 1
`

export default Details;