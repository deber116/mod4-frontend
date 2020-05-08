import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteShowPage from './showNote'
import { Route } from 'react-router-dom';
import {updateNote} from '../actions/noteActions'

class EditNotePage extends Component {
    state = {
        title: this.props.note.title,
        innerText: this.props.note.innerText
    }

    componentDidMount = () => {
        if (this.props.note.tags) {
            const stringTags = this.props.note.tags.map(tag => {
                return tag.name
            })

            this.setState({
                tags: stringTags.join(", ")
            })
        }
    }
    
    handleOnTitleChange = event => {
        this.setState({
            title: event.target.value
        });
    }
    
    handleOnTextChange = event => {
        this.setState({
            innerText: event.target.value
        });
    }

    handleOnTagsChange = event => {
        this.setState({
          tags: event.target.value
        });
    }
    
    handleOnSubmit = event => {
        event.preventDefault()
        const postConfigObj = {
            method: "PATCH",
            headers: 
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "title": this.state.title,
                "inner_text": this.state.innerText,
                "tags": this.state.tags
            })
        }
    
        fetch(`http://localhost:3001/notes/${this.props.note.id}`, postConfigObj)
        .then(resp => resp.json())
        .then(response => {
            console.log(response)
            if (response.id) {
                this.props.updateNote(response)
            } 
            this.props.toggleEdit('')
            this.props.history.push('/notes')
        })
    
    }
    render() {
        return (
            <form className="ui form" onSubmit={this.handleOnSubmit}>
                <div className="field">
                    <label> Title</label>
                    <textarea rows="2" onChange={this.handleOnTitleChange} value={this.state.title}></textarea>
                </div>
                <div className="field">
                    <label>Note</label>
                    <textarea onChange={this.handleOnTextChange} value={this.state.innerText}></textarea>
                </div>
                <div className="field">
                    <label> Tags (Please seperate by commas and a space)</label>
                    <textarea rows="2" onChange={this.handleOnTagsChange} value={this.state.tags}></textarea>
                 </div>
                <button className="ui button" type="submit">Save</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
      userId: state.user.userId
    }
}

const mapDispatchToProps = dispatch => {
return {
    updateNote: note => {
    dispatch(updateNote(note))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNotePage)