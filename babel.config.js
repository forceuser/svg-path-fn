const browserslist = require("browserslist");
const process = require("process");

module.exports = function (api) {
	const env = api.env();
	let envObject;
	if (typeof env === "string" && env.startsWith("{")) {
		envObject = JSON.parse(env);
		envObject.BROWSERSLIST_ENV = envObject.BROWSERSLIST_ENV || process.env.BROWSERSLIST_ENV;
		envObject.BABEL_ENV = envObject.BABEL_ENV || process.env.BABEL_ENV || process.env.NODE_ENV;
		envObject.NODE_ENV = envObject.NODE_ENV || process.env.NODE_ENV;
	}

	const isEnv = test => ([].concat(test)).some(item => envObject ? envObject.babel === item : env === item);
	const config = {
		"presets": [
			["@babel/preset-env", {
				"modules": false,
				"useBuiltIns": "usage",
				"corejs": "3",
				targets: browserslist(null, {env: envObject ? envObject.BROWSERSLIST_ENV : undefined}),
			}],
		],
		"plugins": [
			"@babel/plugin-syntax-dynamic-import",
			"@babel/plugin-syntax-import-meta",
		],
	};
	if (isEnv(["test"])) {
		Object.assign(config, {
			generatorOpts: {
				sourceMaps: "inline",
				shouldPrintComment: () => true,
				compact: true,
				minified: false,
				retainLines: true,
			},
		});
		config.plugins.push(["istanbul", {
			"useInlineSourceMaps": true,
			"exclude": ["test/**/*", "utils/**/*"],
		}]);
	}
	return config;
};
