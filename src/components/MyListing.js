import React, { Component } from "react";

function Listing(props) {
  let myCollection = props.myCollection || [1, 2, 3, 4, "Job"];
  let myList = props.myCollection || "";

  function iGotId(id) {
    alert("Hooray, I got id ", id);
  }
  function createButton(id) {
    return (
      <button onClick={() => console.log("Id provided " + id)}>Update</button>
    );
  }

  if (myCollection !== "" || undefined) {
    myList = myCollection.map((ele, index) => (
      <li key={index}>
        {ele}
        <span>{ele === "Job" && createButton(index)}</span>
      </li>
    ));
  }
  // The data recieved would be like array of objects where the properties of object on that array are:
    id:
  return (
    <div>
      <h3>Sample List</h3>
      <ul>{myList}</ul>
    </div>
  );
}

export default Listing;
