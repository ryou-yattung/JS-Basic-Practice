import React from "react";

const js7 = () => {
  //Object
  let classA = {
    name: "wd2a",
    student: 20,
    age: 21,
    isGoodTeacher: "true",
    blog: ["aaaaaaaaaa", "bbbbbbbbbb", "ccccccccccc"],
    login() {
      console.log("ok");
    },
    logout() {
      console.log("not ok");
    },
    listBlog() {
      console.log(this.student); //this object`s student
    },
  };
  //read
  console.log(classA.name);
  //or
  console.log(classA["name"]);

  // ****変数要用[]
  let getClassName = "name";
  console.log(classA[getClassName]);

  //Object function
  classA.login();

  //更新資料
  classA.age = 10;
  console.log(classA.age);

  //this log
  classA.listBlog();

  return <div></div>;
};

export default js7;
