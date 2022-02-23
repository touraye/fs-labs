import NewNote from './Note/NewNote'
import Note from './Note/Notes'

const App = () => {   
	
  return (
		<div className='note__wrapper'>
			<NewNote />
			<h3 className='note__heading'>note redux app</h3>
			<p>
				Click on Note to toggle the <strong>important</strong>
			</p>
			<Note />
		</div>
	)
}

export default App