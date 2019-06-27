(function(root) {
	var jQuery = function() {
		return new jQuery.prototype.init();
	}
	jQuery.prototype = {
		init: function() {

		},
		css: function() {

		}
	}
	jQuery.prototype.init.prototype = jQuery.prototype;
	root.$ = root.jQuery = jQuery;
})(this)