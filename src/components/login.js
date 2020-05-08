import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions/userActions';
import { loadNotes } from '../actions/noteActions';

class LoginPage extends Component {
    state = {
        username: ''
    }
    
    handleOnChange = event => {
        this.setState({
          username: event.target.value
        });
    }

    handleOnSubmit = event => {
        event.preventDefault()

        const postConfigObj = {
            method: "POST",
            headers: 
            {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              "username": this.state.username
            })
        }

        fetch('http://localhost:3001/users', postConfigObj)
        .then(resp => resp.json())
        .then(response => {
            console.log(response)
            if (response.id) {
                this.props.signIn(response)
                this.props.loadNotes(response.notes)
            } 
        })
        this.props.history.push('/notes')
    }

    render() {
        return(
        <div>
            <form className="ui form" onSubmit={this.handleOnSubmit} >
                <input className="ui input" id="login-input" value={this.state.username} onChange={this.handleOnChange}></input>
                <button className="ui button" id="login-button" type="submit">Sign In</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: username => {
            dispatch(signIn(username))
        },
        loadNotes: notes => {
            dispatch(loadNotes(notes))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)