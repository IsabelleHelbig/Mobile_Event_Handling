import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ToDoForm from './components/ToDoForm';

function Main(): React.JSX.Element {
  const [tasks, setTasks] = useState<string[]>([]);

  // Define the addTask function
  const addTask = (taskText: string) => {
    if (taskText != null) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <View>
      <ToDoForm addTask={addTask} />
      <Text>{tasks}</Text>
    </View>
  );
}

export default Main;
