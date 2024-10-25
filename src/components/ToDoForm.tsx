import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

type ToDoFormPropType = {
  addTask: (taskText: string) => void;
};

function ToDoForm(props: ToDoFormPropType): React.JSX.Element {
  const [taskText, setTaskText] = useState('');
  const addTask = props.addTask;

  return (
    <View>
      <TextInput
        placeholder="Add a new task..."
        onChangeText={text => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
    </View>
  );
}
const styles = StyleSheet.create({});
export default ToDoForm;
