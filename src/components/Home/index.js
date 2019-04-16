import React from 'react';

import User from './user';

const Home = ({ users }: Props) => (
  <table>
    <tbody>
      <tr>
        <th> Name </th>
        <th> Avatar Url </th>
        <th> Github Url </th>
      </tr>
      { users && 
        users.map(user => (
          <User
            key={user.id}
            user={user}
          />
        ))
      }
    </tbody>
  </table>
);

export default Home;
