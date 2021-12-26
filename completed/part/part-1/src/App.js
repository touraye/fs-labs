import React, { useState } from 'react';

const Statistics = ( props ) => {
  // conditional rendering
  if ( props.allClicks.length === 0 ) {
    return (
      <div>
        No feedback given
      </div>
    )
  } 
  return (
    <div>
      <Statistic text='good' value={ props.goodVal } />
      <Statistic text='neutral' value={ props.neutralVal } />
      <Statistic text='bad' value={ props.badVal } />
      <Statistic text='all' value={ props.allVal } />
      <Statistic text='avg' value={ props.avgVal } />
      <Statistic text='positive' value={ props.positiveVal } />
    </div>
  )
}

const Statistic = ( props ) => {
  return (
    <div>    
      <p>{ props.text } { props.value } </p>
    </div>
        
  )
}


const Button = ( { handleClick, text } ) => (
  <button onClick={ handleClick }>
    {text}
  </button>
)

const App = () => {
  const [ good, setGood ] = useState( 0 );
  const [ neutral, setNeutral ] = useState( 0 );
  const [ bad, setBad ] = useState( 0 );
  const [ allClicks, setAll ] = useState( [] );
 

  const handleGood = () => {
    setAll( allClicks.concat('good'));
    setGood( good + 1 );
  }

  const handleNeutral = () => {
    setAll( allClicks.concat('neutral'));
    setNeutral( neutral + 1 );
  }

  const handleBad = () => {
    setAll( allClicks.concat('bad'));
    setBad( bad + 1 );
  }

  const all = good + neutral + bad;
  const avg = all / 3;
  const positive = (good + neutral) / all * 100;
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={ handleGood } text='good' />
      <Button handleClick={ handleNeutral } text='neutral' />
      <Button handleClick={ handleBad } text='bad' />
      <h1>Statistic</h1>
      
      <Statistics
          goodVal={ good }
         neutralVal={ neutral }
        badVal={ bad }
         allVal={ all }
         avgVal={ avg }
        positiveVal={ positive }
        allClicks={allClicks}
      />
    </div>
  )
}
export default App;
