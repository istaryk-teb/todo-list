import { useState } from 'react';
import { View } from 'react-native';
import { TodoItem } from '../models/todo-item';
import { AddTodoItemForm } from './AddTodoItemForm';
import { HeaderComponent } from './HeaderComponent';
import { TodoListComponent } from './TodoListComponent';


export function EntryComponent(): JSX.Element {

  const todoListTitle: string = 'TEB Ihor Staryk';
  const todoListSubTitle: string = 'TODO List';
  const [todoList, setTodoList] = useState<TodoItem[]>([{
    id: 1,
    title: 'todo item #1',
    isDone: false
  }, {
    id: 2,
    title: 'todo item #2',
    isDone: false
  }, {
    id: 3,
    title: 'todo item #3',
    isDone: false
  }]);
  let lastAddedId: number = todoList[todoList.length - 1].id || 1;

  const onAddClick = (value: string) => {
    add({ title: value });
  }

  const onRemoveClick = (idx: number) => {
    remove(todoList[idx].id || 1);
  }
  const onDoneClick = (idx: number) => {
    done(todoList[idx].id || 1);
  }

  const add = async (item: TodoItem): Promise<void> => {
    setTodoList([
      { ...item, id: lastAddedId++ },
      ...todoList
    ]);
  }

  const edit = async (id: number, item: TodoItem): Promise<void> => {
    const copyOfTodoList = [...todoList];
    const editableIndex: number = copyOfTodoList.findIndex((i) => i.id === id);
    if (editableIndex !== -1) {
      const editableElement: TodoItem = { ...copyOfTodoList[editableIndex] };
      copyOfTodoList.splice(editableIndex, 1, {
        ...editableElement,
        ...item
      });
      setTodoList(copyOfTodoList);
    }
  }

  const done = async (id: number): Promise<void> => {
    return edit(id, { isDone: true });
  }

  const remove = async (id: number): Promise<void> => {
    const copyOfTodoList = [...todoList];
    const editableIndex: number = copyOfTodoList.findIndex((i) => i.id === id);
    if (editableIndex !== -1) {
      copyOfTodoList.splice(editableIndex, 1);
      setTodoList(copyOfTodoList);
    }
  }

  return (
    <View>
      <AddTodoItemForm add={onAddClick}></AddTodoItemForm>
      <HeaderComponent title={todoListTitle} subTitle={todoListSubTitle}></HeaderComponent>
      <TodoListComponent
        items={todoList}
        remove={onRemoveClick}
        done={onDoneClick}
      ></TodoListComponent>
    </View>
  )
}
