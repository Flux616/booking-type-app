import React from 'react';
import styled from 'styled-components/native';

const HomeSearchBar = () => (
    <Wrapper>
        <SearchInput
            placeholder={'Search here...'}
            autoCapitalize={'words'}
        />
    </Wrapper>
);

const Wrapper = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  marginHorizontal: 15px
  marginVertical: 20px;
`;

const SearchInput = styled.TextInput`
  backgroundColor: ${props => props.theme.schemeColor};
  borderRadius: 6px;
  height: 50px;
  paddingHorizontal: 15px
  width: 100%;
`;

export default HomeSearchBar;