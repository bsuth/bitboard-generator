Bitboard Generator
==================

Bitboard Generator is a small web utility to help me manage
[bitboards](https://en.wikipedia.org/wiki/Bitboard) while working on the
[serpentine](https://github.com/bsuth/serpentine-core) project. It was
originally developed just for [Xiangqi](https://en.wikipedia.org/wiki/Xiangqi),
but extended to Chess as well for fun.

You may use it online [here](https://bsuth.github.io/bitboard-generator/).

Bitboard Generator uses [Pug](https://pugjs.org/api/getting-started.html)
templates for HTML and [Sass](https://sass-lang.com/)(Scss) for styling.

Building
--------

Bitboard Generator uses [Parcel](https://parceljs.org/) to build the production
files. You can build the project using:

```bash
# Clone repo
git clone https://github.com/bsuth/bitboard-generator/
cd bitboard-generator

# Install dependencies, build project
npm install
npm run build
```

You can also start the Parcel development server using ```npm run dev```.
