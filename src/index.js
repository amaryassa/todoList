import React from 'react';
import { render } from 'react-dom';

const ROUTES={
    home: '#/',
    completeTasks: '#/completeTasks',
    incompleteTasks: '#/incompleteTasks'

}
class TaskApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amar:[],
            currentRoute: ROUTES.home,
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

        this.AddTask = this.AddTask.bind(this);
    }


    componentDidMount(){
        console.log("componentDidMount");
        window.location.hash=ROUTES.home;
        window.onhashchange= (e)=>{
            this.setState({currentRoute : window.location.hash})
        }
    }
    componentWillMount() {
        console.log("componentWillMount");
        fetch("http://localhost:8080/etudiant/1")
                .then(res => res.json())
                .then(
                (result) => {
                    this.setState({
                        amar: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
                )
        



    }
    componentWillUpdate(){
        console.log("componentWillUpdate()");
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
      
        switch (this.state.currentRoute) {
            case ROUTES.home:
                return <Tasklist tasks={this.getAllTasks()} titre="All Tasks" />
                
            case ROUTES.completeTasks:
                return <Tasklist tasks={this.getCompleteTasks()} titre="Complete Tasks" />
                
            case ROUTES.incompleteTasks:
                return <Tasklist tasks={this.getIncompleteTasks()} titre="Incomplete Tasks" />
                
            default:
                return <NotFound/>
                
        }
    }
    AddTask(e){
        e.preventDefault();

        this.setState((prevState)=>{
            const newTask = {
                id: prevState.tasks.length + 1,
                description: this.newTaskDescription.value,
                complete: false
            }

            this.addTaskForm.reset();
            
            return {
                tasks: [...prevState.tasks, newTask]
            }

        })

        
    }

    render() {
        return (
            <div>
                <ul>
                    <li><a href={ROUTES.home}>All Tasks</a></li>
                    <li><a href={ROUTES.completeTasks}>complete Tasks</a></li>
                    <li><a href={ROUTES.incompleteTasks}>incomplete Tasks</a></li>
                </ul>
                <form ref={input => this.addTaskForm=input} onSubmit={this.AddTask}>
                    <input type="text" defaultValue="" ref={(input) => { this.newTaskDescription = input; }}/> 
                    <input type="submit"  value="Add Task" /> 
                </form>

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
   

const Task= (props)=>{
  
    const espaceReserve = props.task.complete
        ? <strike>#{props.task.id} - {props.task.description} {props.task.complete} '✔' </strike>
        : <span>  #{props.task.id} - {props.task.description} {props.task.incomplete}</span>;
    
    return (<article><h1>{espaceReserve}</h1></article>);

}

const NotFound = () =><h1>Page not Found</h1>

render(
    <TaskApp />,
    document.getElementById('root')
);
