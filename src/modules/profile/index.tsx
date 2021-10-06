import React from 'react';
import Info from './components/Info';
import Status from './components/Status';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import profile from '../../config/stores/profile';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';

const Profile = () => {
    const {name, description, image, status} = profile.user

    return (
        <StyledWrapper>
            <StyledView>
                <Info name={name} description={description} image={image}/>
                <Status status={status} setStatus={(status) => profile.setStatus(status)}/>
                <Dashboard/>
                <Footer/>
            </StyledView>
        </StyledWrapper>
    )
};

const StyledWrapper = styled.View`
flex: 1;
backgroundColor: ${props => props.theme.background}
`

const StyledView = styled.View`
marginHorizontal: 30px;
justifyContent: space-around;
flex: 1
`

export default observer(Profile);
