import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "../../data/task";

const initialState = {
    data: tasks
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        createTask: (state, action) => {
            // console.log(state, action)
            // state.push(action.payload);
            // [...state, action.payload];
            state.data = [...state.data, action.payload];
        },
        deleteTask: (state, action) => {
            const data = state.data;
            state.data = data.filter((task) => task.id !== action.payload )
            // console.log(state.data, action)
        },
        editTask: (state, action) => {
            // const index = state.data.findIndex(obj => {
            //     return obj.id === action.payload.id;
            // });
            // state.data[index] = action.payload;
            // console.log("index", index);

            const { id, title, description } = action.payload;
            const foundTask = state.data.find((task) => task.id === action.payload.id);
            if(foundTask){
                foundTask.id = id;
                foundTask.title = title;
                foundTask.description = description;
            }
            // console.log(action.payload);

            // let task = state.data.find((task) => task.id === action.payload.id);
            // console.log(task);
            // state.data[action.payload.id] = action.payload
            // console.log("editar", action.payload.id);
        }
    }
})

export const { createTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;