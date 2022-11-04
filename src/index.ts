//For each of these values, what type will the TypeScript compiler infer?
//Number
let a = 100;
//String
let b = "Coffee";
//Boolean[]
let c = [true, false, false];
//{age: 20}
let d = { age: 20 };
//Number[]
let e = [3];
//Any
let f;
//Any[]
let g = [];

//What are the compilation errors in each of the following code snippets?
//No releaseYear
// let song: {
// 	title: string,
// 	releaseYear: number
//  } = { title: 'My song' };

//Elements of array should be numbers
// let prices = [100, 200, 300];
// prices[0] = '$100';

//Function returns void instead of number
// function myFunc(a: number, b: number): number { }
