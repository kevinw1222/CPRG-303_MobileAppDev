/**
 * Lab 4 - Event Handling & State Lifting
 * GitHub: https://github.com/kevinw1222/CPRG-303_MobileAppDev/tree/main
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ToDoList({tasks}) {
  return (
    <View>
      <Text style={styles.headerText}>Your Tasks:</Text>
      {tasks.map((task, index) => (
        <Text
          key={index}
          className="incomplete"
          style={
            (styles.task, task.completed && styles.completed, styles.taskText)
          }>
          {task}
        </Text>
      ))}
    </View>
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
  },
  taskText: {
    fontSize: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});
