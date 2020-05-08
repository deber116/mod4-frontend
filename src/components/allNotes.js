import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteShowPage from './showNote'
import { Route } from 'react-router-dom';
import EditNotePage from './editNote'



class AllNotesPage extends Component {

    state = {
        edit: false,
        note: ''
    }

    toggleEdit = note => {
        this.setState(prevState => {
            return {
                edit: !prevState.edit,
                note: note
            }
        })
    }

    createNoteItems = () => {
        return this.props.notes.map(note => {
            return (
                <a className="item" onClick={() => this.handleOnClick(note)}>
                    <div className="content" >
                        <h3 className="header" textAlign="left">{note.title.slice(0,20)}...</h3>
                        <div className="description">{note.innerText.slice(0, 29)}...</div>
                    </div>
                </a>
            )
        })

    }

    handleOnClick = note => {
        this.props.history.push(`/notes/${note.id}`)
    }

    render() {
        return(
            <div className="ui grid">
                <div className="four wide column">
                    <div className="ui vertical menu" id="notes-list">
                        {this.createNoteItems(this.props.notes)}
                    </div>
                </div>
                {this.state.edit?
                    <div className="twelve wide stretched column">
                        <Route path={'/notes/:noteId'} render={routerProps => <EditNotePage {...routerProps} toggleEdit={this.toggleEdit} note={this.state.note}/> }/>
                    </div>
                :
                    <div className="twelve wide stretched column">
                        <Route path={'/notes/:noteId'} render={routerProps => <NoteShowPage {...routerProps} toggleEdit={this.toggleEdit}/> }/>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {

    console.log(state)
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(AllNotesPage)