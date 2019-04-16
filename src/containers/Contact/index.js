import React from 'react';
import {connect} from 'react-redux';

import ContactPage from '../../components/Contact';
import { selectContact } from '../../selectors';
import {
  loadContact,
  loadContactSuccess,
} from '../../actions/contactAction';


const Contact = () => {
  return(
    <React.Fragment>
      <ContactPage title="This is contact page" />
    </React.Fragment>
  );
}


export default connect(
  selectContact,
  {
    loadContactAction: loadContact,
    loadContactSuccessAction: loadContactSuccess,
  }
)(Contact);
