// this is an array buffer

const a = new ArrayBuffer(6);
console.log(a);
// a series of zero's

// view is 8 bits of memory
const a8 = new Uint8Array(a);
a8[0] = 45;
console.log(a);

a8[2] = 45;
console.log(a);

// view is a 16 bit array
const a16 = new Uint16Array(a);
console.log(a);

// setting this in position 2
a16[2] = 0x4545;
console.log(a);
