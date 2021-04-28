import React , {Component} from 'react';

export default class AddTodo extends Component {
    state = {
        content : ''
    }

    handleChange = (e) =>{
        this.setState({
            content : e.target.value
        })
    }
    handeSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        console.log(this.state);
        this.setState({
            content:''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handeSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}></input>

                </form>
            </div>
        )
    }
}