//// [nullishCoalescingOperator_es2020.ts]
const aa1 = a1 ?? 'whatever';
const aa2 = a2 ?? 'whatever';
const aa3 = a3 ?? 'whatever';
const aa4 = a4 ?? 'whatever';
const aa5 = a5 ?? 'whatever';
const aa6 = a6 ?? 'whatever';
const aa7 = a7 ?? 'whatever';
const aa8 = a8 ?? 'whatever';
const aa9 = a9 ?? 'whatever';
let x1 = (a ?? b) || c;
let x2 = c || (a ?? b);
let x3 = (a ?? b) || c;
let x4 = c || (a ?? b);
let x5 = (a ?? b) || c;
let x6 = c || (a ?? b);
let y1 = (a ?? b) && c;
let y2 = c && (a ?? b);
let y3 = (a ?? b) && c;
let y4 = c && (a ?? b);
let y5 = (a ?? b) && c;
let y6 = c && (a ?? b);
