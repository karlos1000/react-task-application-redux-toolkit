import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { TaskContextProvider } from "./context/TaskContext.jsx";
import './index.css'
import { store } from './app/store';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <TaskContextProvider> */}
                <App />
            {/* </TaskContextProvider> */}
        </Provider>
    </React.StrictMode>,
)
