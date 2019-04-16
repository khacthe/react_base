import React from 'react';
import styled from 'styled-components';

import User from './user';

const UserList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
`;

const Home = ({ users }: Props) => (
  <UserList>
    { users &&
      users.map(user => (
          <User
            key={user.id}
            user={user}
          />
        ))
    }
  </UserList>
);

export default Home;
