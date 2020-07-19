/* ****************************************** */
/* Tutorial by: Flavio Copes                  */
/* Source: https://flaviocopes.com/dark-mode/ */
/* Edited by: D. Travis Lee                   */
/* ****************************************** */

/* VARIABLES - Error texts */
var LocalStorageError = "Using default reading mode. Likely fix: enable or increase size of LocalStorage for day/night reading styles to function."
var EventListenerError = "Event Listeners not supported. Using default reading mode. Likely fix: upgrade or update your browser for day/night reading styles to function."

/* FUNCTION: Set day/night mode based on browser data on load */
if (document.addEventListener) {
	try {
		document.addEventListener('DOMContentLoaded', (event) => {
			document.getElementById("DayNightToggle").checked = ((localStorage.getItem('daynight-mode') || 'night') === 'night')
		})
	}
	catch(e) {
		console.error(e);
		document.log(LocalStoragError)
	}
}
else {
	console.log(EventListenerError)
}

/* FUNCTION: Set switch preference in browser storage */
/* If day, set to night, and vice versa */
function dayNightSwitch() {
	try {
		localStorage.setItem('daynight-mode', (localStorage.getItem('daynight-mode') || 'night') === 'night' ? 'day' : 'night')
	}
	catch(e) {
		console.error(e);
		console.log(LocalStoragError)
	}
}