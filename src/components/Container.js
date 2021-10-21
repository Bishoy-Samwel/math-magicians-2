import React, { useState } from 'react';

import Calculator from './Calculator';
import calculate from '../Logic/Calculate';

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
    <Calculator
      result={result}
      handleClick={handleClick}
    />
  );
};

export default Container;
