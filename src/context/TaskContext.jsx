import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);

    const createTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((taskF) => taskF.id !== taskId));
    };

    useEffect(() => {
        setTasks(data);
    }, []);

    let params = {
        tasks,
        createTask,
        deleteTask,
    };

    return (
        <TaskContext.Provider value={params}>{props.children}</TaskContext.Provider>
    );
};