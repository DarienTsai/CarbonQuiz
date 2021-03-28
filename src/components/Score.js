/* global data */
import React from 'react';
import ScoreMetric from './ScoreMetric';

export default function Score(props) { 

  console.log(data);

  const aggregateSum = data.score.Fuel.sum + data.score.Home.sum + 
    data.score.Food.sum + data.score.Waste.sum;
  const aggregateTotal = data.score.Fuel.total + data.score.Home.total +
    data.score.Food.total + data.score.Waste.total;

  return (
    <div className='score-main-container'>
      <div className='score-statistics'>
        <div id='main-title' className='gen-score-title'>
          Your Overall Score:
        </div>
        <div className='score-body'>
          <p className='score-space main-score'>
            {aggregateSum}/{aggregateTotal}
          </p>
          <p className='score-space percent-score'>
            [NEED FIREBASE]
          </p>
          <p className='score-space para-score'>
            That's better than [NEED FIREBASE] of other results!
          </p>
        </div>
      </div>
      <div>
        <p className='gen-score-title'>
          Reduction of Carbon Footprint
        </p>
        {
          data.score.Fuel.total != 0 &&
          <ScoreMetric 
            category='Fuel'
            score={data.score.Fuel.sum}
            maxPoints={data.score.Fuel.total}
          />
        }
        {
          data.score.Home.total != 0 &&
          <ScoreMetric 
            category='Home'
            score={data.score.Home.sum}
            maxPoints={data.score.Home.total}
          />
        }
        {
          data.score.Food.total != 0 &&
          <ScoreMetric 
            category='Food'
            score={data.score.Food.sum}
            maxPoints={data.score.Food.total}
          />
        }
        {
          data.score.Waste.total != 0 &&
          <ScoreMetric 
            category='Waste'
            score={data.score.Waste.sum}
            maxPoints={data.score.Waste.total}
          />
        }
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