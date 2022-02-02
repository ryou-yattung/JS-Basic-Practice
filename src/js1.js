function App() {
  // 變數(variable) + string
  let age = "10";
  let name = "tony";
  console.log(age, name);

  age = "20";
  console.log(age);

  //  常數(constant) 不變
  const place = "香港";
  console.log(place);
  //  -- place = "USA";<<<< error

  // 數字(number)
  let num = 10;
  console.log(num);

  // 布林值(boolean)
  let isGoodTeacher = true;

  // null
  let a = null;

  // undefined
  let b = undefined;

  // Array
  let hobbies = ["football", "game", "swim"];
  console.log(hobbies);

  // Object
  let person = { name: "tony", age: "10", hobbies: "game" };
  console.log(`my name is${person.name}, I am ${person.age} year old`);

  return <div className="App"></div>;
}

export default App;
