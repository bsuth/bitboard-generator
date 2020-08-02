#!/usr/bin/node

const child_process = require('child_process');
const fs = require('fs');
const path = require('path');
const process = require('process');

const pug = require('pug')
const sass = require('node-sass');

// -----------------------------------------------------------------------------
// CONFIG
// -----------------------------------------------------------------------------

const OUTPUT_DIR = 'public'
const PUG_FILE = 'src/index.pug'
const SCSS_FILE = 'src/style.scss'
const JS_FILE = 'src/script.js'

// -----------------------------------------------------------------------------
// HELPERS
// -----------------------------------------------------------------------------

function compilePug() {
	process.stdout.write('Compiling pug file...');
	const compile = pug.compileFile(PUG_FILE);
	fs.writeFileSync(`${OUTPUT_DIR}/index.html`, compile());
	console.log('done');
}

function compileScss() {
	process.stdout.write('Compiling scss file...');
	child_process.execSync(`npx sass ${SCSS_FILE} ${OUTPUT_DIR}/style.css`, {
		stdio: 'pipe',
	});
	console.log('done');
}

function compileJs() {
	process.stdout.write(`Copying javascript to ${OUTPUT_DIR}...`);
	fs.copyFileSync(JS_FILE, `${OUTPUT_DIR}/${path.basename(JS_FILE)}`);
	console.log('done');
}

function watch(file, compiler) {
	console.log(`Watching ${file}`);
	return fs.watch(file, () => {
		console.log(`Change detected for ${file}, recompiling.`);
		compiler();
	});
}

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------

if (!fs.existsSync(OUTPUT_DIR)) {
	process.stdout.write(`Directory not found: ${OUTPUT_DIR}, creating...`);
	fs.mkdirSync(OUTPUT_DIR);
	console.log('done');
}


if (process.argv.includes('--watch')) {
	compilePug();
	compileScss();
	compileJs();

	console.log();

	watch(PUG_FILE, compilePug);
	watch(SCSS_FILE, compileScss);
	watch(JS_FILE, compileJs);
} else {
	compilePug();
	compileScss();
	compileJs();
}
