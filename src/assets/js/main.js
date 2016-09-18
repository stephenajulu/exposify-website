function forEach(array, callback) {
	for (var i = 0; i < array.length; i++) {
		callback(array[i]);
	}
};

function objectToUrlString(object) {
	var encodedString = '';
	for (var prop in object) {
		if (object.hasOwnProperty(prop)) {
			if (encodedString.length > 0) {
				encodedString += '&';
			}
			encodedString += encodeURI(prop + '=' + object[prop]);
		}
	}
	return encodedString;
};

var ajaxForms        = document.querySelectorAll('.ajax'),
    modalOpenButtons = document.querySelectorAll('.js-modal-toggle'),
    htmlEl           = document.querySelector('html'),
    request          = new XMLHttpRequest();

forEach(modalOpenButtons, function(button) {
	button.addEventListener('click', function(e) {
		htmlEl.classList.toggle('open-modal');
		e.preventDefault();
	});
});

forEach(ajaxForms, function(form) {
	form.addEventListener('submit', function(e) {
		var action   = form.getAttribute('action'),
			method   = form.getAttribute('method'),
			inputs   = form.querySelectorAll('[name]'),
			response = form.querySelector('.response'),
			data     = {};

		forEach(inputs, function(input) {
			var name  = input.getAttribute('name'),
				value = input.value;
			data[name] = value;
		});

		request.open(method, action, true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

		request.onload = function() {
			if (this.status == 200) {
				form.innerHTML = '<h3 class="title no-margin-top upper">Sie sind dabei! <span class="fa fa-rocket accent"></span></h3><p><b>YEAH!</b> Danke für die Anmeldung. Wir melden uns bei Ihnen innerhalb von 24 Stunden.</p><p class="no-margin-bottom"><a class="btn btn-primary btn-fill" href="http://blog.exposify.de">Sehen Sie sich unseren Makler Blog an</a></p>';
				form.classList.add('success');
			} else {
				response.innerHTML = 'Hier stimmt noch was nicht. Überprüfen Sie die Email Adresse.';
				response.classList.add('error');
			}
		};

		request.onerror = function() {
			response.innerHTML = 'Wir können das so nicht abschicken. Überprüfen Sie Ihre Internetverbindung und probieren es erneut.';
			response.classList.add('error');
		};

		request.send(objectToUrlString(data));

		e.preventDefault();
	});
});
