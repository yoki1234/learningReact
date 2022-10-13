import React from "react";
// import Person from "./components/Person";
import PersonFeat from "./PersonFeat";

function NameList() {
  const names = ['Bruce','Clark','Diana']
  const person = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "TypeScript",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Angular and vue",
    },
  ];
  const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;
