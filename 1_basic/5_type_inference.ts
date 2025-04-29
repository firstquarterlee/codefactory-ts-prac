/**
 * Type Inference
 *
 * 타입 추론
 */

// :string 이런식으로 안적어줘도 얘가 초기화때 추론함.
// let stringType:string = "string";
let stringType = "string";
let booleanType = true;
let numberType = 30;

booleanType = false;

//booleanType = "false"; -> 에러남

const constStringType = "const string";
const constBooleanType = true;

let yuJin = {
  name: "안유진",
  age: 2003,
};

const yuJin2 = {
  name: "안유진",
  age: 2003,
};

yuJin2.name = "이니뇨";
console.log(yuJin2);

// 캐스팅라이트
const yuJin3 = {
  // 안유진을 const로한다! 구체적으로 한다!
  name: "안유진" as const,
  age: 2003 as const,
};

console.log(yuJin3.name);
console.log(yuJin2.name);

/**
 * Array
 */

let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, "4", "5", "6"];

//numbers.push(2);
const number = numbers[0];
const nos = numbersAndString[0];

// tuple -> 1과 3이 순서대로 정확하게 들어가야함.
const twoNumbers = [1, 3] as const;

//twoNumbers[0] = 10;
