import React from "react";

const js8 = () => {
  //Document Ojbect Model (DOM)
  const section = document.querySelector("div");
  console.log(section);

  //Event
  const clickTest = (e) => {
    console.log(e.target);
    //     e.target.remove();
    e.target.style.fontSize = "5rem";
  };

  class Player {
    constructor(fullName, age, gender, hairColor) {
      this.fullName = fullName;
      this.age = age;
      this.gender = gender;
      this.hairColor = hairColor;
    }
    toString() {
      return "Name: " + this.fullName + ", Age:" + this.age;
    }
  }
  const inori = new Player("Inori", 16, "girl", "pink");
  console.log(inori.toString());

  return (
    <div>
      <h1>basic js</h1>
      <p>text1</p>
      <p>text2</p>
      <button className="p-2 bg-red-400" onClick={clickTest}>
        fontSize
      </button>
    </div>
  );
};

export default js8;
