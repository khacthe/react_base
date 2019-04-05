import React from 'react';
import {connect} from 'react-redux';

import HomePage from '../../components/Home';
import { selectDatas } from '../../selectors';
import {
  loadData,
  loadDataSuccess,
} from '../../actions/homeAction';


const Home = () => {
  return(
    <React.Fragment>
      <HomePage title="This is home page" />
    </React.Fragment>
  );
}


export default connect(
  selectDatas,
  {
    loadDataAction: loadData,
    loadDataSuccessAction: loadDataSuccess,
  }
)(Home);
