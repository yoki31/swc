export enum Test {
  A = 1 << 30, // 1073741824
  B = 1 << 31, // -2147483648
  C = (1 << 30) | (1 << 31), // -1073741824
}

const a = 1 << 30; // 1073741824
const b = 1 << 31; // -2147483648
const c = (1 << 30) | (1 << 31); // -1073741824
