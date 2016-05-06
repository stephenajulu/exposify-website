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

var ajaxForms = document.querySelectorAll('.ajax'),
	request   = new XMLHttpRequest();

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

		request.onload = function() {
			if (this.status == 200) {
				form.innerHTML = '<h3 class="no-margin-top upper rounded-font">Du bist dabei! <span class="fa fa-rocket accent"></span></h3><p><b>YEAH!</b> Du bist jetzt auf unserer Warteliste. Wir melden uns bei Dir so früh wie möglich.</p><p class="no-margin-bottom"><a class="btn btn-primary btn-fill" href="http://blog.exposify.de">Sieh Dir unseren Makler Blog an</a></p>';
			} else {
				response.innerHTML = 'Hier stimmt noch was nicht. Überprüfe die Email Adresse.';
				response.classList.add('error');
			}
		};

		request.onerror = function() {
			response.innerHTML = 'Wir können das so nicht abschicken. Überprüfe Deine Internetverbindung und probiere es nochmal.';
			response.classList.add('error');
		};

		request.send(objectToUrlString(data));

		e.preventDefault();
	});
});