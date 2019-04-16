import React from 'react';

const User = (props) => (
  <React.Fragment>
    <tr>
      <th ><img src={`${props.user.avatar_url}`} /></th>
      <th>{props.user.login}</th>
      <th>{props.user.avatar_url}</th>
      <th>{props.user.url}</th>
    </tr>
  </React.Fragment>
)

export default User;