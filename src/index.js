import React from 'react';
import { render } from 'react-dom';

class TaskApp extends React.Component {
    render() {
        return (
            <div>
                <Tasklist/>
            </div>

        )
    }
}

class Tasklist extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            tasks : [
                {
                    id: 1,
                    description: 'Se lever',
                    complete: true

                },
                {
                    id: 2,
                    description: 'réviser',
                    complete: true

                },
                {
                    id: 3,
                    description: 'Dormir',
                    complete: false

                }
            ]
        };

    }
    
    render() {
        const incompleteTasks = this.state.tasks.filter(task=>task.complete );
        const completeTasks = this.state.tasks.filter(task=>!task.complete );

        return (
            
            <div>
                <h1> All Task</h1>
                {this.state.tasks.map(task =><Task key={task.id} task={task} />)}

                <h1> incomplete Task</h1>
                {incompleteTasks.map(task => <Task key={task.id} task={task} />)}
                <h1> complete Task</h1>
                {completeTasks.map(task => <Task key={task.id} task={task} />)}
            </div>
        )
    }
}

const Task= (props)=>(
    <article>
        <h1>#{props.task.id} - {props.task.description} {props.task.complete ? '✔' : '❌'}</h1>
    </article>

)

render(
    <TaskApp />,
    document.getElementById('root')
);