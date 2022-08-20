import { useState } from 'react'

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState('')
	const [day, setDay] = useState('')
	const [reminder, setReminder] = useState('')

	const onSubmit = (event) => {
		event.preventDefault()
		
		if (!text) {
			alert('Type the task name!')
			return
		}

		if (!day) {
			alert('Set the task day!')
			return
		}

		onAdd({ text, day, reminder })
		setText('')
		setDay('')
		setReminder(false)
	}

	return (
		<form className='add-form' onSubmit={onSubmit}>
			<div className="form-control">
				<label>Task</label>
				<input type='text' placeholder='Add Task' value={text} onChange={(event) => setText(event.target.value)}/>
			</div>
			<div className="form-control">
				<label>Day & Time</label>
				<input type='text' placeholder='Add Day and Time' value={day} onChange={(event) => setDay(event.target.value)}/>
			</div>
			<div className="form-control form-control-check">
				<label>Set Reminder</label>
				<input type='checkbox' checked={reminder} value={reminder} onChange={(event) => setReminder(event.currentTarget.checked)}/>
			</div>

			<input type='submit' value='Save Task' className="btn btn-block"/>
		</form>
	)
}

export default AddTask