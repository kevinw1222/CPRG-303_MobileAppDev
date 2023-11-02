/**
 * Lab2 - Layout Components
 *
 * @format
 */

import React from 'react';
import {ScrollView, Pressable, Text, StyleSheet} from 'react-native';

export default function ToDoList({tasks}) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable
          key={index}
          style={task.completed ? styles.completed : styles.task}>
          <Text style={styles.taskText}>{task.text}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});
