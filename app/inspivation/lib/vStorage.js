// Voyga

;(function() {

	"use strict";

	var Utils = {

		get: function(name) {

			return JSON.parse(window.localStorage.getItem(name));

		},

		set: function(name, val) {

			window.localStorage.setItem(name, JSON.stringify(val));

		},

		remove: function(name) {

			window.localStorage.removeItem(name);

		}

	};

	var Storage = function(name, init) {

		this.name = name;
		this.init = init === undefined ? [] : init;

		if (Utils.get(name)) {

			this.data = Utils.get(name);

		} else {

			this.reset();

		}

	};

	Storage.prototype = {

		toString: function() {

			return this.data;

		},

		save: function() {

			Utils.set(this.name, this.data);

			return this;

		},

		reset: function() {

			this.data = this.init;
			this.save();

			return this;

		},

		clear: function() {

			Utils.remove(this.name);

			return this;

		}

	};

	var api = function(name, init) {

		return new Storage(name, init);

	};

	if (typeof module !== "undefined" && typeof module.exports !== "undefined") {

		module.exports = api;

	} else if (typeof V !== "undefined") {

		V.extend("storage", api);

	}

})();
