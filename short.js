var hosturl = "https://url.csejnu.com/?link=";
var shortMode = "SHORT";

$("#url input").on("change keyup paste", function () {
	var inputValue = $(this).val();

	if (inputValue) {
		$(".url-controls").addClass("active");
		$("#url").addClass("active");
	} else {
		$(".url-controls").removeClass("active");
		$("#url").removeClass("active");
	}
});

$(document).on("click", ".url-controls.active span", function () {
	if ($(this).hasClass("active")) {
		$(".url-controls span").removeClass("active");
		$("#url-input input").addClass("shake");
		setTimeout(function () {
			$("#url-input input").removeClass("shake");
		}, 400);
		$("#url-input").removeClass();
	} else {
		$(".url-controls span").removeClass("active");
		$(this).addClass("active");
		var styleClass = $(this).text();

		$("#url-input input").addClass("shake");
		setTimeout(function () {
			$("#url-input input").removeClass("shake");
		}, 400);

		$("#url-input").removeClass();
		$("#url-input").addClass(styleClass);
	}
});

$(document).ready(function () {
	$("#url-input input").focus();
});

const submit = document.getElementById("submit");
submit.addEventListener("click", function () {

	var longurl = document.getElementById("urlbox").value;

	if (!longurl.startsWith("https://")) {
		longurl = "https://" + longurl;
	}

	fetch('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyBM9KK8llFpxmBEjnFhO35OjYzOuMQpqc8', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"longDynamicLink": hosturl + longurl,
			"suffix": {
				"option": shortMode
			}
		})
	})
		.then(response => response.json())
		.then(data => {
			document.getElementById('urlbox').value = data.shortLink;
		})
		.catch((error) => {
			console.error('Error:', error);
		});

});
const clear = document.getElementById("clear");
clear.addEventListener("click", function () {
	document.getElementById('urlbox').value = "";
});
const copy = document.getElementById("copy");
copy.addEventListener("click", function () {
	copyToClipboard(document.getElementById('urlbox').value);
});

async function copyToClipboard(text) {
	try {
		await navigator.clipboard.writeText(text);
		console.log('Text copied to clipboard');
		//   alert("Copied To Clipboard!");
	} catch (err) {
		console.error('Failed to copy text: ', err);
		alert("Error!");
	}
}


function makeLink() {

	var longurl = document.getElementById("urlbox").value;

	if (!longurl.startsWith("https://")) {
		longurl = "https://" + longurl;
	}

	fetch('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyBM9KK8llFpxmBEjnFhO35OjYzOuMQpqc8', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"longDynamicLink": hosturl + longurl,
			"suffix": {
				"option": shortMode
			}
		})
	})
		.then(response => response.json())
		.then(data => {
			document.getElementById('urlbox').value = data.shortLink;
		})
		.catch((error) => {
			console.error('Error:', error);
		});

}
var urlbox = document.getElementById("urlbox");
urlbox.addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		makeLink();
	}
});