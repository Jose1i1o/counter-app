import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FirstComponent = ({ greetings, subtitle }) => {
  return (
    <>
      <h1> { greetings } </h1>
      <p> { subtitle } </p>
    </>
  )
}

  FirstComponent.propTypes = {
    greetings: PropTypes.string.isRequired
  }

  FirstComponent.defaultProps = {
    subtitle: 'I am a subtitle'
  }

export default FirstComponent;