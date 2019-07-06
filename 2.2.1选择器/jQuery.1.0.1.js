(function(root) {
	var version = "1.0.1";
	 var rejectExp = /^<(\w+)\s*\/?>(?:<\/\1>|)$/; 
	var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	var jQuery = function(selector, context) {
		return new jQuery.prototype.init(selector, context);
	}
	jQuery.fn =jQuery.prototype = {
		length: 0,
		jquery:version,
		selector: "",
		init : function(selector,context,root) {
			context = context || document;
			var match, elem, index = 0;
			//$() $(undefined) $(null) $(false)
			if (!selector) {
				return this;
			}
			//传入的字符串
			if (typeof selector === 'string') {
				if (selector.charAt(0) === "<" && selector.charAt(selector.length -1) && selector.length >= 3){
					match = [selector];
				}
				//创建dom
				if (match) {
					jQuery.merge(this,jQuery.parseHtml(selector,context));
				//查询dom
				} else {
					elem = document.querySelectorAll(selector);
					elems = Array.prototype.slice.call(elem);
					this.length = elems.length;
					for(;index < elems;index++) {
						this[index] = elems[index];
					}
					this.context = context;
					this.selector = selector;
				}
			// 传入dom节点
			} else if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
			} else if(jQuery.isFunction(selector)) {
				return typeof jQuery.ready !== 'undefined'?
				jQuery.ready(selector) : 
				// Execute immediately if ready is not present
				selector(jQuery);
			} 

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
		
		for(;i < length;i++) {
			if((options = arguments[i]) !== null) {
				for(name in options) {
					src = target[name]; // 目标健
					copy = options[name]; // 拷贝健的值
					// 深拷贝 (要拷贝的健是对象或者是数组)
					if(deep && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = jQuery.isArray(src)? src: []; // 目标数组
						} else{
							clone = jQuery.isPlainObject(src)? src: {}; //目标对象
						}
						target[name] = jQuery.extend(deep, clone, copy);
					//浅拷贝
					} else if(copy !== 'undefined') {
						target[name] = copy;

					}
					
				}
			}
		}
		return target;

	}

	jQuery.extend({
		// 判断是否为函数
		 isFunction( obj ) {
		    return typeof obj === "function" && typeof obj.nodeType !== "number";
		},
		isPlainObject: function(obj) {
			return toString.call(obj) === '[object Object]';
		},
		isArray: function(obj) {
			return toString.call(obj) === '[object Array]';
		},
		//合并数组
		merge: function(first, second) {
			var l = second.length,
				i = first.length,
				j = 0;
			if (typeof l === "number") {
				for (; j < l; j++) {
					first[i++] = second[j];
				}
			} else {
				while(second[j] !== undefined) {
					first[i++] = second[j++];
				}
			}	
			first.length = i;
			return first;

		},
		parseHtml: function(data, context) {
			if (!data || typeof data !== "string") {
				return null;
			}
			var parse = rejectExp.exec(data);
			return [context.createElement(parse[1])];

		}
	})


	jQuery.fn.init.prototype = jQuery.prototype;
	root.$ = root.jQuery = jQuery;
})(this)