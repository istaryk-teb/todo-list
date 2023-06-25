import { useState } from 'react';
import { View } from 'react-native';
import { TodoItem } from '../models/todo-item';
import { firestore } from '../services/firebase';
import { TodoService } from '../services/todo.service';
import { AddTodoItemForm } from './AddTodoItemForm';
import { HeaderComponent } from './HeaderComponent';
import { TodoListComponent } from './TodoListComponent';


export function EntryComponent(): JSX.Element {

  const todoListTitle: string = 'TEB Ihor Staryk';
  const todoListSubTitle: string = 'TODO List';
  const service = new TodoService(firestore);

  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [lastAddedId, setLastAddedId] = useState<number>(todoList[todoList.length - 1]?.id || 1);

  service.getList().then((list: TodoItem[]) => {
    setTodoList(list);
  }).catch((e) => {
    console.log(e);
  });

  const handleAdd = (value: string) => {
    service.add({ title: value });
  }

  const handleRemove = (id: number) => {
    remove(id);
  }
  const handleDone = (id: number) => {
    done(id);
  }

  const add = async (item: TodoItem): Promise<void> => {
    setLastAddedId(lastAddedId + 1);
    setTodoList([
      { ...item, id: lastAddedId + 1 },
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
      <AddTodoItemForm add={handleAdd}></AddTodoItemForm>
      <HeaderComponent title={todoListTitle} subTitle={todoListSubTitle}></HeaderComponent>
      <TodoListComponent
        items={todoList}
        remove={handleRemove}
        done={handleDone}
      ></TodoListComponent>
    </View>
  )
}
