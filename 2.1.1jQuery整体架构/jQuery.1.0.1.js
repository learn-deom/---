(function(root) {
	var jQuery = function() {
		return new jQuery.prototype.init();
	}
	jQuery.fn =jQuery.prototype = {
		init: function() {

		},
		css: function() {

		}
	}
	//extend方法
	jQuery.extend = jQuery.fn.extend = function() {
		var target = arguments[0] || {};// 扩展的目标
		var length = arguments.length;
		var i = 1;
		var deep = false; //是否深拷贝
		var options, name, copy, clone, src,copyIsArray;
		// 深拷贝
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1]
		}
		// 浅拷贝第一个参数是否为对象
		if (typeof target !== 'object') {
			target = {};
		}
		// 参数为1个时扩展到jQuery上
		if (length === i) {
			target = this;
			i--;//拿到第一个扩展对象
		}
		// 浅拷贝
		for(;i < length;i++) {
			if((options = arguments[i]) !== null) {
				for(name in options) {
					src = target[name]; // 目标
					copy = options[name];
					// 深拷贝 (要拷贝的是对象或者是数组)
					if(deep && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
						if (copyIsArray) {
							clone = jQuery.isArray(src)? src: []; // 目标对象
						} else{
							clone = jQuery.isPlainObject(src)? src: {}; //目标对象
						}
						target[name] = jQuery.extend(deep, clone, copy);
					//浅拷贝
					} else if(clone !== 'undefined') {
						target[name] = copy;

					}
					
				}
			}
		}
		return target;

	}

	jQuery.extend({
		isPlainObject: function(obj) {
			return toString.call(obj) === '[object Object]';
		},
		isArray: function(obj) {
			return toString.call(obj) === '[object Array]';
		}
	})




	jQuery.fn.init.prototype = jQuery.prototype;
	root.$ = root.jQuery = jQuery;
})(this)