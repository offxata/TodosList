import React, {
  FC,
  useEffect,
  useState
} from "react";

import { useDataFromServer } from "./hooks/useTodosFromServer";
import { TodosList } from "./todosList/TodosList"
import { extendsTodo } from "./classes/extendsTodo";
import { colors } from "./app.config";

const App: FC = () => {
  const [todosList, setTodosList] = useState<extendsTodo[] | null>(null);
  const [selectedTodosList, setSelectedTodosList] = useState<extendsTodo[]>([]);
  const data = useDataFromServer();

  useEffect( () => {
    if (data) {
      const extendsData = data.map((item) => (new extendsTodo(item)));
      setTodosList(extendsData);
    }
  }, [data]);

  const handleSelect = (item: extendsTodo) => { 
    const addSelectedTodo = () => {
      if (selectedTodosList.length >= 5) return null
      let color: string | undefined = colors.pop();

      if (color) {
        item.addColor(color);
      }
      item.getSeleckted();

      setSelectedTodosList([...selectedTodosList, item]);
    };

    const removeSelectedTodo = () => {
      if (item.color) {
        colors.push(item.color);
      };
      item.removeColor();
      item.getUnSeleckted();
      const filteredSelectedTodoList = selectedTodosList.filter((todo) => (
        todo !== item
      ));
      
      setSelectedTodosList(filteredSelectedTodoList);
    };
    console.log(item)
    item.seleckted ? removeSelectedTodo() : addSelectedTodo();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }}
    >
      <TodosList
        listLable={"List of todos"}
        todosList={todosList}
        handleSelect={handleSelect}
      />
      <TodosList
        listLable={"List of selected todos"}
        todosList={selectedTodosList}
        handleSelect={handleSelect}
      />
    </div>
  );
}

export default App;
