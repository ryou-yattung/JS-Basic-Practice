import React from "react";

const js3 = () => {
  //     for roop
  for (let i = 0; i <= 10; i++) {
    console.log(`log第${i}次`);
  }

  let fds = ["a", "b", "c", "d", "e"];
  for (let f = 0; f < fds.length; f++) {
    if (fds[f] == "d") {
      continue; //繼續 --姐話SKIP咗"d" > 繼續
    } else if (fds[f] == "b") {
      console.log(`f is ID${f}`);
      break; // break --完全停止 行下面log
    }

    console.log(`My friends ID:${f} : ${fds[f]}`);
  }

  return <div></div>;
};

export default js3;
