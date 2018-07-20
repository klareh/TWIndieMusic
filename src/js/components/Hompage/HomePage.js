import React from 'react';
import '@material-ui/core/Paper';
import { Element as SElement, } from 'react-scroll';
import Search from '../../containers/SearchContainer';
import ResultBox from '../../containers/ResultBoxContainer';
import Intro from './Intro';

export default props => {
  return (
    <div>
      <Intro />
      <SElement name="Search" >
        <Search />
      </SElement>
      <SElement name="ResultBox" >
        <ResultBox />
      </SElement>
    </div>
  );
};