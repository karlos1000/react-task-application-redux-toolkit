// import { useContext } from "react";
// import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TaskList = () => {
    // const { tasks } = useContext(TaskContext);
    const tasks = useSelector(state => state.tasks.data);
    console.log(tasks);

    return (
        <>
            <div className="grid grid-cols-2 gap-2">
                <div className="text-xl text-slate-900 font-bold "><h1>Total tareas</h1><span className="text-red-300">{tasks.length }</span></div>
                <div className="mt-5 mb-5">
                    <Link to="create-task" className="text-white bg-gray-700 hover:bg-gray-600 hover:text-white py-2 px-2 rounded text-sm mt-3">Crear Tarea</Link>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {tasks.map((task, i) => (
                    <TaskCard key={i} task={task} />
                ))}
            </div>
        </>
    );
};

export default TaskList;