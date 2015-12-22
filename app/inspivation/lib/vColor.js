// Voyga

;(function() {

	"use strict";

	var Vcolor = function(value) {

		this.val = value;

	};

	Vcolor.prototype = {

		toString: function() {

			return this.hex();

		},

		format: function() {

			var first = this.val[0];

			if (first === "#") {

				return "hex";

			} else if (Array.isArray(this.val)) {

				if (this.val.length === 4) {

					return "cmyk";

				} else if (this.val.length === 3) {

					if (this.val[1] <= 1 && this.val[2] <= 1) {

						return "hsl";

					} else {

						return "rgb";

					}

				} else {

					return "fuck";

				}

			} else {

				return "fuck";

			}

		},

		rgb: function() {

			switch (this.format()) {

				case "hex": {

					return (function(self) {

						var hex = self.val.substring(1, 7).split(""),
							r = parseInt(hex[0] + hex[1], 16),
							g = parseInt(hex[2] + hex[3], 16),
							b = parseInt(hex[4] + hex[5], 16);

						return [r, g, b];

					})(this);

				}

				case "cmyk": {

					return (function(self) {

						var c = self.val[0],
							m = self.val[1],
							y = self.val[2],
							k = self.val[3],
							r = 255 * (1 - c) * (1 - k),
							g = 255 * (1 - m) * (1 - k),
							b = 255 * (1 - y) * (1 - k);

						return [r, g, b];

					})(this);

				}

				case "hsl": {

					return (function(self) {

						var h = self.val[0],
							s = self.val[1],
							l = self.val[2],
							c = (1 - Math.abs(2 * l - 1)) * s,
							x = c * (1 - Math.abs((h / 60) % 2 - 1)),
							m = l - c / 2,
							r, g, b;

						if (h >= 0 && h < 60) {

							r = c;
							g = x;
							b = 0;

						} else if (h >= 60 && h < 120) {

							r = x;
							g = c;
							b = 0;

						} else if (h >= 120 && h < 180) {

							r = 0;
							g = c;
							b = x;

						} else if (h >= 180 && h < 240) {

							r = 0;
							g = x;
							b = c;

						} else if (h >= 240 && h < 300) {

							r = x;
							g = 0;
							b = c;

						} else if (h >= 300 && h < 360) {

							r = c;
							g = 0;
							b = x;

						}

						r = Math.round((r + m) * 255);
						g = Math.round((g + m) * 255);
						b = Math.round((b + m) * 255);

						return [r, g, b];

					})(this);

				}

				default: {

					return this.val;

				}

			}

		},

		hex: function() {

			if (this.format === "hex") {

				return this.val;

			} else {

				return "#" + this.rgb().map(function(val) {

					return val.toString(16);

				}).join("");

			}

		},

		hsl: function() {

			if (this.format() === "hsl") {

				return this.val;

			} else {

				var rgb = this.rgb(),
					r = rgb[0] / 255,
					g = rgb[1] / 255,
					b = rgb[2] / 255,
					max = Math.max(r, g, b),
					min = Math.min(r, g, b),
					delta = max - min,
					l = (max + min) / 2,
					s, h;

				if (delta === 0) {

					s = 0;
					h = 0;

				} else {

					s = delta / (1 - Math.abs(2 * l - 1));

					switch (max) {

						case r: {

							h = 60 * (((g - b) / delta) % 6);

							break;

						}

						case g: {

							h = 60 * ((b - r) / delta + 2);

							break;

						}

						case b: {

							h = 60 * ((r - g) / delta + 4);

							break;

						}

					}

				}

				return [h, s, l].map(function(val) {

					return val.toFixed(2);

				});

			}

		},

		cmyk: function() {

			if (this.format() === "cmyk") {

				return this.val;

			} else {

				var rgb = this.rgb(),
					r = rgb[0] / 255,
					g = rgb[1] / 255,
					b = rgb[2] / 255,
					k = 1 - Math.max(r, g, b),
					c = (1 - r - k) / (1 - k),
					m = (1 - g - k) / (1 - k),
					y = (1 - b - k) / (1 - k);

				return [c, m, y, k].map(function(val) {

					return val.toFixed(2);

				});

			}

		},

		brighten: function(scale) {

			if (scale === undefined) {

				return this;

			} else {

				return new Vcolor(this.rgb().map(function(val) {

					if (scale < 0) {

						return val + scale < 0 ? 0 : val + scale;

					} else {

						return val + scale > 255 ? 255 : val + scale;

					}

				}));

			}

		},

		darken: function(scale) {

			return this.brighten(-scale);

		}

	};

	var api = function(color) {

		return new Vcolor(color);

	};

	if (typeof module !== "undefined" && typeof module.exports !== "undefined") {

		module.exports = api;

	} else if (typeof V !== "undefined") {

		V.extend("color", api);

	}

})();
