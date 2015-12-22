// Voyga

V.init(function() {

	var words = [

			[

				"醉", "有", "天", "寒", "在", "愁",
				"去", "回", "瘦", "落", "流", "休",
				"尽", "无", "观", "别", "昏", "断"

			],

			[

				"东风", "何处", "人间", "风流", "归去", "春风",
				"西风", "归来", "江南", "相思", "梅花", "千里",
				"回首", "明月", "多少", "如今", "梦回", "年年",
				"万里", "一笑", "黄昏", "当年", "天涯", "相逢",
				"芳草", "红豆", "一枝", "风雨", "流水", "依旧",
				"风吹", "风月", "多情", "故人", "当时", "无人",
				"斜阳", "不知", "不见", "深处", "时节", "平生",
				"凄凉", "春色", "匆匆", "功名", "一点", "无限",
				"今日", "天上", "杨柳", "西湖", "桃花", "扁舟",
				"伊人", "憔悴", "何事", "芙蓉", "神仙", "一片",
				"桃李", "人生", "十分", "心事", "黄花", "一声",
				"佳人", "长安", "东君", "断肠", "而今", "鸳鸯",
				"为谁", "十年", "去年", "少年", "海棠", "寂寞",
				"无情", "不是", "时候", "肠断", "富贵", "蓬莱",
				"昨夜", "行人", "今夜", "谁知", "不似", "江上",
				"悠悠", "几度", "青山", "何时", "几番", "惟有",
				"一曲", "明月", "往事"

			],

		];

	var formats = {

		qiuXi: [

			[2, 2],
			[2, 2],
			[2, 2, 2],
			[2, 2],
			[2, 2, 2]

		],

		ruMengLing: [

			[2, 2, 2, 1],
			[2, 1, 2],
			[2, 2, 2, 1],
			[2, 1, 2],
			[2, 2, 2, 1],
			[2, 1, 2]		

		],

		huanXiSha: [

			[2, 2, 2, 1],
			[2, 2, 2, 1],
			[2, 2, 2, 1],
			[2, 2, 2, 1],
			[2, 2, 2, 1],
			[2, 2, 2, 1]

		],

		buSuanZi: [

			[2, 1, 2],
			[2, 1, 2],
			[2, 1, 2, 2],
			[2, 1, 2],
			[2, 1, 2],
			[2, 1, 2],
			[2, 1, 2, 2],
			[2, 1, 2]

		],

		xiJiangYue: [

			[2, 2, 2],
			[2, 2, 2],
			[2, 2, 1, 2],
			[2, 2, 2],
			[2, 2, 2],
			[2, 2, 2],
			[2, 2, 1, 2],
			[2, 2, 2]

		],

		qingPingLe: [

			[2, 2],
			[2, 2, 1],
			[2, 2, 1, 2],
			[2, 2, 2],
			[2, 2, 2],
			[2, 2, 2],
			[2, 2, 2],
			[2, 2, 2]

		],

		dianJiangChun: [

			[2, 2],
			[2, 2, 1, 2],
			[2, 2],
			[2, 2, 1],
			[2, 2],
			[2, 2, 1],
			[2, 1],
			[2, 2],
			[2, 1, 2]

		]

	};

	var titles = [

			["秋曦", formats.qiuXi],
			["如梦令", formats.ruMengLing],
			["浣溪沙", formats.huanXiSha],
			["卜算子", formats.buSuanZi],
			["西江月", formats.xiJiangYue],
			["清平乐", formats.qingPingLe],
			["点绛唇", formats.dianJiangChun]

		];

	var Utils = {

		rand: function(arr) {

			return Math.floor(Math.random() * arr.length);

		}

	};

	var changing = false;

	var generateCi = function() {

		var index = Utils.rand(titles),
			title = titles[index][0],
			format = titles[index][1],
			content = title + "<br>" + "<br>",
			word = "";

		for (var i = 0 ; i < format.length ; i ++) {

			for (var j = 0 ; j < format[i].length ; j ++) {

				word = words[format[i][j] - 1];
				content += word[Utils.rand(word)];

			}

			if (i !== format.length - 1) {

				content += "<br>";

			}

		}

		return content;

	};

	var refresh = function() {

		var main = V("#main"),
			ci = V("#ci");

		ci.disappear();
		changing = true;

		setTimeout(function() {

			ci.html(generateCi());
			ci.appear();
			changing = false;

		}, 300);

	};

	var Control = {

		touchInit: function() {

			V("#main").on("touchend", function() {

				if (changing === false) {

					refresh();

				}

			});

		},

		shakeInit: function() {

			new Shake({

				threshold: 10,
				timeout: 1000

			}).start();

			window.addEventListener("shake", function() {

				V.cordova.screenshot(function(err, res) {

					if (!err) {

						V.cordova.alert("Success", "Screenshot Saved");

					}

				});

			});

		}

	};

	V.cordova.ready(function() {

		refresh();
		Control.touchInit();
		Control.shakeInit();
		V.cordova.hideSplashscreen();
		V("body").appear();

	});

});
