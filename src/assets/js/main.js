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

document.querySelector('.js-toggle-header-menu').addEventListener('click', function() {
	document.querySelector('.header-hamburger').classList.toggle('header-hamburger-close');
	document.querySelector('.header').classList.toggle('is-mobile-nav-shown');
});

document.querySelector('.js-show-header-nav-dropdown').addEventListener('click', function(e) {
	document.querySelector('.header-nav-dropdown').classList.toggle('show');
	e.stopPropagation();
});

document.querySelector('body').addEventListener('click', function() {
	document.querySelector('.header-nav-dropdown').classList.remove('show');
});


function submitForm(form) {
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

		// TODO: refactor different email systems

		var response = JSON.parse(this.response);

		if (this.status == 200 && response.status == 'success') {
			var link = response.link;
			window.location.replace(link);
			setTimeout(function() {
				form.innerHTML = '<h3 class="title no-margin-top upper">Danke für Ihre Email! <span class="fa fa-rocket accent"></span></h3><p class="no-margin-bottom"><a href="' + link + '">Klicken Sie hier um fortzufahren</a>.</p>';
				form.classList.add('success');
			}, 1000);
		} else if (response.status == 'true') {
			form.innerHTML = 'Wir haben die Email abgeschickt und melden uns so schnell wie möglich bei Ihnen.';
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
}

forEach(ajaxForms, function(form) {
	form.addEventListener('submit', function(e) {
		e.preventDefault();

		var recaptchaEl = form.querySelector('.recaptcha');

		if (recaptchaEl) {
			form.removeChild(recaptchaEl);
		}

		recaptchaEl = document.createElement('div');
		recaptchaEl.className = 'recaptcha';
		form.appendChild(recaptchaEl);

		var recaptchaId = grecaptcha.render(recaptchaEl, {
			'sitekey': '6Lf3QR4UAAAAANTMGR640NuFPo3FNP8uQI-Pex7W',
			'size': 'invisible',
			'badge': 'inline',
			'callback': function() {
				submitForm(form);
			}
		});
		grecaptcha.execute(recaptchaId);
	});
});
