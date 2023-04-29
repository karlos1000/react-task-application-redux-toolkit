import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFormEdit from "./components/TaskFormEdit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        // bg-zinc-600
        <div className="h-screen">
            <div className="container mx-auto">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<TaskList />} />
                        <Route path="/create-task" element={<TaskForm />} />
                        <Route path="/edit-task/:id" element={<TaskForm />} />
                        {/* <Route path="/edit-task/:id" element={<TaskFormEdit />} /> */}
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;
