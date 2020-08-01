const bits = document.getElementsByClassName('bit');
const hex = new Array(Math.ceil(bits.length / 4)).fill(0);

const bitboard = document.getElementById('bitboard');
const chess = document.getElementById('chess');
const xiangqi = document.getElementById('xiangqi');

for (let i = 0; i < bits.length; ++i) {
	bits[i].addEventListener('click', () => {
		hex[Math.floor(i / 4)] ^= 1 << (i % 4);

		bits[i].classList.contains('active') ?
			bits[i].classList.remove('active') :
			bits[i].classList.add('active');

		zeroCounter = 0;
		bitboard.innerHTML = '0x' + (hex.reduce((str, n) => {
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
