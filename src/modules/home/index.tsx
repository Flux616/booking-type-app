import React from 'react';
import styled from 'styled-components/native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Suggestions from './components/Suggestions';

const Home = () => (
    <SafeArea>
        <Wrapper>
            <Header/>
            <SearchBar/>
            <Suggestions/>
        </Wrapper>
    </SafeArea>
);

const SafeArea = styled.SafeAreaView`
  backgroundColor: ${props => props.theme.background};
  flex: 1;
`;

const Wrapper = styled.View`
  marginHorizontal: 20px;
  marginTop: 15px;
`;

export default Home;