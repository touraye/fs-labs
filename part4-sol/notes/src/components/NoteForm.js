import React, {useState} from 'react'

const NoteForm = ( { createNote } ) => {
      const [newNote, setNewNote] = useState('')

			const handleChange = (event) => {
				setNewNote(event.target.value)
			}

			const addNote = (event) => {
				event.preventDefault()
				createNote({
					content: newNote,
					important: Math.random() > 0.5,
				})

				setNewNote('')
			}
    return (
			<div>
				<h2>Create a new note</h2>
				<form onSubmit={addNote} className='noteForm'>
					<div>
						<input
							value={newNote}
							onChange={handleChange}
							placeholder='Write new note...'
						/>
					</div>
					<button type='submit' className='saveBtn'>
						save
					</button>
				</form>
			</div>
		)
}

export default NoteForm
