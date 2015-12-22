// Voyga

;(function() {

	"use strict";

	var _ = {

		empty: function() {},

		isFunc: function(thing) {

			return Object.prototype.toString.call(thing) === "[object Function]" || typeof value === "function";

		},

		isStr: function(thing) {

			return Object.prototype.toString.call(thing) === "[object String]";

		},

		isObj: function(thing) {

			return Object.prototype.toString.call(thing) === "[object Object]";

		},

		serialize: function(data) {

			 if (_.isObj(data)) {

			 	return Object.keys(data).map(function(key) {

			 		return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);

			 	}).join("&");

			} else {

				return data;

			}

		}

	};

	var ajax = function(config) {

		var xhr = new XMLHttpRequest();
		var method = _.isStr(config.method) ? config.method.toUpperCase() : "GET";
		var url = config.url;
		var data = _.serialize(config.data);
		var funcs = {};

		["before", "complete", "success", "fail"].forEach(function(func) {

			funcs[func] = _.isFunc(config[func]) ? config[func] : _.empty;

		});

		funcs.before();

		xhr.open(method, url, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(data);

		xhr.onreadystatechange = function() {

			if (xhr.readyState === 4) {

				funcs.complete(xhr.responseText);

				if (xhr.status === 200) {

					funcs.success(xhr.responseText);

				} else {

					funcs.fail(xhr.responseText);

				}

			}

		};

	};

	if (typeof module !== "undefined" && typeof module.exports !== "undefined") {

		module.exports = ajax;

	} else if (typeof V !== "undefined") {

		V.extend("ajax", ajax);

	}

})();
