import React from "react";
import "./styles.css";

const Relatives = [
  "Shubham",
  "Adarsh",
  "Rishiraj",
  "Omprakash",
  "Khushabu",
  "Shreya"
];
export default function App() {
  return (
    <div>
      <ol key="relativeList">
        {Relatives.map((relative, index) => (
          <li key={`relativeListItem ${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
}
