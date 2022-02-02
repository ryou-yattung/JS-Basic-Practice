import React from "react";

const js2 = () => {
  // string 常用功能
  let userInput = "       aaaaa    ";
  console.log(userInput.trim()); //消space
  console.log(userInput.trimStart());
  console.log(userInput.trimEnd());

  let today = "2020/1/23";
  console.log(today.substring(0, 5)); //0から5まで
  console.log(today.includes("8")); //check字
  console.log(today.replace(1, 3)); //更改 1 to 3
  console.log(today.replaceAll(1, 3)); //更改All

  //   number 常用功能
  let c = 12.333;
  console.log(c.toFixed(2)); //4寫5入(2)
  console.log(Math.round(c)); //整數
  console.log(Math.random(c)); //random
  console.log(Math.round(Math.random()));

  //2D array
  let friends = [
    ["a", "tony"],
    ["b", "Tom"],
  ];
  console.log(friends[1][0]);

  friends.push("c"); //加入
  console.log(friends);

  friends.pop("c"); //移去

  //   boolean 常用功能
  let mark = 40;
  console.log(mark >= 70 && mark <= 30); // && = and
  console.log(mark >= 70 || mark <= 30); // || = or

  return <div></div>;
};

export default js2;
