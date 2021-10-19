import React from 'react';
import { ScrollView } from 'react-native';
import Info from './components/Info';
import Description from './components/Description';
import Preview from './components/Preview';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { DetailsScreenRouteProp } from '../../config/navigation/types';
import styled from 'styled-components/native';

type Props = { route: DetailsScreenRouteProp }

const Details: React.FC<Props> = ({ route }) => {
    const {rating, city, country, image, price, cityKey, description} = route.params;

    return (
        <Wrapper>
            <SafeArea>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Preview image={image} cityKey={cityKey}/>
                    <Info rating={rating} city={city} country={country}/>
                    <Description description={description} cityKey={cityKey}/>
                    <Gallery/>
                </ScrollView>
                <Footer price={price}/>
            </SafeArea>
        </Wrapper>
    );
};

const SafeArea = styled.SafeAreaView`
  flex: 1;
  justifyContent: space-between;
  marginHorizontal: 20px
`;

const Wrapper = styled.View`
  backgroundColor: ${props => props.theme.background};
  flex: 1
`;

export default Details;