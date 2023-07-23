import React from 'react';
import PropTypes from 'prop-types';
import { TitleFeedback, BoxBtn, Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <TitleFeedback>Please leave feedback</TitleFeedback>
      <BoxBtn>
        {options.map(option => {
          return (
            <Button
              key={option}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          );
        })}
      </BoxBtn>
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
