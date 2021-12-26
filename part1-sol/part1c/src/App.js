import React, { useState } from 'react';

const Statistics = (props) => {
	if (props.allClicks.length === 0) {
		return <p>No clicks, </p>;
	}
	return (
		<div style={{}}>
			<Stats text='good' value={props.goodVal} />
			<Stats text='neutral' value={props.neutralVal} />
			<Stats text='bad' value={props.badVal} />
			<Stats text='all' value={props.allVal} />
			<Stats text='average' value={props.averageVal} />
			<Stats text='positive' value={props.positiveVal} />
		</div>
	);
};

const Stats = ({ text, value }) => (
	<p
		style={{
			backgroundColor: 'whiteSmoke',
			padding: '0.4rem',
			textTransform: 'capitalize',
		}}>
		{text} {value}
	</p>
);

const Button = ({ handleClick, text }) => (
	<button
		style={{
			marginRight: '1rem',
			padding: '0.4rem 1rem',
			textTransform: 'capitalize',
			letterSpacing: '0.123rem',
			cursor: 'pointer',
			borderRadius: '4px',
		}}
		onClick={handleClick}>
		{text}
	</button>
);

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [allClicks, setClicks] = useState([]);

	const handleGoodClicks = () => {
		setClicks(allClicks.concat('good'));
		setGood(good + 1);
	};

	const handleNeutralClicks = () => {
		setClicks(allClicks.concat('neutral'));
		setNeutral(neutral + 1);
	};

	const handleBadClicks = () => {
		setClicks(allClicks.concat('bad'));
		setBad(bad + 1);
	};

	const all = good + neutral + bad;

	const average = all / 3;

	const positive = ((good + neutral) / all) * 100;

	return (
		<div
			style={{
				padding: '1rem',
				textAlign: 'center',
			}}>
			<h1>Give feedback</h1>
			<Button
				style={{ backgroundColor: 'green', color: 'red' }}
				handleClick={handleGoodClicks}
				text='good'
			/>
			<Button handleClick={handleNeutralClicks} text='neutral' />
			<Button handleClick={handleBadClicks} text='bad' />

			<h2>Statistics</h2>
			<Statistics
				good='good'
				goodVal={good}
				neutral='neutral'
				neutralVal={neutral}
				bad='bad'
				badVal={bad}
				all='all'
				allVal={all}
				average='average'
				averageVal={average}
				positive='positive'
				positiveVal={positive}
				allClicks={allClicks}
			/>
		</div>
	);
};

export default App;
