import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'yogicoderanne',
        avatar_url: 'https://avatars3.githubusercontent.com/u/59855723?v=4',
        html_url: 'https://github.com/yogicoderanne',
      },
      {
        id: '2',
        login: 'yogicoderanne',
        avatar_url: 'https://avatars3.githubusercontent.com/u/59855723?v=4',
        html_url: 'https://github.com/yogicoderanne',
      },
      {
        id: '3',
        login: 'yogicoderanne',
        avatar_url: 'https://avatars3.githubusercontent.com/u/59855723?v=4',
        html_url: 'https://github.com/yogicoderanne',
      },
    ],
  };
  // looping through and creating a list. Maps = high array function, calls back info. Be sure to use a key prop for each child ~
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
