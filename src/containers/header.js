import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions'

class Header extends Component {

    handleLogout = () => {

    }
    render() {
        return(
            <>
                {this.props.user.username?
                     <div className="ui secondary  menu" id="header-menu">
                        <h1 className="header-title" onClick={() => {this.props.history.push('/notes')}}>FlatNote</h1>
                        <div className="right menu">
                            <a className="item" onClick={() => this.props.history.push('/notes/new')}>
                                New Note
                            </a>
                            <a className="ui item" onClick={this.props.logout}>
                                Logout
                            </a>
                        </div>
                    </div>
                :
                    <div className="ui secondary  menu" id="header-menu">
                        <h1 className="header-title" onClick={() => {this.props.history.push('/notes')}}>FlatNote</h1>
                        <div className="right menu">
                            <a className="ui item">
                            Login
                            </a>
                        </div>
                    </div>
                }
            </>  
            
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
}
const mapStateToProps = state => {
     return {
         user: state.user
     }
 }
export default connect(mapStateToProps, mapDispatchToProps)(Header)