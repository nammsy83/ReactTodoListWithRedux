import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/action-creator';
import { bindActionCreators } from 'redux'


class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todotext: ''
        }
    }

    handleChange = (e) => {
        this.setState({ todotext: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todotext);
        this.setState({ todotext: ' ' })

        console.log(this.state.todotext)
    }

    render() {
        return (
            <div className="form-group row">
                <div className="col-sm-10">
                    <input type="text"
                        value={this.state.todotext}
                        className="form-control"
                        placeholder="add todo here"
                        onChange={this.handleChange} />
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.handleSubmit}
                    >
                        Add
                    </button>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}


export default connect(null, mapDispatchToProps)(CreateTodo);