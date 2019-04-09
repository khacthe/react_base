import React,  { useState, useEffect } from 'react';
import {connect} from 'react-redux';

import HomePage from '../../components/Home';
import { selectDatas } from '../../selectors';
import {
  loadData,
  loadDataSuccess,
} from '../../actions/homeAction';


const Home = () => {
  const [titleText, setTitleText] = useState('This is home page');

  const _changetitleText = () => (
    setTitleText('Change title success')
  )
  
  return(
    <React.Fragment>
      <HomePage
        title={titleText}
        changeTitleText={_changetitleText}
      />
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
