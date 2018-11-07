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
      <ul style={{fontSize: 10}}>
      <li>資料來源：文化部 2018年 獨立音樂開放資料 </li>
      <li>此開放資料依政府資料開放授權條款 (Open Government Data License) 進行公眾釋出，使用者於遵守本條款各項規定之前提下，得利用之。</li>
      <li>政府資料開放授權條款：https://data.gov.tw/license</li>
      </ul>
    </div>
  );
};