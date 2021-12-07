import {
  useEffect,
  useState
} from "react";

import { ITodo } from "./ITodo.interface";

export const useDataFromServer = () => {
  const [data, setData] = useState<ITodo[] | null>(null);

  useEffect (() => {
    const axios = require('axios').default;
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response: any) => setData(response.data))
      .catch((error: any) => console.log(error));
  }, []);

  return data;
};
