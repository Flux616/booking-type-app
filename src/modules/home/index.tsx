import React from 'react';
import styled from 'styled-components/native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Suggestions from './components/Suggestions';

const Home = () => (
    <StyledSafeAreaView>
        <StyledView>
            <Header/>
            <SearchBar/>
            <Suggestions/>
        </StyledView>
    </StyledSafeAreaView>
);

const StyledSafeAreaView = styled.SafeAreaView`
flex: 1;
backgroundColor: ${props => props.theme.background}
`

const StyledView = styled.View`
marginHorizontal: 20px;
marginTop: 15px;
`

export default Home;