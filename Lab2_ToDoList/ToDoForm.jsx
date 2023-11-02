/**
 * Lab2 - Layout Components
 *
 * @format
 */

import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

export default function ToDoForm({addTask}) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    addTask({text: newTask, completed: false});
    setNewTask('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={newTask}
        onChangeText={text => setNewTask(text)}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
