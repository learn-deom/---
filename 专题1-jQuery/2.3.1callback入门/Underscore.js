(function(root) {
	var optionsCache = {};
	var _ = {	
		callback: function (options) {
			options = typeof options === 'string' ? (optionsCache[options] || createOptions(options)): {};
			var list = [];
			var memory,testting,start,starts;
			function fire(data) {
				memory = options.memory && data;
				index = starts || 0;
				start = 0;
				testting = true;
				length = list.length;
				for(;index < length; index ++) {
					// stopOnfalse时停止执行
					if(list[index].apply(data[0],data[1])=== false && options.stopOnfalse) {
						break;
					}
					
				}
			}
			var self = {
				add : function() {
					var args = Array.prototype.slice.call(arguments);
					start = list.length;
					args.forEach(function(fn) {
						if (toString.call(fn) === '[object Function]') {
							list.push(fn)
						}
				
					})
					// memory的时立即执行
					if(memory){
					 starts = start;
					 fire(memory);	
					}


				},
				fireWith: function(context, arguments) {
					var args = [context, arguments];
					// once只能执行一次
					if(!options.once && !testting) {
						fire(args)
					}
				},
				fire: function() {
					self.fireWith(this,arguments)

				}

			};
			return self;
		}
	}
	function createOptions(options) {
			var object = optionsCache[options] = {};
			options.split(/\s+/).forEach(function(value) {
				object[value] = true;
			})
			return object;
	}
	root._ = _;
})(this)