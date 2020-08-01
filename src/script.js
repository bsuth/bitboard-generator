let bits = document.getElementsByClassName('bit');
let bitboard = document.getElementById('bitboard');
let hex = new Array(Math.ceil(bits.length / 4)).fill(0);

for (let i = 0; i < bits.length; ++i) {
	bits[i].addEventListener('click', () => {
		hex[Math.floor(i / 4)] ^= 1 << (i % 4);

		bits[i].classList.contains('active') ?
			bits[i].classList.remove('active') :
			bits[i].classList.add('active');

		zeroCounter = 0;
		bitboard.innerHTML = 'Bitboard: 0x' + (hex.reduce((str, n) => {
			if (n == 0) {
				++zeroCounter;
			} else {
				str = n.toString(16) + '0'.repeat(zeroCounter) + str;
				zeroCounter = 0;
			}

			return str;
		}, '') || '0');
	});
}
