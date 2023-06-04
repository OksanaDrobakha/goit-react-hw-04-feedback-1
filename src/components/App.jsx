import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = option => {
    if (option === 'good') setGood(prevState => prevState + 1);
    if (option === 'neutral') setNeutral(prevState => prevState + 1);
    if (option === 'bad') setBad(prevState => prevState + 1);
  };

  const total = () => {
    return good + neutral + bad;
  };

  const positiveFeedback = () => {
    return Math.floor((good / (good + neutral + bad)) * 100 || 0);
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={feedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {total() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={positiveFeedback()}
          />
        )}
      </Section>
    </div>
  );
};
