/**
 * Type and Interface
 */

/**
 * Type
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */

type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

// 유니언 | -> 이것 또는 이것.
type MaleOrFemale = "male" | "female";

const stringVar: NewStringType = "test";

// 객체
type IdolType = {
  name: string;
  year: number;
};

const yuJin: IdolType = {
  name: "안유진",
  year: 2002,
};

/**
 * Interface
 *
 * 인터페이스랑 타입이 비슷하다.
 * 인터페이스가 먼저 생겨남,,, 그 이후 타입이 생겨남
 */
interface IdolInterface {
  name: string;
  year: number;
}

const yuJin2: IdolInterface = {
  name: "안유진",
  year: 2002,
};

interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}

const yuJin3: IdolIT = {
  name: "안유진",
  year: 2002,
};

// ?(옵셔널) 넣어두되고 안넣어두되고~
interface IdolOptional {
  name: string;
  year?: number;
}

const yuJin4: IdolOptional = {
  name: "안유진",
  //year: 2002,
};
