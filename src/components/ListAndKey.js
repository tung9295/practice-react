import React from "react";

export default function ListAndKey(props) {
  const { list } = props;
  return (
    <div>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}
