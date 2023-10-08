{{- $paginator := .Scratch.Get `pages` -}}
{{- if gt $paginator.TotalPages 1 -}}{{- with $paginator -}}

//********>
// SHARE.JS
//********>

// Implements JavaScript to jump to pagination pages per user input
// Only added to Hugo output if the paginator has more than 1 page to it

function goToPage() {
	try {
		// Get the value from the pagenum input
		var pagenum = document.getElementById('pagenum').value;
		// And the total number of pages
		var totalpages = {{ .TotalPages -}};
		// Try to parse the input as a number - most likely fail point for old browsers
		//	(Some old browsers will render the Number input as a generic text input)
		pagenum = Number(pagenum);
		// Ensure pagenum is a number within the paginator range, as a fallback to HTML
		if (pagenum >= 1 && pagenum <= totalpages) {
			// If so, get the URL of the last page in the paginator
			// ( We use the last page because it will always exist and have a page number.
			//	.Next and .Prev may not exist if we are already on the last / first pages
			//	and .First does not have a page number by default. )
			var href = '{{- $.Site.BaseURL -}}{{- .Last.URL -}}';
			// Replace the page number with the new page number
			href = href.replace(/\/[0-9]\//, '/' + pagenum + '/');
			// Finally, navigate the user to the desired page
			window.location.assign(href);
		}
	}
	catch(e) {
		// Log the error to the console
		console.log(e);
		// And let the user know what to do
		window.alert('Please enter a number between 1 and ' + totalpages);
	}
}
{{- end -}}{{- end -}}