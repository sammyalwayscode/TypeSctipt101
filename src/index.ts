console.log("This is It");

let me: string = "Jide";
console.log(me);

const fruits: { fruitName: string; fruitQty: number; ripe: boolean } = {
  fruitName: "Mango",
  fruitQty: 234567,
  ripe: true,
};

console.log(fruits);

const superArr: (string | number | boolean | null)[] = [
  "Samuel",
  "Jacob",
  "Kunle",
  34,
  true,
  null,
];

console.log(superArr);

//Tupple
let arr2: [string, number, boolean] = ["Samuel", 30, true];

arr2.push("Jide");
console.log();

// type NewData = {
//   first: string;
//   second: number;
//   forth?: string | number;
// };

// type NewData2 = {
//   third: any[];
// };

// let nwe: NewData | NewData2 = {
//   first: "Jide",
//   second: 30,
//   third: ["Kunle", "Shade"],
//   forth: 30,
// };

type NewData = {
  first: string;
  second: number;
  forth?: string | number;
};

interface Samuel extends NewData {
  third: any[];
}

let nwe: Samuel = {
  first: "Jide",
  second: 30,
  third: ["Kunle", "Shade"],
  forth: 30,
};

const lab: string = "Codelab";

const reverse: string = lab.split("").reverse().join("");

console.log(reverse);

const newSchool = (x: string): number => {
  let xx: string[] = x.split("");
  let newFile: number = parseInt(xx.reverse().join(""));

  return newFile;
};

console.log(newSchool("1345"));

const getData = (x: any[]) => {
  let index = Math.floor(Math.random() * x.length);
  let d = x[index];
  console.log(d);
};

getData([1, 4, 6, 9, 0]);

const getData2 = <Arr>(x: Arr[]): void => {
  let index = Math.floor(Math.random() * x.length);
  let d = x[index];
  console.log(d);
};

const arr1 = [1, 4, 3, 6, 8];
const arry2 = ["Samuel", "Jide", "Peter"];

getData(arry2);
