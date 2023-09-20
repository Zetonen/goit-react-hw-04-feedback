import React, { useEffect, useState } from 'react';
import { Section } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = state => {
    switch (state) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedback = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  const options = ['good', 'neutral', 'bad'];
  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedback();

  return (
    <Section>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      {totalFeedback !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};
