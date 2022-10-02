import React from "react";
import { StatusButton } from "./Button";

const Table = ({ item, index }) => {
  return (
    <tr key={index}>
      <td>{item.date}</td>
      <td>{item.equipmentId}</td>
      <td>{item.location}</td>
      <td>{item.SBU}</td>
      <td>{item.equipment}</td>
      <td>
        <StatusButton variant={item.status}>{item.status}</StatusButton>
      </td>
    </tr>
  );
};

export default Table;
