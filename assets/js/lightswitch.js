/* ****************************************** */
/* Tutorial by: Flavio Copes                  */
/* Source: https://flaviocopes.com/dark-mode/ */
/* Edited by: D. Travis Lee                   */
/* ****************************************** */

/* VARIABLES - Error texts */
var LocalStorageError = "Using default reading mode. Likely fix: enable or increase size of LocalStorage for light on/off reading styles to function."
var EventListenerError = "Event Listeners not supported. Using default reading mode. Likely fix: upgrade or update your browser for light on/off reading styles to function."

/* FUNCTION: Set light on/off based on browser data on load */
if (document.addEventListener) {
	try {
		document.addEventListener('DOMContentLoaded', (event) => {
			document.getElementById("LightswitchToggle").checked = ((localStorage.getItem('lightswitch-mode') || 'off') === 'off')
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
/* If on, set to off, and vice versa */
function switchLight() {
	try {
		localStorage.setItem('lightswitch-mode', (localStorage.getItem('lightswitch-mode') || 'off') === 'off' ? 'on' : 'off')
	}
	catch(e) {
		console.error(e);
		console.log(LocalStoragError)
	}
}