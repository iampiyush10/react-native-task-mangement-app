import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TaskManagerApp = () => {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (taskText.trim()) {
      const newTask = {
        id: Date.now().toString(),
        text: taskText.trim(),
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskText('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={taskText}
          onChangeText={(text) => setTaskText(text)}
          placeholder="Enter a task"
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>
      {tasks.map((task) => (
        <View style={styles.taskContainer} key={task.id}>
          <Text style={styles.taskText}>{task.text}</Text>
          <Button
            title="Delete"
            onPress={() => handleDeleteTask(task.id)}
            color="red"
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskText: {
    flex: 1,
    marginRight: 8,
  },
});

export default TaskManagerApp;
