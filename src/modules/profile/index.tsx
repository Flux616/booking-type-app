import React from 'react';
import Info from './components/Info';
import Status from './components/Status';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import profile from '../../config/stores/profile';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';

const Profile = () => {
    const {name, description, image, status} = profile.user;

    return (
        <Wrapper>
            <ProfileContainer>
                <Info name={name} description={description} image={image}/>
                <Status status={status} setStatus={(status) => profile.setStatus(status)}/>
                <Dashboard/>
                <Footer/>
            </ProfileContainer>
        </Wrapper>
    );
};

const Wrapper = styled.View`
  backgroundColor: ${props => props.theme.background};
  flex: 1;
`;

const ProfileContainer = styled.View`
  flex: 1
  justifyContent: space-around;
  marginHorizontal: 30px;
`;

export default observer(Profile);
