import React from 'react';
import { render } from 'react-dom';


class Tasklist extends React.Component {
    
    render() {
        const tasks= [
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
        ];
        return (
            
            <div>
                <h1> All Task</h1>
                {tasks.map(task =>{
                    return (
                        <article>
                            <h1>#{task.id} - {task.description}</h1>
                        </article>
                    )
                })
            }
            </div>
        )
    }
}

render(
    <Tasklist />,
    document.getElementById('root')
);