import React from 'react';

const Home = ({ title, changeTitleText }: Props) => (
  <React.Fragment>
    <h2>{title}</h2>
    <p onClick={changeTitleText}> change title text page</p>
  </React.Fragment>
);

export default Home;
