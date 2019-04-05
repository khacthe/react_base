import React from 'react';
import {connect} from 'react-redux';

import AboutPage from '../../components/About';
import { selectAbout } from '../../selectors';
import {
  loadAbout,
  loadAboutSuccess,
} from '../../actions/aboutAction';


const About = () => {
  return(
    <React.Fragment>
      <AboutPage title="This is About page" />
    </React.Fragment>
  );
}


export default connect(
  selectAbout,
  {
    loadAboutAction: loadAbout,
    loadAboutSuccessAction: loadAboutSuccess,
  }
)(About);
