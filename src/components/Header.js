import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAddClick, toggle }) => {

	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button color={!toggle ? 'green' : 'blue'} text={!toggle ? 'Add' : 'Cancel'} onClick={onAddClick}/>
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker'
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

/* const headingStyle = {
	color: 'blue', backgroundColor: 'black'
} */

export default Header