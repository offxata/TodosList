import React, { FC } from "react";
import { Radio } from "@mui/material";

import { ITodosListProps } from "./ITodosListProps.interface";

export const TodosList: FC<ITodosListProps> = (props) => {
  const {
    listLable,
    todosList,
    handleSelect,
  } = props;

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>
            {listLable}
          </th>
        </tr>
      </thead>
      <tbody>
        {todosList?.map((todo) => (
          <tr key={todo.id}>
            <td>
              {todo.id}
            </td>
            <td>
              {todo.title}
            </td>
            <td>
              {todo.completed ? "Complited" : "In progres"}
            </td>
            <td>
              <Radio
                checked={todo.seleckted}
                onClick={() => handleSelect(todo)}
              />
            </td>
            <td
              style={{
                backgroundColor: `${todo.color}`,
                width: "50px",
                height: "50px",
                borderRadius: "50px",
              }}
            >
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}