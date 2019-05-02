import React,  { useState, useEffect } from 'react';
import {connect} from 'react-redux';

import HomePage from '../../components/Home';
import { selectHome } from '../../selectors';
import {
  getUsers,
  getUsersSuccess,
} from '../../actions/userAction';


const Home = (props) => {
  const [titleText, setTitleText] = useState('This is home page');

  useEffect(() => {
    const { getUsersAction } = props;
    getUsersAction();
  }, [])

  return(
    <React.Fragment>
      <HomePage
        users={props.users}
      />
    </React.Fragment>
  );
}


export default connect(
  selectHome,
  {
    getUsersAction: getUsers,
    getUsersSuccessAction: getUsersSuccess,
  }
)(Home);
