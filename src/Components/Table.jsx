import React from "react";

const Table = ({ item, index }) => {
  return (
    <tr key={index}>
      <td>{item.date}</td>
      <td>{item.equipmentId}</td>
      <td>{item.location}</td>
      <td>{item.SBU}</td>
      <td>{item.equipment}</td>
      <td>{item.status}</td>
    </tr>
  );
};

export default Table;
