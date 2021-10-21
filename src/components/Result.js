/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function Result(props) {
  return (
    <p className="col-4" id="result">
      {props.result}
    </p>
  );
}
