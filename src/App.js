import './App.css';
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'

import axios from 'axios';
import Column from "./components/Column";
import CreateModal from "./components/CreateModal";

function App() {

    const [tasks, setTasks] = useState([])
    const [statuses, setStatuses] = useState(['To Do', "In progress", "Review", 'Done'])
    const [priorities, setPriorities] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const createTask = (newTask) => {
    axios.post(`https://expressjs-server.vercel.app/tasks`, newTask)
        .then(res =>
        getTasks()
        )
        .catch(error => alert('Cannot create task'))
    }

    const deleteTask = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
            .then(res =>
                getTasks()
            )
            .catch(error => alert('Cannot delete'))
    }


    const changeTaskStatus = (task, direction) => {
        const newStatusesStringArray = statuses.map((status) => status.status)
        const currentStatusIndex = newStatusesStringArray.indexOf(task.status)
        const newStatusIndex = currentStatusIndex + (direction === 'right' ? +1 : -1)
        const newStatus = newStatusesStringArray[newStatusIndex]
        axios.patch(`https://expressjs-server.vercel.app/tasks/${task._id}`, {
            status: newStatus
        })
            .then(res =>
                getTasks())
            .catch(error => alert('Failed')
            )
    }

    const changePriority = (id, priority) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {
            priority
        })
            .then(res =>
                getTasks())
            .catch((error) =>
                console.log(error)
            )
    }

    const changeTask = (id, updatedTask) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, updatedTask)
            .then((res) =>
                getTasks())
            .catch((error) =>
                alert('Failed')
            )
    }

    const getTasks = () => {
        axios.get('https://expressjs-server.vercel.app/tasks')
            .then((res) =>
                setTasks(res.data)
            )
            .catch((error) =>
                console.log(error)
            )
    }

    const getStatuses = () => {
        axios.get('https://expressjs-server.vercel.app/statuses')
            .then((res) =>
                setStatuses(res.data)
            )
            .catch((error) =>
                console.log(error))
    }


    const createStatus = (newStatus) => {
        axios.post('https://expressjs-server.vercel.app/statuses', newStatus)
            .then(function (response) {
                getStatuses();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(function () {
                console.log('Get is done')
            });
    }
    useEffect(() => {
        getTasks()
        getStatuses()
    }, [])

    return (
        <div className="App">
            <h1>Kanban Board</h1>
            <CreateModal
                statuses={statuses}
                priorities={priorities}
                createTask={createTask}
            />

            <div className="container text-center">
                <div className="row align-items-start">
                    {statuses.map((status) =>
                        <Column status={status}
                                tasks={tasks}
                                changePriority={changePriority}
                                key={status._id}
                                changeTask={changeTask}
                                priorities={priorities}
                                changeTaskStatus={changeTaskStatus}
                                deleteTask={deleteTask}
                                statuses={statuses}

                        />
                    )}

                </div>
            </div>
        </div>
    );
}

export default App;
