// custom-loader.mjs
import process from "process";
import path from "path";
import fs from "fs";

const cwd = process.cwd();

function fileExists (path) {
	try {
		if (fs.existsSync(path)) {
			return true;
		}
	}
	catch (err) {
		console.error(err);
	}
	return false;
}

function getPackageDir () {
	let p = "./";
	let ex;
	while (!(ex = fileExists(path.resolve(cwd, p, "package.json")), ex) && path.resolve(cwd, p) !== path.resolve("/")) {
		p = p === "./" ? "../" : `${p}../`;
	}
	if (ex) {
		return path.resolve(cwd, p);
	}
}


function getJSON (uri) {
	try {
		return JSON.parse(fs.readFileSync(uri, "utf8"));
	}
	catch (error) {
		return {};
	}
}

const packageDir = getPackageDir();
const pkg = getJSON(path.resolve(packageDir, "package.json"));

const getAliases = () => {
	const aliases = pkg._moduleAliases || {};

	const absoluteAliases = Object.keys(aliases).reduce((acc, key) =>
		aliases[key][0] === "/"
			? acc
			: {...acc, [key]: path.join(packageDir, aliases[key])},
	aliases);

	return absoluteAliases;

};

const isAliasInSpecifier = (path, alias) => {
	return path.indexOf(alias) === 0 && (path.length === alias.length || path[alias.length] === "/");
};

const aliases = getAliases();

export const resolve = (specifier, parentModuleURL, defaultResolve) => {
	const alias = Object.keys(aliases).find((key) => isAliasInSpecifier(specifier, key));

	const newSpecifier = alias === undefined
		? specifier
		: path.join(aliases[alias], specifier.substr(alias.length));

	return defaultResolve(newSpecifier, parentModuleURL);
};
