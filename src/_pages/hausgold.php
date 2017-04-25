<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title>Exposify für Hausgold</title>

		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Palanquin:400,700">
		<link rel="stylesheet" href="/assets/css/main.css">

		<noscript>
			<style>
				.animate-in { visibility: visible; }
			</style>
		</noscript>
	</head>
	<body class="hausgold">
		<!--[if lt IE 10]><p class="browserupgrade">Sie benutzen einen <strong>veralteten</strong> Browser. Bitte <a href="http://browsehappy.com/">aktualisieren Sie ihren Browser</a> um das Internet-Erlebnis zu verbessern.</p><![endif]-->
		<header class="header header-overlay">
			<div class="row">
				<div class="small-12 column">
					<a href="/"><img class="header-logo" src="/assets/img/exposify_logo_simple_white.svg" alt="Exposify"></a>
				</div>
			</div>
		</header>

		<section class="hero hero-hausgold">
			<div class="row">
				<div class="large-12 column white">
					<h1 class="hero-title" id="hero-title">Genug von <span class="line-break">überteuerten Portalen?<span></h1>
					<p class="hero-value" id="hero-value">
						Exposify bringt Ihre Immobilien mit einem Klick suchmaschinenoptimiert auf Ihre Website. Hausgold Kunden können Exposify jetzt 30 Tage testen.
					</p>
					<a class="btn btn-large btn-square btn-accent btn-fill margin-center js-modal-toggle" href="/#signup">30 Tage kostenlos testen</a>
				</div>
			</div>
			<a class="hero-scroll-down" href="#benefits"><i class="fa fa-angle-down"></i></a>
		</section>

		<section class="benefits" id="benefits">
			<div class="row">
				<div class="benefit large-4 column">
					<div class="benefit-emoji">
						<img src="https://twemoji.maxcdn.com/2/72x72/1f3a8.png" alt="🎨">
					</div>
					<h2>Individuelles Design</h2>
					<p>
						Ihre Website bildet die Brücke zwischen Ihnen und Ihren Kunden.
						Wir passen uns Ihrem Corporate Design an und machen Ihren
						Webauftritt zur Golden Gate!
					</p>
				</div>
				<div class="benefit large-4 column">
					<div class="benefit-emoji">
						<img src="https://twemoji.maxcdn.com/2/72x72/26a1.png" alt="⚡️">
					</div>
					<h2>Schneller geht's nicht</h2>
					<p>
						Wir wissen, dass unsere App ein Mittel zum Zweck ist.
						Deshalb minimieren wir die Zeit, die Sie vor dem PC benötigen –
						ein Klick und Ihre Immobilie ist online.
					</p>
				</div>
				<div class="benefit large-4 column">
					<div class="benefit-emoji">
						<img src="https://twemoji.maxcdn.com/2/72x72/1f4b0.png" alt="💰">
					</div>
					<h2>Faire Preispolitik</h2>
					<p>
						Für 7€ pro aktiver Immobilie im Monat bieten wir Ihnen eine
						hochwertige Vermarktung aller Objekte und vollen Support.
						Sie bezahlen nur für das, was Sie nutzen.
					</p>
				</div>
			</div>
		</section>

		<section class="story-section">
			<div class="row">
				<div class="large-12 column">
					<div class="box story">
						<h2>Hallo Hausgold Makler,</h2>
						<p>
							vor etwa zwei Jahren begannen wir mit der Arbeit an einer
							Maklerwebsite. Unserer Auftrag war es, vorhandene Angebote
							so aufzuwerten, dass diese besser bei Google gefunden werden.
						</p>
						<p>
							Da es auf dem Markt keine für uns zufriedenstellende Lösung
							für dieses Problem gab, haben wir selbst eine entwickelt: Exposify.
						</p>
						<p>
							Momentan müssen Ihre Kunden den Umweg über eine Suchmaschine
							und anschließend ein anonymes Portal nehmen, um überhaupt
							auf Sie aufmerksam zu werden.
						</p>
						<p>
							Wir glauben, dass in der Zukunft die persönliche Beziehung zum
							Kunden noch wichtiger wird. Deswegen optimieren wir Ihre Website so,
							dass potenzielle Interessenten Ihre Angebote schnell und direkt finden.
						</p>
						<p>
							Täglich geben wir unser Bestes, damit Sie mit Exposify so
							zufrieden sind wie wir.
						</p>
						<p class="italic">
							– Das Exposify Team
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="exclusive before-footer">
			<div class="row">
				<div class="exclusive-partner large-6 column">
					<h2>Exklusiv für <span class="line-break">Hausgold Makler</span></h2>
					<img src="/assets/img/hausgold_logo.svg" alt="Hausgold">
				</div>
				<div class="large-6 column">
					<p>
						Sie erhalten <b>30 Tage kostenlos</b> und unverbindlich Zugang zu Exposify.
						Sollte Exposify Ihnen gefallen, bezahlen Sie danach <b>7€ pro aktiver Immobilie im Monat</b>.
					</p>
					<p>
						Nachdem Sie sich hier eingetragen haben, melden wir uns bei Ihnen,
						um die weiteren Schritte für die Integration in Ihre Website zu besprechen.
					</p>
					<form class="exclusive-cta ajax" action="https://app.exposify.de/xhr-send-invite" method="post">
						<input type="hidden" name="referral" value="<?php echo htmlspecialchars($_GET['ref']); ?>">
						<div class="btn-field">
							<input class="btn-field-input btn-field-input-dark" type="email" name="email" placeholder="Ihre Email Adresse" required>
							<button class="btn btn-square btn-accent btn-fill btn-field-btn" type="submit">Starten</button>
						</div>
						<div class="small response hero-cta-response"></div>
					</form>
				</div>
			</div>

		</section>

		<footer class="footer footer-transition-light">
			<div class="row">
				<div class="small-12 large-6 column footer-left-section">
					<img class="footer-logo" src="/assets/img/exposify_logo_simple_white.svg" alt="Exposify">
					<div class="footer-copy">
						© Exposify 2017<br>
						Mit <span class="fa fa-heart"></span> aus Deutschland<br>
						<br>
						<a href="/impressum/">Impressum</a> <span class="bull">&bull;</span> <a href="&#109;&#97;&#105;&#x6c;&#x74;&#111;&#x3a;&#105;&#110;&#x66;&#111;&#64;&#x65;&#120;&#112;&#111;&#x73;&#x69;&#102;&#121;&#x2e;&#x64;&#x65;">Kontakt</a>
					</div>
				</div>
				<div class="small-12 large-6 column footer-right-section">
					<div class="row">
						<div class="medium-6 column">
							<h2 class="white footer-heading">Folge uns</h2>
							<ul class="footer-list">
								<li><a target="_blank" href="https://twitter.com/exposifyapp">Twitter</a></li>
								<li><a target="_blank" href="https://www.facebook.com/exposifyapp">Facebook</a></li>
								<li><a target="_blank" href="https://www.xing.com/companies/exposify">Xing</a></li>
								<li><a target="_blank" href="https://www.linkedin.com/company/exposify-f%C3%BCr-makler">LinkedIn</a></li>
							</ul>
						</div>
						<div class="medium-6 column">
							<h2 class="white footer-heading">Support</h2>
							<ul class="footer-list">
								<li class="footer-twitter"><a target="_blank" href="https://twitter.com/exposifyapp"><span class="fa fa-twitter"></span>Support auf Twitter</a></li>
								<li><a href="&#109;&#97;&#105;&#x6c;&#x74;&#111;&#x3a;&#105;&#110;&#x66;&#111;&#64;&#x65;&#120;&#112;&#111;&#x73;&#x69;&#102;&#121;&#x2e;&#x64;&#x65;">Support per Mail</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>

		<div class="modal-overlay" id="modal-overlay"></div>

		<div class="modal box">
			<div class="box-action"><i class="fa fa-close js-modal-toggle"></i></div>
			<form class="box-content ajax" action="https://app.exposify.de/xhr-send-invite" method="post">
				<input type="hidden" name="referral" value="<?php echo htmlspecialchars($_GET['ref']); ?>">
				<h2 class="no-margin-top">Los geht's</h2>
				<p>
					Sehr gut, an welche Email Adresse sollen wir Ihre Einladung für Exposify senden?
				</p>
				<div class="field" style="margin-bottom: .8em;">
					<i class="accent field-icon fa fa-envelope"></i>
					<input class="field-input field-input-accent" type="email" name="email" placeholder="Email Adresse" required>
				</div>
				<div class="small response" style="margin: 1.2em 0;"></div>
				<button class="btn btn-accent btn-fill btn-square btn-large btn-bold full-width" type="submit">Kostenlos starten</button>
			</form>
		</div>

		<script src="https://www.google.com/recaptcha/api.js"></script>
		<script src="/assets/js/main.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/2.2.5/2/twemoji.min.js"></script>
		<script>
			twemoji.parse(document.body, {
				callback: function(icon, options, variant) {
					switch (icon) {
						case 'a9':      // © copyright
						return false;
					}
					return '' . concat(options.base, options.size, '/', icon, options.ext);
				}
			});
		</script>
	</body>
</html>
