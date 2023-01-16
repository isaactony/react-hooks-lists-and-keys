import React from "react";
import ColorItem from "./ColorItem";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const users = [
    { id: 1, firstName: "Duane", lastName: "Watson" },
    { id: 2, firstName: "Duane", lastName: "Johnson" },
  ];

  const userList = users.map((user) => {
    return <li key={user.id}>{user.firstName}</li>
  })

  
  // const colorElement = colors.map((color) => {
  //   return <li key = {color} style={{color: color}}>{color}</li> 
  // })

  const colorElement = colors.map((color) => {
    return <ColorItem key={color} style = {{color: color}} color={color} />
  })

  

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
       {colorElement}
      </ol>
      <h1>Top Users</h1>
      <ol>
        {userList}
      </ol>
    </div>
  );
}

export default ColorList;


