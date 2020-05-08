import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AllNotesPage from '../components/allNotes'
import NewNotePage from '../components/newNote'

const NotesPage = ({match, notes}) => {  
    return(
        <div>
            <Switch >
                <Route exact path={'/notes/new'} render={routerProps => {
                    return <NewNotePage {...routerProps} />
                }}/>
                <Route path={'/notes'} render={routerProps => {
                    return <AllNotesPage {...routerProps} notes={notes} />
                }} />
            </Switch>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(NotesPage)