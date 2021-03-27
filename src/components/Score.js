import React from 'react';
import ScoreMetric from './ScoreMetric';

export default function Score() { 
  return (
    <div className='score-main-container'>
      <div className='score-statistics'>
        <div id='main-title' className='gen-score-title'>
          Your Overall Score:
        </div>
        <div className='score-body'>
          <p className='score-space main-score'>
            69/96
          </p>
          <p className='score-space percent-score'>
            (71.88%)
          </p>
          <p className='score-space para-score'>
            That's better than 42.0% of other results!
          </p>
        </div>
      </div>
      <div>
        <p className='gen-score-title'>
          Reduction of Carbon Footprint
        </p>
        <ScoreMetric 
          category='Fuel'
          score={5}
          maxPoints={10}
        />
        <ScoreMetric 
          category='Home'
          score={12}
          maxPoints={15}
        />
        <ScoreMetric 
          category='Food'
          score={19}
          maxPoints={20}
        />
        <ScoreMetric 
          category='Waste'
          score={3}
          maxPoints={5}
        />
      </div>
      <p className='disclosure-text'>
        *Your score may differ based on the events in your day
      </p>
      <div className='tips-container'>
        <p className='gen-score-title'>
          Sustainability Tips:
        </p>
        <p className='tip-text'>
          - Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Ratione accusamus eligendi error culpa quas vitae, quaerat 
          deserunt, nulla, aperiam sint libero! Voluptate consequuntur 
          aliquam quasi?
        </p>
      </div>
    </div>
  )
}