import React from 'react';
import { render } from 'react-dom';


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
        return (
            
            <div>
                <h1> All Task</h1>
                {this.state.tasks.map(task =>{
                    return (
                        // <Task taskDetail={task}  />
                        <Task key={task.id} task={task} />
                    )
                })}
            </div>
        )
    }
}

const Task= (props)=>(
    <article>
        <h1>#{props.task.id} - {props.task.description} {props.task.complete ? '✔' : '❌'}</h1>
    </article>

)

// class Task extends React.Component {
//     render() {
//         return (
//             <article>
//                 <h1>#{this.props.task.id} - {this.props.task.description} {this.props.task.complete ? '✔' : '❌'}
//                 </h1>
//             </article>
         
//         )
//     }
// }



render(
    <Tasklist />,
    document.getElementById('root')
);