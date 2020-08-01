// -----------------------------------------------------------------------------
// VARIABLES / STATE
// -----------------------------------------------------------------------------

let selectors, boards, activeBoard, bitboard, bits, hex;

// -----------------------------------------------------------------------------
// BITBOARD
// -----------------------------------------------------------------------------

function bitClick(i) {
	let bit = bits[i], zeroCounter = 0;

	hex[Math.floor(i / 4)] ^= 1 << (i % 4);

	bit.classList.contains('active') ?
		bit.classList.remove('active') :
		bit.classList.add('active');

	bitboard.innerHTML = '0x' + (hex.reduce((str, n) => {
		if (n == 0) {
			++zeroCounter;
		} else {
			str = n.toString(16) + '0'.repeat(zeroCounter) + str;
			zeroCounter = 0;
		}

		return str;
	}, '') || '0');
}

function resetBitboard() {
	if (bits) {
		for (let i = 0; i < bits.length; ++i) {
			bits[i].onclick = null;
			bits[i].classList.remove('active');
		}
	}

	bits = activeBoard.getElementsByClassName('bit');
	hex = new Array(Math.ceil(bits.length / 4)).fill(0);
	bitboard.innerHTML = '0x0';

	for (let i = 0; i < bits.length; ++i)
		bits[i].onclick = () => bitClick(i);
}

// -----------------------------------------------------------------------------
// BOARD SELECT
// -----------------------------------------------------------------------------

function boardToggle(event) {
	for (let i = 0; i < selectors.length; ++i)
		selectors[i].classList.remove('active');
	event.target.classList.add('active');

	let newActiveBoard = event.target.dataset.board;

	for (let board of boards) {
		if (board.id == newActiveBoard) {
			// only reset bitboard if board is actually new
			if (board != activeBoard) {
				activeBoard = board;
				board.style.display = 'grid';
				resetBitboard();
			}
		} else {
			board.style.display = 'none';
		}
	}
}

// -----------------------------------------------------------------------------
// ON LOAD
// -----------------------------------------------------------------------------

window.addEventListener('load', () => {
	selectors = document.getElementsByClassName('selector');
	boards = document.getElementsByClassName('board');
	activeBoard = boards[0];
	bitboard = document.getElementById('bitboard');

	for (let i = 0; i < selectors.length; ++i)
		selectors[i].addEventListener('click', boardToggle);
	selectors[0].classList.add('active');

	resetBitboard();
});

