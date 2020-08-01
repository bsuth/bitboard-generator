#!/usr/bin/node

const fs = require('fs');
const pug = require('pug')

// -----------------------------------------------------------------------------
// CONFIG
// -----------------------------------------------------------------------------

const OUTPUT_DIR = 'public'

const CELLS = [
	// ROW 0
	['east', 'south'],
	['east', 'south', 'west'],
	['east', 'south', 'west'],
	['east', 'south', 'west'],
	['east', 'south', 'west'],
	['east', 'south', 'west'],
	['east', 'south', 'west'],
	['east', 'south', 'west'],
	['south', 'west'],

	// ROW 1
	['north', 'east', 'south'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'south', 'west'],

	// ROW 2
	['north', 'east', 'south'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'south', 'west'],
	
	// ROW 3
	['north', 'east', 'south'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'south', 'west'],

	// ROW 4
	['north', 'east', 'south'],
	['north', 'east', 'west'],
	['north', 'east', 'west'],
	['north', 'east', 'west'],
	['north', 'east', 'west'],
	['north', 'east', 'west'],
	['north', 'east', 'west'],
	['north', 'east', 'west'],
	['north', 'south', 'west'],

	// ROW 5
	['north', 'east', 'south'],
	['east', 'south', 'west'],
	['east', 'south', 'west'],
	['east', 'south', 'west'],
	['east', 'south', 'west'],
	['east', 'south', 'west'],
	['east', 'south', 'west'],
	['east', 'south', 'west'],
	['north', 'south', 'west'],

	// ROW 6
	['north', 'east', 'south'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'south', 'west'],

	// ROW 7
	['north', 'east', 'south'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'south', 'west'],
	
	// ROW 8
	['north', 'east', 'south'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'east', 'south', 'west'],
	['north', 'south', 'west'],

	// ROW 9
	['north', 'east'],
	['north', 'east', 'west'],
	['north', 'east', 'west'],
	['north', 'east', 'west'],
	['north', 'east', 'west'],
	['north', 'east', 'west'],
	['north', 'east', 'west'],
	['north', 'east', 'west'],
	['north', 'west'],
];

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------

if (!fs.existsSync(OUTPUT_DIR)) {
	process.stdout.write(`Directory not found: ${OUTPUT_DIR}, creating...`);
	fs.mkdirSync(OUTPUT_DIR);
	console.log('done');
}

process.stdout.write('Compiling pug file...');
const compile = pug.compileFile('src/index.pug');
fs.writeFileSync(`${OUTPUT_DIR}/index.html`, compile({cells: CELLS}))
console.log('done');

process.stdout.write(`Moving javascript to ${OUTPUT_DIR}...`);
fs.copyFileSync('src/script.js', `${OUTPUT_DIR}/script.js`);
console.log('done');
