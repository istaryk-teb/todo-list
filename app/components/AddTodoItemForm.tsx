import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

type AddTodoItemFormProps = {
  add?: (value: string) => void;
}

export function AddTodoItemForm(props: AddTodoItemFormProps): JSX.Element {

  const [value, setValue] = useState('');
  const add = () => {
    props.add && props.add(value);
    setValue('');
  };

  return (<View style={styles.container}>
    <TextInput
      style={styles.input}
      onChangeText={setValue}
      defaultValue={value}
    placeholder={'Go for a walk.../Do smth...'}></TextInput>
    <View style={styles.buttonContainer}>
      <Button
        onPress={add}
        disabled={!value || value.length === 0}
        title={'Add'}></Button>
    </View>
  </View>);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8
  },
  input: {
    flex: 1,
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 12,
    paddingVertical: 4
  },
  buttonContainer: {
    flex: 0
  },
  button: {
    height: '100%'
  }
})
