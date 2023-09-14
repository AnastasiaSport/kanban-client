import React from 'react';
import Card from "./Card";

const Column = ({status, tasks, changePriority, changeTask, priorities, changeTaskStatus, deleteTask, statuses}) => {
    return (
        <div className="col">
            <h2>{status.status}</h2>
            {tasks.filter((task) => task.status === status.status).map((task) =>
                <Card task={task}
                      key={task._id}
                      changePriority={changePriority}
                      changeTask={changeTask}
                      priorities={priorities}
                      changeTaskStatus={changeTaskStatus}
                      deleteTask={deleteTask}
                      statuses={statuses}
                />
            )}
        </div>
    );
};

export default Column;