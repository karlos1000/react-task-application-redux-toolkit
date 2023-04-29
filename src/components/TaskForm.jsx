// import { useState, useContext } from "react";
import { useState, useEffect } from "react";
// import { TaskContext } from "../context/TaskContext";
import { useSelector, useDispatch } from 'react-redux';
import { createTask, editTask } from '../features/tasks/taskSlice'
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
// import uuid from "uuid";
import { v4 as uuidv4 } from 'uuid';

const TaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [edit, setEdit] = useState(false);
    const [hiddenForm, setHiddenForm] = useState(false);

    // const { createTask, tasks } = useContext(TaskContext);
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { id } = useParams();
    const location = useLocation();

    useEffect(() => {
        console.log(id);

        // if(typeof id !== "undefined"){
        if (location.pathname.search("edit-task") > 0) {
            // let task = tasks.data.find((task) => task.id === Number(id));
            let task = tasks.data.find((task) => task.id == id);
            if (task) {
                setTitle(task.title);
                setDescription(task.description);
                setEdit(true);
            } else {
                setHiddenForm(true);
            }
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(edit, id);
        // return false;

        let idU = uuidv4();
        let newTask = {
            id: (edit) ? id : idU,
            title: title,
            description: description,
        };
        // console.log(newTask);

        if (edit) {
            dispatch(editTask(newTask))
        } else {
            dispatch(createTask(newTask))
        }
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
            {hiddenForm ? (
                <div>
                    <h1>No se encuentra la tarea</h1>
                    <Link to="/" className="text-white bg-gray-700 hover:bg-gray  -600 hover:text-white py-2 px-2 rounded text-sm mt-3">Regresar</Link>
                </div>
            ) : (
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
            )
            }
        </>
    );
};

export default TaskForm;
