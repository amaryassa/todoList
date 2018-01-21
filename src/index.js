import React from 'react';
import { render } from 'react-dom';

class TaskApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
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

    getAllTasks() {
       return this.state.tasks
    }
    getCompleteTasks() {
        return this.state.tasks.filter(task => task.complete)
    }
    getIncompleteTasks() {
        return this.state.tasks.filter(task => !task.complete)
    }

    render() {
        return (
            <div>
                <Tasklist tasks={this.getAllTasks()} titre="All Tasks"/>
                <Tasklist tasks={this.getCompleteTasks()} titre="Complete Tasks"/>
                <Tasklist tasks={this.getIncompleteTasks()} titre="Incomplete Tasks"/>
            
            </div>

        )
    }
}

const Tasklist= (props)=>(
    <div>
        <h1> {props.titre}</h1>
        {props.tasks.map(task => <Task key={task.id} task={task} />)}
    </div>
    )
   

const Task= (props)=>(
    <article>
        <h1>#{props.task.id} - {props.task.description} {props.task.complete ? '✔' : '❌'}</h1>
    </article>

)

render(
    <TaskApp />,
    document.getElementById('root')
);