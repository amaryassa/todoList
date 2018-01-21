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

    renderRoute(){
      
        switch (window.location.pathname) {
            case "/":
                return <Tasklist tasks={this.getAllTasks()} titre="All Tasks" />
                
            case "/completeTasks":
                return <Tasklist tasks={this.getCompleteTasks()} titre="Complete Tasks" />
                
            case "/incompleteTasks":
                return <Tasklist tasks={this.getIncompleteTasks()} titre="Incomplete Tasks" />
                
            default:
                return <NotFound/>
                
        }
    }

    render() {
        return (
            <div>
                {this.renderRoute()}
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
const NotFound = () =><h1>Page not Found</h1>

render(
    <TaskApp />,
    document.getElementById('root')
);
