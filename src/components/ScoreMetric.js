import React from 'react';

export default function ScoreMetric(props) {
  const {
    category = 'Transport',
    score = 12,
    maxPoints = 15,
    average = 1,
    percent = 1,
  } = props;

  const progress = 100 - (percent * 100);
  const betterVal = Math.round(progress - (average * 100));

  return (
    <div className='metric-container'>
      <div className='x-spacing main-div'>
        <div className='bottom-spacing main-metric-text'>
          {category}
        </div>
        <div 
          className='bottom-spacing metric-bar' 
          style={{
            width: `${progress}%`
          }}
        />
        {
          betterVal > 0 &&
          <div>
            - You scored better than {Math.round(betterVal)}% of other results
          </div>
        }
        {
          betterVal < 0 &&
          <div>
            - You scored lower than {Math.round(Math.abs(betterVal))}% of other results
          </div>
        }
        {
          betterVal === 0 &&
          <div>
            - You scored average
          </div>
        }
      </div>
      <p className='x-spacing main-metric-text'>
        {maxPoints - score}/{maxPoints}
      </p>
      <p className='x-spacing main-metric-text'>
        {Math.round(progress)}%
      </p>
    </div>
  )
}