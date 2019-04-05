import React from 'react';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { RouteLayout } from '../components/Layouts';
import store from'../store';
import MainLayout from '../components/Layouts/MainLayout';

import HomeComponent from '../containers/Home';
import ContactComponent from '../containers/Contact';
import AboutComponent from '../containers/About';


const RouteRoot = () => (
  <Provider store={store}>
    <Router>
      <Helmet
        defer={false}
        htmlAttributes={{ lang: 'pt-en' }}
        encodeSpecialCharacters={true}
        defaultTitle="React Base Demo"
        titleTemplate="React Js App"
        titleAttributes={{ itemprop: 'name', lang: 'en-jp' }}
      />
      <Switch>
      	<RouteLayout
          exact
          path='/'
          layout={MainLayout}
          component={HomeComponent}
      	/>
        <RouteLayout
          path='/contact'
          layout={MainLayout}
          component={ContactComponent}
        />
        <RouteLayout
          path='/about'
          layout={MainLayout}
          component={AboutComponent}
        />
      </Switch>
    </Router>
  </Provider>
)

export default RouteRoot;
