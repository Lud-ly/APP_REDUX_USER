import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'
import { bindActionCreators } from 'redux'
class UserList extends Component {
    render() {
        return (
            <div>
                <ul className="col-md-3">
                    {
                        this.props.myUsers.map((user) => {
                            return (
                                <li className="list-group-item" key={user.id}
                                    onClick={() => this.props.selectUser(user)} >
                                    {user.name}
                                    {user.make}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        myUsers: state.users
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)