import { ITodo } from "../hooks/ITodo.interface";

export class extendsTodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  seleckted: boolean = false;
  color: string = "";

  constructor(data: ITodo) {
    this.id = data.id;
    this.userId = data.userId;
    this.title = data.title;
    this.completed = data.completed;
  };

  getSeleckted() {
    this.seleckted = true;
  };
  getUnSeleckted() {
    this.seleckted = false;
  };
  addColor(color: string) {
    this.color = color;
  };
  removeColor() {
    this.color = "";
  };
};
