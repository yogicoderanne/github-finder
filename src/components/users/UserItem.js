// generate class-based component in React using "rce"; similar to creating other types of "boiler plates" in HTML files and so forth.
import React from 'react';
import PropTypes from 'prop-types';

// Don't need a constructor to define your state, instead you can take state and what its equal to and you would get the same result as if you did use a constructor
// ----------------------------------------------------------------

// using state

/*  
 
 class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: 'id',
      login: 'yogicoderanne',
      avatar_url: 'https://avatars3.githubusercontent.com/u/59855723?v=4',
      html_url: 'https://github.com/yogicoderanne',
    };
  } 
  
  */

// using props - below --

// class UserItem extends Component {
// const UserItem = props => {
// render() {
// const { login, avatar_url, html_url } = props.user;
/* render() {
    const { login, avatar_url, html_url } = this.state; */

/* SHIFT, ALT, A = block comments --- Now using stateless functional components and destructuring my previous code --- 
  
  
  */

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>

      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
