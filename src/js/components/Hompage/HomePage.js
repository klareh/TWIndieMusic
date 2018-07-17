import React from 'react';
import '@material-ui/core/Paper';
import Search from './Search';
import ResultBox from './ResultBox/ResultBox';
import Intro from './Intro';

export default props => {
  return (
    <div>
      <Intro />
      <Search />
      <ResultBox />
    </div>
  );
};