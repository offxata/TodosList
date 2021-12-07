import { extendsTodo } from "../classes/extendsTodo";

export interface ITodosListProps {
  listLable: string;
  todosList: extendsTodo[] | null;
  handleSelect(item: extendsTodo): void;
};
