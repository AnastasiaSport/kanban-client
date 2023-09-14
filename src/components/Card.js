import React from 'react';
import DeleteModal from "./DeleteModal";

const Card = ({task, changePriority, changeTask, priorities, changeTaskStatus, deleteTask, statuses}) => {

    return (
        <div className="card">
            <h5 className="card-header">{task.name}</h5>
            <div className="card-body">
                <h5 className="card-title"> {task.description} </h5>
                <p className="card-text">{task.status}</p>
                <p className="card-text">Priority: {task.priority}

                    {' '}

                    <button
                        onClick={() => changePriority(task._id, +task.priority + 1)}

                        type="button" className="btn btn-primary btn-sm"
                        disabled={task.priority === priorities[priorities.length - 1]}

                    > ↑
                    </button>
                    {' '}
                    <button
                        onClick={() => changePriority(task._id, +task.priority - 1)}
                        type="button" className="btn btn-primary btn-sm"
                        disabled={task.priority === priorities[0]}
                    > ↓
                    </button>

                </p>

                <button
                    onClick={()=>changeTaskStatus( task, 'left')}
                    type="button" className="btn btn-primary btn-sm"
                    disabled={statuses[0].title === task.status}
                > ←
                </button>

                <button
                    // onClick={()=>changeTaskStatus( task, 'right')}
                    type="button" className="danger"
                > Update
                </button>

                <DeleteModal
                task={task}
                deleteTask={deleteTask}
                />



                <button
                    onClick={()=>changeTaskStatus( task, 'right')}
                    type="button" className="btn btn-primary btn-sm"
                    disabled={statuses[statuses.length - 1].title === task.status}
                > →
                </button>








            </div>
        </div>
    );
};

export default Card;