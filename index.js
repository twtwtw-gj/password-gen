const SIZE = 16;

const codeList = [...Array(26)].map((_, i) => i + "a".codePointAt(0));
const alphabets = codeList.map((i) => String.fromCharCode(i)).join("");

const numbers = [...Array(10)].map((_, i) => i).join("");

const charString = alphabets + alphabets.toUpperCase() + numbers;
console.log("パスワード文字候補:", charString);

const charGen = () => {
  const randomInt = () => Math.floor(Math.random() * charString.length);

  return charString[randomInt()];
};

const result = [...Array(SIZE)].map(() => charGen()).join("");
console.log("パスワード:", result);
