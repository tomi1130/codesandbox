const func2 = (str) => str;
console.log(func2("ああああああ"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));
const mypro = {
  name: "kaa",
  age: 28
};

// const messeage1 = `名前は${mypro.name}です。年齢は${mypro.age}です`;
// console.log(messeage1);

// const{name,age} = mypro;
const messeage2 = `名前は${name}です。年齢は${age}です`;
console.log(messeage2);

const myPro1 = ["jargh", 28];

const message3 = `名前は${myPro1[0]}`;
console.log(message3);

const [name, age] = myPro1;
const message4 = `名前は${name}です`;
console.log(message4);
