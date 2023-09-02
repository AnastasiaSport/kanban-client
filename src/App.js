import './App.css';
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'

import axios from 'axios';
import column from "./components/Column";
import Column from "./components/Column";

function App() {

    const [tasks, setTasks] = useState([])
    const [statuses, setStatuses] = useState(['To Do', 'In progress', 'Review', 'Done'])
    const getTasks = () => {
        axios.get('http://localhost:3000/tasks')
            .then((res) =>
                setTasks(res.data)
            )
            .catch((error) =>
                console.log(error)
            )
    }



    const getExampleFromServer = () => {
        axios.post('http://localhost:3000/tasks', {
            name: 'Learn Express JS',
            description: 'React JS',
            priority: 1,
            status: 'In progress'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(function () {
                console.log('Get is done')
            });
    }
    useEffect(() => {
        getExampleFromServer()
        getTasks()
    }, [])

    return (
        <div className="App">
            <h1>Kanban Board</h1>
            <div className="container text-center">
                <div className="row align-items-start">
                    {statuses.map((status) =>
                        <Column status={status}
                                tasks={tasks}

                        />
                    )}

                </div>
            </div>
        </div>
    );
}

export default App;
