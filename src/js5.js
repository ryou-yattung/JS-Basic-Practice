import React from "react";

const js5 = () => {
  //function
  const hello = function () {
    console.log("hi");
  };
  hello();

  const say = function (message, message2) {
    //function(parameter參數) = function既變數
    console.log(message, message2);
  };
  say("人起朵你起朵", "冇人識人喎");

  //return(返回值)
  const setArea = function (width, height) {
    let area = width * height;
    console.log(area);
    return area; //將console.log(area);既數return出去
    // or return width * height;
  };
  setArea(5, 9);

  return <div></div>;
};

export default js5;
