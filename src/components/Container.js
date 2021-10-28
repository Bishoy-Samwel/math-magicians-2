import React, { useState } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Calculator from './Calculator';
import calculate from '../Logic/Calculate';
import Navbar from './Navbar';
import Quote from './Quote';
import Home from './Home';

const Container = () => {
  const [dataObj, setDataObj] = useState({
    total: null, next: null, operation: null,
  });

  const handleClick = event => {
    const keyPress = event.target.getAttribute('btn_name');
    setDataObj({ ...dataObj, ...calculate(dataObj, keyPress) });
  };

  const { total, next, operation } = dataObj;
  const result = next || operation || total || '0';
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
        <Route path="/calc">
          <Calculator
            result={result}
            handleClick={handleClick}
          />
        </Route>
      </Switch>
    </>
  );
};

export default Container;
