#!/usr/bin/env node
/* global __dirname, __filename */
const process = require("process");
const path = require("path");
const fs = require("fs-extra");
const mainModule = require.main.filename;
const isMain = mainModule === __filename;
const importModule = require("esm")(module, {cjs: true, mode: "auto", cache: false}, {cache: false});

importModule("@babel/register")({root: path.resolve(__dirname, "..")});
importModule("@babel/polyfill");

importModule("module-alias/register");

if (process.env.NODE_ENV === "test") {
	const tape = importModule("tape");
	tape.onFinish(async () => {
		await fs.mkdirs(path.resolve(process.cwd(), "./coverage"));
		await fs.writeFile(path.resolve(process.cwd(), "./coverage/coverage.json"), JSON.stringify(global.__coverage__ || {}), "utf-8");
	});
}


const findValue = (arr, fn) => {
	for (let i = 0; i < arr.length; i++) {
		const res = fn(arr[i], i);
		if (res != null) {
			return res;
		}
	}
};

function getArg (items) {
	const argv = process.argv.slice(2, process.argv.length);
	let i = 0;
	let indexed = 0;
	const params = {};
	while (i < argv.length) {
		const arg = argv[i];
		if (arg.match(/^-{1,2}[^\s]+/)) {
			params[arg.replace(/^-{1,2}/, "")] = argv[i + 1];
			i += 2;
		}
		else {
			params[indexed] = arg;
			indexed++;
			i++;
		}
	}
	return findValue(items, item => params[item]);
}

const script = getArg(["s", "script", ...(isMain ? [0] : [])]);

if (script) {
	module.exports = importModule(path.resolve(process.cwd(), script));
}
else {
	module.exports = importModule;
}
