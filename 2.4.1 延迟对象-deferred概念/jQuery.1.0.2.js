(function(root) {
	var version = "1.0.1";
	 var rejectExp = /^<(\w+)\s*\/?>(?:<\/\1>|)$/; 
	var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	var optionsCache = {};
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

		},
		//$.Callbacks用于管理函数队列
		callbacks: function(options) {
			options = typeof options === "string" ? (optionsCache[options] || createOptions(options)) : {};
			var list = [];
			var index, length, testting, memory, start, starts;
			var fire = function(data) {
				 console.log(list)
				memory = options.memory && data;
				index = starts || 0;
				start = 0;
				testting = true;
				length = list.length;
				for (; index < length; index++) {
					if (list[index].apply(data[0], data[1]) === false && options.stopOnfalse) {
						break;
					}
				}
			}
			var self = {
				add: function() {
					var args = Array.prototype.slice.call(arguments);
					start = list.length;
					args.forEach(function(fn) {
						if (toString.call(fn) === "[object Function]") {
							list.push(fn);
						}
					});
					if (memory) {
						starts = start;
						fire(memory);
					}
					return this;
				},
				//指定上下文对象
				fireWith: function(context, arguments) {
					var args = [context, arguments];
					if (!options.once || !testting) {
						fire(args);
					}

				},
				//参数传递
				fire: function() {
					self.fireWith(this, arguments);
				}
			}
			return self;
		},
		// 异步回调解决方案
		Deferred: function(func) {
			var tuples = [
					["resolve", "done", jQuery.callbacks("once memory"), "resolved"],
					["reject", "fail", jQuery.callbacks("once memory"), "rejected"],
					["notify", "progress", jQuery.callbacks("memory")]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
					},
					promise: function(obj) {
						return obj != null ? jQuery.extend(obj, promise) : promise;
					}
				},
				deferred = {};

			tuples.forEach(function(tuple, i) {
				var list = tuple[2], //callbacks对象
					stateString = tuple[3];  //（resolved| rejected）

				// promise[ done | fail | progress ] = list.add
				promise[tuple[1]] = list.add; // done,fail, progress 添加函数

				//  list是一个callbacks对象
				if (stateString) {
					list.add(function() {
						state = stateString;
					});
				}

				// deferred[ resolve | reject | notify ]
				 // deferred = {"resolve" : fn,"reject" : fn,"notify" : fn,}
				deferred[tuple[0]] = function() {
					deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);//执行函数队列执行函数
					return this;
				};
				deferred[tuple[0] + "With"] = list.fireWith; //赋值函数队列执行函数
			});

			// Make the deferred a promise
			promise.promise(deferred);

			return deferred;
		},
		//执行一个或多个对象的延迟对象的回调函数
		when: function(subordinate) {
			return subordinate.promise();
		},
	})

	function createOptions(options) {
		var object = optionsCache[options] = {};
		options.split(/\s+/).forEach(function(value) {
			object[value] = true;
		});
		return object;
	}


	jQuery.fn.init.prototype = jQuery.prototype;
	root.$ = root.jQuery = jQuery;
})(this)