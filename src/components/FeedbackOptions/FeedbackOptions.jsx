import React from 'react';
import Proptypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  const arrOfOptions = Object.keys(options);

  return (
    <div>
      {arrOfOptions.map(option => (
        <button
          type="button"
          key={option}
          className={`${css.button} ${css[option]}`}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  option: Proptypes.shape({
    good: Proptypes.number.isRequired,
    neutral: Proptypes.number.isRequired,
    bad: Proptypes.number.isRequired,
  }),
  onLeaveFeedback: Proptypes.func.isRequired,
};
