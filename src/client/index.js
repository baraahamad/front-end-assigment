
// Import SCSS files
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

import { handleSubmit } from './js/formHandler.js';
export { handleSubmit };

/**
 * This will dictate whether the user can click on the analyse button or not
 * @param {InputEvent} e
 */
const buttonStateHandler = (e) => {
	if (e.target.value.length > 1) {
		document.querySelector('.error').innerHTML = '';
		document.querySelector('.form__btn').removeAttribute('disabled');
		document.querySelector('#text').classList.remove('invalid');
	} else {
		document.querySelector('.form__btn').setAttribute('disabled', '');
	}
};

/**
 * This is the event for when the user types in the input field
 */
document.querySelector('#text').addEventListener('input', (e) => {
	buttonStateHandler(e);
});

/**
 * This is the event for when the user clicks the analyse button
 */
document.querySelector('.form__btn').addEventListener('click', (e) => {
	Client.handleSubmit(e);
});