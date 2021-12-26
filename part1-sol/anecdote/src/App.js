import React, { useState } from 'react'

const Likes = ({ votes, quotes }) => {
	let largestVote = 0
	for (let i = 0; i < votes.length; i++) {
		let ele = votes[i]
		if (ele > largestVote) {
			largestVote = ele
		}
	}

	if (largestVote === 0) {
		return <p>No likes</p>
	}

	return (
		<div>
			<p>{quotes[]}</p>
			<p>{largestVote}</p>
		</div>
	)
}

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
	]

	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState(new Array(7).fill(0))
	console.log(votes)

	const getRadomNumber = () => {
		return setSelected(~~(Math.random() * anecdotes.length))
	}

	const addVote = () => {
		let copy = [...votes]
		copy[selected] += 1
		setVotes(copy)
	}

	return (
		<div style={{ margin: '2rem', textAlign: 'center' }}>
			{anecdotes[selected]}
			<p>vote {votes[selected]}</p>
			<br />
			<button
				style={{
					marginTop: '1rem',
					padding: '0.3rem 1.4rem',
					fontSize: '1.4rem',
					letterSpacing: '0.124rem',
					cursor: 'pointer',
				}}
				onClick={addVote}>
				vote
			</button>
			<button
				style={{
					margin: '1rem',
					padding: '0.3rem 1.4rem',
					fontSize: '1.4rem',
					letterSpacing: '0.124rem',
					cursor: 'pointer',
				}}
				onClick={getRadomNumber}>
				next anecdote
			</button>
			<Likes quotes={anecdotes} votes={votes} />
		</div>
	)
}

export default App
