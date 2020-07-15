import React from 'react';

import Feed from '../Feed'

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Weslei Dias</h1>
        <h2>@weslei.dias</h2>

        <p>
          ReactJs Developer <a href="https://github.com/weslei-d">Github</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Ourinhos, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 1 de agosto de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>54</strong>
          </span>
          <span>
          <strong>57 </strong> seguidores 
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;