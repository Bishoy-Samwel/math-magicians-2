import React from 'react';

const Result = props => {
  const result = { props };
  return (
    <p className="col-4" id="result">
      {result}
    </p>
  );
};

export default Result;
