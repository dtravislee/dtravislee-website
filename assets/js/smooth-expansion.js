/* ****************************************** */
/* Original code by: Kriede                  */
/* Source: https://codepen.io/kriede/pen/RVYXZW*/
/* Edited by: D. Travis Lee                   */
/* ****************************************** */

/* FUNCTION: Set max width of hideable elements, +100px, to allow for slide-up / slide-down animations */
window.onload = function () {
	try {
		Array.prototype.forEach.call(document.querySelectorAll(".hideable"), function(hideable) {
			hideable.style.maxHeight = (hideable.scrollHeight + 100) + "px";
		});
	}
	catch(e) {
		console.error(e);
	}
}