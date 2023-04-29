// import { useState, useContext } from "react";
import { useState } from "react";
// import { TaskContext } from "../context/TaskContext";
import { useSelector, useDispatch } from 'react-redux';
import { createTask } from '../features/tasks/taskSlice'
import { Link, useNavigate } from "react-router-dom";

const TaskFormEdit = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // const { createTask, tasks } = useContext(TaskContext);
    const tasks = useSelector((state) => state.tasks);
    const dispatch  = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTask = {
            id: tasks.length,
            title: title,
            description: description,
        };
        dispatch(createTask(newTask))
        // createTask(newTask);
        setTitle("");
        setDescription("");
        navigate("/");
    };

    // clases
    const inputTextCss =
        "placeholder:text-slate-400 bg-white w-full border border-slate-300 rounded-md p-2 mb-1 shadow-sm focus:outline-none focus:border-slate-100 focus:ring-slate-400 focus:ring-1 sm:text-sm";

    return (
        // bg-neutral-100
        <>
            <div className="mt-5 mb-5">
                <Link to="/" className="text-white bg-gray-700 hover:bg-gray  -600 hover:text-white py-2 px-2 rounded text-sm mt-3">Ver Tareas</Link>
            </div>
            <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className=" p-10 mb-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Escribe tu tarea"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            autoFocus
                            className={inputTextCss}
                        />
                    </div>

                    <div>
                        <textarea
                            cols="30"
                            rows="4"
                            placeholder="Escribe tu descripcion de la tarea"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            className={inputTextCss}
                        ></textarea>
                    </div>

                    <button className=" text-white bg-gray-700 hover:bg-gray-600 font-bold py-2 px-4 rounded">
                        Aceptar
                    </button>
                </form>
            </div>
        </>
    );
};

export default TaskFormEdit;
