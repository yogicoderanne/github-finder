// functional component, arrow function

import React, { Fragment } from 'react';
import spinnner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={Spinner}
      alt='Loading...'
      style={{ width: '200px', margin: 'auto', displat: 'block' }}
    />
  </Fragment>
);

export default Spinner;
