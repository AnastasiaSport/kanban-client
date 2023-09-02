import React from 'react';

const Card = ({task}) => {
    console.log(task)
    return (
        <div className="card">
            <h5 className="card-header">{task.name}</h5>
            <div className="card-body">
                <h5 className="card-title"> {task.description} </h5>
                <p className="card-text">{task.status}</p>
                <p className="card-text">Priority: {task.priority}
                    {' '}

                    <button type="button" className="btn btn-primary btn-sm"> ↑</button>
                    {' '}
                    <button type="button" className="btn btn-primary btn-sm"> ↓</button>

                </p>

                <a href="#" className="btn btn-primary">Go somewhere</a>

            </div>
        </div>
    );
};

export default Card;