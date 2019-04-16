import React from 'react';
import styled from 'styled-components';

const UserDetailWrap = styled.div`
  display: flex;
  padding: 30px;
`;

const UserInfo = styled.div`
  flex-grow: 4;
`;

const UserContent = styled.div`
  flex-grow: 8;
`;

const Thumbnail = styled.img `
  display: block;
  max-width: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const InfoItem = styled.p`

`;

const ReposList = styled.ul``;

const ReposItem = styled.li``;

const ReposName = styled.a``;

const UserDetail = (props) => (
  <UserDetailWrap>
    <UserInfo>
      <Thumbnail src={`${props.user.avatar_url}`} />
      <InfoItem>{`name: ${props.user.name}`}</InfoItem>
      <InfoItem>{`followers: ${props.user.followers}`}</InfoItem>
      <InfoItem>{`following: ${props.user.following}`}</InfoItem>
    </UserInfo>
    <UserContent>
      {props.user.repos && (
        props.user.repos.map(repos => (
          <ReposItem><ReposName href={`${repos.html_url}`}>{repos.full_name} </ReposName></ReposItem>
        ))
      )}
      <InfoItem></InfoItem>
    </UserContent>
  </UserDetailWrap>
);

export default UserDetail;
