import { StyleSheet, Text, View } from 'react-native';
import { TodoItem } from '../models/todo-item';
import { TodoItemComponent } from './TodoItemComponent';

type TodoListProps = {
  items: TodoItem[];
  done?: (id: number) => void;
  remove?: (id: number) => void;
}

export function TodoListComponent(props: TodoListProps): JSX.Element {
  return (<View style={styles.container}>{
    props.items?.length > 0
      ? (props.items || []).map((item: TodoItem) => (
        <TodoItemComponent
          key={item.id}
          title={item.title}
          isDone={item.isDone}
          remove={() => props.remove && props.remove(item.id || 1)}
          done={() => props.done && props.done(item.id || 1)}
        ></TodoItemComponent>
      ))
      : (<Text>List is empty</Text>)
  }</View>);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
});
