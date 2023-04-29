// import { useContext } from 'react';
// import {TaskContext} from '../context/TaskContext'
import { useDispatch } from "react-redux";
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from "react-router-dom";

const TaskCard = ({task}) => {
    // const {deleteTask} = useContext(TaskContext);
    const dispatch = useDispatch();

    return (
        <div className='bg-gray-800 text-white p-3 rounded'>
            <h1 className='text-lg font-bold capitalize'>{task.title}</h1>
            <p className='text-gray-300 text-sm'> - {task.description}</p>
            <div className='text-right grid grid-cols-2 gap-2 '>
                {/* <button onClick={ () => dispatch(editTask(task.id))} className='text-white bg-gray-500 hover:bg-gray-600 hover:text-white py-2 px-2 rounded text-sm mt-3'>Editar</button> */}
                <Link to={`/edit-task/${task.id}`} className='text-center text-white bg-gray-500 hover:bg-gray-600 hover:text-white py-2 px-2 rounded text-sm mt-3' >Editar</Link>
                <button onClick={ () => dispatch(deleteTask(task.id))} className='text-white bg-red-500 hover:bg-red-600 hover:text-white py-2 px-2 rounded text-sm mt-3'>Eliminar</button>
            </div>
        </div>
    );
};

export default TaskCard;