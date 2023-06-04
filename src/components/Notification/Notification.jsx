import React from 'react';
import Proptypes from 'prop-types';
import css from '../Notification/Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={css.message}>{message}</p>;
};

Notification.propTypes = {
  message: Proptypes.string.isRequired,
};
