import React, { useState } from "react";

const Home = () => {
  const [nom, setNom] = useState("");
  const [nameList, setNameList] = useState([]);

  function handleCheck(e) {}

  function handleChange(e) {
    setNom(e.target.value);
  }

  function handleClick() {
    setNameList([...nameList, nom]);
    setNom("");
    console.log(nameList);
  }

  function deleteTask(e) {
    const newList = [
      ...nameList.slice(0, e.target.id),
      ...nameList.slice(e.target.id + 1),
    ];
    setNameList(newList);
  }

  const nameAdded = nameList.map((name, index) => {
    return (
      <li key={index}>
        {index + 1 + ") " + name}{" "}
        <input type="checkbox" onChange={handleCheck} />
        <button type="button" id={index} onClick={deleteTask}>
          x
        </button>
      </li>
    );
  });

  return (
    <div>
      <label htmlFor="nom">Enter task : </label>
      <input type="text" value={nom} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        Submit
      </button>
      <ul>{nameAdded}</ul>
    </div>
  );
};

export default Home;
