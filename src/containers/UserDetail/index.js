import React,  { useState, useEffect } from 'react';
import {connect} from 'react-redux';

import UserDetailItem from '../../components/UserDetail';
import { selectUserDetail } from '../../selectors';
import {
  getUserDetail,
  getUserDetailSuccess,
} from '../../actions/userAction';


const UserDetail = (props) => {

  useEffect(() => {
    const { match, getUserDetailAction } = props;
    getUserDetailAction(match.params.name);
  }, [])

  console.log(props.user)

  return(
    <React.Fragment>
      {props.user && 
        <UserDetailItem
          user={props.user}
        />
      }
      
    </React.Fragment>
  );
}


export default connect(
  selectUserDetail,
  {
    getUserDetailAction: getUserDetail,
    getUserDetailSuccessAction: getUserDetailSuccess,
  }
)(UserDetail);
