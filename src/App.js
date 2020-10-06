import React from "react";
import "./styles.css";

const Cities = [
  "relativeListItem1",
  "relativeListItem2",
  "relativeListItem3",
  "relativeListItem4",
  "relativeListItem5",
  "relativeListItem6"
];
const getCity = Cities.map((el) => <li key={el.toString()}>{el}</li>);
export default function App() {
  return (
    <div>
      <ol>{getCity}</ol>
    </div>
  );
}
