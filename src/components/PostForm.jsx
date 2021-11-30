import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createPost, showAlert} from "../redux/actions.js"
import Alert from "./Alert"
class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {title} = this.state
        if(!title.trim()){
            return this.props.showAlert("Поле не может быть пустым!")
        }
        const newPost = {title, id: Date.now().toString()}
        this.props.createPost(newPost)
        this.setState({title: ''})
    }

    changeInputHandler = (e) => {
        this.setState(prev => ({...prev, ...{
            [e.target.name]: e.target.value
        }}))
    }

    render() {

        return (
            <form onSubmit={this.submitHandler}>
                <h2>POST FORM</h2>
                {   this.props.alert ?
                    <Alert text={this.props.alert}/>
                    : ''
                }
                <div className="form-group mb-3">
                    <label htmlFor="postsForm">Заголовок поста</label>
                    <input 
                    type="text" 
                    className="form-control"
                    id="postsForm" 
                    placeholder="Добавьте новый пост..." 
                    value = {this.state.title}
                    name="title"
                    onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    alert: state.app.alert
})

const mapDispatchToProps = {
    createPost, showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)