import React from 'react';
import styled from 'styled-components';

const UserItem = styled.div`
  width: 10%;
  text-align: center;
  margin-bottom: 30px;
`;

const Thumbnail = styled.img `
  display: block;
  max-width: 100px;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 10px;
`;

const InfoUser = styled.a`
  display: block;
  text-align: center;
  margin: 10px 0;
`;

const UserName = styled.a`
  font-size: 14px;
  text-align: center;
  font-width: bold;
  display: block;
`;

const User = (props) => (
  <UserItem>
    <Thumbnail src={`${props.user.avatar_url}`} />
    <UserName href={`users/${props.user.login}`}>{props.user.login}</UserName>
    <InfoUser href={`${props.user.repos_url}`}>Reposive</InfoUser>
  </UserItem>
)

export default User;