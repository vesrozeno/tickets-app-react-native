import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

// import todayImage from "../../assets/imgs/today.jpg";
import commonStylesteste from "./commonStylesteste";
import Icon from "react-native-vector-icons/FontAwesome";
import AddTask from "./AddTask";
import Task from "./Task";

export default class TaskList extends Component {
  state = {
    showDoneTasks: true,
    visibleTasks: [],
    showAddTask: false,
    tasks: [
      {
        id: Math.random(),
        desc: "Comprar Livro História",
        estimateAt: new Date(),
        doneAt: null,
      },
      {
        id: Math.random(),
        desc: "Beber água",
        estimateAt: new Date(),
        doneAt: null,
      },
    ],
  };
  toggleTask = (taskId) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    });
    this.setState({ tasks: tasks }, this.filterTasks);
  };
  toggleFilter = () => {
    this.setState(
      { showDoneTasks: !this.state.showDoneTasks },
      this.filterTasks
    );
  };
  componentDidMount = () => {
    this.filterTasks();
  };
  filterTasks = () => {
    let visibleTasks = null;
    if (this.state.showDoneTasks) {
      visibleTasks = [...this.state.tasks];
    } else {
      const pending = (task) => task.doneAt === null;
      visibleTasks = this.state.tasks.filter(pending);
    }
    this.setState({ visibleTasks });
  };
  getColor = () => {
    // switch (this.props.daysAhead) {
    //   case 0:
    //     return commonStylesteste.colors.today;
    //   case 1:
    //     return commonStylesteste.colors.tomorrow;
    //   case 7:
    //     return commonStylesteste.colors.week;
    //   default:
    //     return commonStylesteste.colors.month;
    // }
  };
  addTask = (task) => {
    const tasks = [...this.state.tasks, task];
    this.setState({ tasks: tasks }, this.filterTasks);
  };
  render() {
    const today = 0;
    return (
      <View style={styles.container}>
        <AddTask
          isVisible={this.state.showAddTask}
          onCancel={() => this.setState({ showAddTask: false })}
          onSave={this.addTask}
        ></AddTask>
        <View style={styles.iconBar}>
          <TouchableOpacity onPress={this.toggleFilter}>
            <Icon
              name={this.state.showDoneTasks ? "eye" : "eye-slash"}
              size={25}
              color={commonStylesteste.colors.secondary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleBar}>
          <Text style={styles.title}>Hoje</Text>
          <Text style={styles.subtitle}>{today}</Text>
        </View>
        <View style={styles.taskList}>
          <FlatList
            data={this.state.visibleTasks}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <Task {...item} onToggleTask={this.toggleTask} />
            )}
          />
          <TouchableOpacity
            style={[styles.addButton, { backgroundColor: this.getColor() }]}
            activeOpacity={0.7}
            onPress={() => this.setState({ showAddTask: true })}
          >
            <Icon
              name="plus"
              size={20}
              color={commonStylesteste.colors.secondary}
            ></Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
//styles de TaskList.js

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  taskList: {
    flex: 7,
  },
  titleBar: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: commonStylesteste.fontFamily,
    color: commonStylesteste.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: commonStylesteste.fontFamily,
    color: commonStylesteste.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
  iconBar: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "flex-end",
    marginTop: Platform.OS === "ios" ? 40 : 40,
  },
  addButton: {
    position: "absolute",
    right: 30,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
