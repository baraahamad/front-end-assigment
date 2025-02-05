// Replace checkForName with a function that checks the URL
import { checkForName } from './nameChecker'

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'https://localhost:8000/api'

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const url = document.getElementById('name').value;

    if (Client.isUrlValid(url)) {
		/**
		 * This will handles calling the function getData asycronously
		 * if the input is valid
		 */
		(async () => {
			let response = await Client.getData({ link: url }, '/analyze');
			try {
				event.target.classList.remove('loading');
				event.target.removeAttribute('disabled');
				// Update UI
				Client.updateUi(response);
			} catch (error) {
				Client.displayError(error);
			}
		})();
	} else {
		/**
		 * This will stop the spinner
		 */
		event.target.classList.remove('loading');
		/**
		 * This will activate the button
		 */
		event.target.removeAttribute('disabled');
		/**
		 * This call displayError to update the ui with the error of invalid input
		 */
		Client.displayError('URL not valid!');
	}
}

// Function to send data to the server

// Export the handleSubmit function
export { handleSubmit };

