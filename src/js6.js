import React from "react";

const js6 = () => {
  //Arrow Function
  //如果得1行CODE 唔使用{}
  const hi = () => console.log("dddd");
  hi();

  //callback function = 功能:保證功能係特定條件先做
  const h2 = (callback) => {
    //function裹面既function
    callback();
  };
  h2(() => console.log("hiiiiii"));

  //allback function例　+ setTimeOut
  setTimeout(() => console.log("hiiiiiiiiid"), 4000);
  console.log("aaa");
  console.log("bbb");

  //allback function例　+ forEach
  //forEach = 配列の各要素に対して一度ずつ実行する
  let webLanguage = ["php", "js", "html", "css"];
  webLanguage.forEach((element) => {
    console.log(element);
  });

  return <div></div>;
};

export default js6;
