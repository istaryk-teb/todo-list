import { StyleSheet, View } from 'react-native';
import { TodoItem } from '../models/todo-item';
import { TodoItemComponent } from './TodoItemComponent';

type TodoListProps = {
  items: TodoItem[];
  done?: (idx: number) => void;
  remove?: (idx: number) => void;
}

export function TodoListComponent(props: TodoListProps): JSX.Element {
  return (<View style={styles.container}>{(props.items || []).map((item: TodoItem, idx: number) => (
    <TodoItemComponent
      title={item.title}
      isDone={item.isDone}
      remove={() => props.remove && props.remove(idx)}
      done={() => props.done && props.done(idx)}
    ></TodoItemComponent>
  ))}</View>);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
});
