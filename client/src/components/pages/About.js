import React, { Fragment } from 'react';

export const About = () => {
  return (
    <Fragment>
      <h1>About this</h1>
      <p className='my-1'>This is a full stack react app...</p>
      <div className='my-1'>Its a CRUD application</div>

      <p className='bg-dark p'>
        <strong>version</strong>
        1.0.0
      </p>
    </Fragment>
  );
};
