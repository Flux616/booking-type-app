import React from 'react';
import styled from 'styled-components/native';

const HomeSearchBar = () => (
    <StyledView>
        <StyledTextInput
            placeholder={'Search here...'}
            autoCapitalize={'words'}
        />
    </StyledView>
);

const StyledView = styled.View`
justifyContent: space-between;
flexDirection: row;
marginVertical: 20px;
marginHorizontal: 15px
`

const StyledTextInput = styled.TextInput`
width: 100%;
backgroundColor: ${props => props.theme.schemeColor};
borderRadius: 6px;
height: 50px;
paddingHorizontal: 15px
`

export default HomeSearchBar;