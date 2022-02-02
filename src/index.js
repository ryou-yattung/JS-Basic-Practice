import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Js1 from "./js1";
import Js2 from "./js2";
import Js3 from "./js3";
import Js4 from "./js4";
import Js5 from "./js5";
import Js6 from "./js6";
import Js7 from "./js7";

ReactDOM.render(
  <React.StrictMode>
    <Js1 />
    {/*常用功能*/}
    <Js2 />
    {/*for roop*/}
    <Js3 />
    {/*While, Do-While*/}
    <Js4 />
    {/*Function, Parameter, Return*/}
    <Js5 />
    {/*Arrow Function, Callback, SetTimeout, ForEach*/}
    <Js6 />
    {/*Arrow Function, Callback, SetTimeout, ForEach*/}
    <Js6 />
  </React.StrictMode>,
  document.getElementById("root")
);
