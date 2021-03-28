import React from 'react';

export default function ScoreMetric(props) {
  const {
    category = 'Transport',
    score = 12,
    maxPoints = 15,
  } = props;

  const percent = score / maxPoints;
  const progress = percent * 100;

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
        <div>
          - Better than [NEED FIREBASE] of other results
        </div>
      </div>
      <p className='x-spacing main-metric-text'>
        {score}/{maxPoints}
      </p>
      <p className='x-spacing main-metric-text'>
        {Math.round(progress)}%
      </p>
    </div>
  )
}