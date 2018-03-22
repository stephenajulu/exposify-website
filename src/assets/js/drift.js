!function() {var t;if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], t.factory = function(e) {return function() {var n;return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;};}, t.methods.forEach(function(e) {t[e] = t.factory(e);}), t.load = function(t) {var e, n, o, i;e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"), o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js", n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);});}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('i8nfffddz4g8');

function forEachElement(selector, fn) {
	var elements = document.querySelectorAll(selector);
	for (var i = 0; i < elements.length; i++) {
		fn(elements[i], i);
	}
}

function openSidebar(driftApi, event) {
	event.preventDefault();
	driftApi.sidebar.open();
	return false;
}

drift.on('ready', function(api) {
	var handleClick = openSidebar.bind(this, api);
	forEachElement('.js-open-chat', function(el) {
		el.addEventListener('click', handleClick);
	});
});
