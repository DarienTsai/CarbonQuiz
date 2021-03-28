/* global data */
import React, { useState, useEffect } from 'react';
import ScoreMetric from './ScoreMetric';
import firebaseApp from '../firebase';

export default function Score(props) { 
  const [avgCall, setCall] = useState(0);

  useEffect(async () => {
    await printAvg();
    const fuelPayload = data.score.Fuel.total === 0 ? 
      0.5 : data.score.Fuel.sum / data.score.Fuel.total;
    const homePayload = data.score.Home.total === 0 ? 
      0.5 : data.score.Home.sum / data.score.Home.total;
    const foodPayload = data.score.Food.total === 0 ? 
      0.5 : data.score.Food.sum / data.score.Food.total;
    const wastePayload = data.score.Waste.total === 0 ? 
      0.5 : data.score.Waste.sum / data.score.Waste.total;
    const payload = {
      fuel: fuelPayload,
      home: homePayload,
      food: foodPayload,
      waste: wastePayload,
    };
    firebaseApp.pushScore(payload)
  }, []);

  const printAvg = async () => {
    const call = await firebaseApp.getAvg();
    setCall(call);
  }

  const aggregateSum = data.score.Fuel.sum + data.score.Home.sum + 
    data.score.Food.sum + data.score.Waste.sum;
  const aggregateTotal = data.score.Fuel.total + data.score.Home.total +
    data.score.Food.total + data.score.Waste.total;
  const percentage = (100 - (100 * (aggregateSum/aggregateTotal))).toFixed(2);
  const betterVal = Math.round(percentage - (avgCall.total * 100));

  return (
    <div className='score-main-container'>
      <div className='score-statistics'>
        <div id='main-title' className='gen-score-title'>
          Your Overall Score:
        </div>
        <div className='score-body'>
          <p className='score-space main-score'>
            {aggregateTotal - aggregateSum}/{aggregateTotal}
          </p>
          <p className='score-space percent-score'>
            {percentage}%
          </p>
          {
          betterVal > 0 &&
          <p className='score-space para-score'>
            You scored better than {Math.round(betterVal)}% of other results!
          </p>
        }
        {
          betterVal < 0 &&
          <p className='score-space para-score'>
            You scored lower than {Math.round(Math.abs(betterVal))}% of other results
          </p>
        }
        {
          betterVal === 0 &&
          <p className='score-space para-score'>
            You scored average
          </p>
        }
        </div>
      </div>
      <div>
        <p className='gen-score-title'>
          Reduction of Carbon Footprint
        </p>
        {
          data.score.Fuel.total !== 0 &&
          <ScoreMetric 
            category='Fuel'
            score={data.score.Fuel.sum}
            maxPoints={data.score.Fuel.total}
            average={avgCall.fuel}
            percent={data.score.Fuel.sum / data.score.Fuel.total}
          />
        }
        {
          data.score.Home.total !== 0 &&
          <ScoreMetric 
            category='Home'
            score={data.score.Home.sum}
            maxPoints={data.score.Home.total}
            average={avgCall.home}
            percent={data.score.Home.sum / data.score.Home.total}
          />
        }
        {
          data.score.Food.total !== 0 &&
          <ScoreMetric 
            category='Food'
            score={data.score.Food.sum}
            maxPoints={data.score.Food.total}
            average={avgCall.food}
            percent={data.score.Food.sum / data.score.Food.total}
          />
        }
        {
          data.score.Waste.total !== 0 &&
          <ScoreMetric 
            category='Waste'
            score={data.score.Waste.sum}
            maxPoints={data.score.Waste.total}
            average={avgCall.waste}
            percent={data.score.Waste.sum / data.score.Waste.total}
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
        {data.score.tips.map(x => {return <p className='tip-text'>{'- ' + x}</p>})}
      </div>
    </div>
  )
}