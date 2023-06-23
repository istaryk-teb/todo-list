import { Button, StyleSheet, Text, View } from 'react-native';
import { TodoItem } from '../models/todo-item';

type TodoItemProps = {
  remove?: () => void,
  done?: () => void
} & TodoItem;

export function TodoItemComponent(props: TodoItemProps): JSX.Element {

  const remove = () => {
    props.remove && props.remove();
  }
  const done = () => {
    props.done && props.done();
  }

  return (<View style={styles.container}>
    <Text style={[
      styles.title,
      props.isDone ? styles.done : {}
    ]}>{props.title}</Text>
    {!props.isDone && (<Button
      color={'#339933'}
      onPress={done}
      title={'Done'}></Button>)}
    <Button
      color={'#dd3333'}
      onPress={remove}
      title={'Remove'}></Button>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: '#ddd',
  },
  title: {
    flex: 1,
    fontSize: 16
  },
  done: {
    color: '#ddd'
  }
});
